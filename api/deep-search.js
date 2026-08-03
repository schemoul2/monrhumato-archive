// api/deep-search.js — MonRhumato.fr
// Lancement concurrent de recherches approfondies (Deep Research) sur Gemini et ChatGPT
// Variables d'environnement à configurer sur Vercel :
//   GEMINI_API_KEY      — clé API Google AI Studio (https://aistudio.google.com/apikey)
//   OPENAI_API_KEY      — clé API OpenAI (https://platform.openai.com/api-keys)
//   DEEP_SEARCH_TOKEN   — jeton secret de votre choix (fortement recommandé : ces API sont payantes)
//
// POST /api/deep-search  { "question": "...", "providers": ["gemini", "chatgpt"] }
//   → lance en parallèle une recherche sur chaque moteur demandé, retourne les identifiants de tâche
// GET  /api/deep-search?provider=gemini&id=XXX
//   → interroge l'état d'une tâche ; retourne le rapport complet quand elle est terminée

export const config = { runtime: "edge" };

const PROVIDERS = {
  "gemini":       { vendor: "google", agent: "deep-research-preview-04-2026",     label: "Gemini Deep Research" },
  "gemini-max":   { vendor: "google", agent: "deep-research-max-preview-04-2026", label: "Gemini Deep Research Max" },
  "chatgpt":      { vendor: "openai", model: "o3-deep-research",                  label: "ChatGPT Deep Research (o3)" },
  "chatgpt-mini": { vendor: "openai", model: "o4-mini-deep-research",             label: "ChatGPT Deep Research (o4-mini)" },
};

const GOOGLE_BASE = "https://generativelanguage.googleapis.com/v1beta/interactions";
const OPENAI_BASE = "https://api.openai.com/v1/responses";

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Deep-Search-Token",
  "Content-Type": "application/json",
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: HEADERS });
}

function checkAuth(req, url) {
  const expected = process.env.DEEP_SEARCH_TOKEN;
  if (!expected) return true; // pas de jeton configuré → accès libre (déconseillé)
  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const header = req.headers.get("x-deep-search-token") || "";
  const query = url.searchParams.get("token") || "";
  return bearer === expected || header === expected || query === expected;
}

// ─── Lancement ────────────────────────────────────────────────────────────────

async function launchGoogle(agent, question) {
  const r = await fetch(GOOGLE_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
    body: JSON.stringify({ input: question, agent, background: true }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok || !data.id) throw new Error(`Gemini ${r.status}: ${JSON.stringify(data).slice(0, 300)}`);
  return data.id;
}

async function launchOpenAI(model, question) {
  const r = await fetch(OPENAI_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({
      model,
      input: question,
      background: true,
      tools: [{ type: "web_search_preview" }],
    }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok || !data.id) throw new Error(`OpenAI ${r.status}: ${JSON.stringify(data).slice(0, 300)}`);
  return data.id;
}

// ─── Interrogation ────────────────────────────────────────────────────────────

async function pollGoogle(id) {
  const r = await fetch(`${GOOGLE_BASE}/${encodeURIComponent(id)}`, {
    headers: { "x-goog-api-key": process.env.GEMINI_API_KEY },
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Gemini ${r.status}: ${JSON.stringify(data).slice(0, 300)}`);

  if (data.status === "completed") {
    const steps = (data.steps || []).filter(s => s.type === "model_output");
    const last = steps[steps.length - 1] || (data.steps || [])[(data.steps || []).length - 1];
    const report = (last?.content || []).filter(c => c.type === "text").map(c => c.text).join("\n\n");
    return { status: "completed", report, sources: [] };
  }
  if (data.status === "failed") {
    return { status: "failed", error: typeof data.error === "string" ? data.error : JSON.stringify(data.error || "échec inconnu") };
  }
  return { status: "running" };
}

async function pollOpenAI(id) {
  const r = await fetch(`${OPENAI_BASE}/${encodeURIComponent(id)}`, {
    headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` },
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`OpenAI ${r.status}: ${JSON.stringify(data).slice(0, 300)}`);

  if (data.status === "completed") {
    const msg = (data.output || []).filter(o => o.type === "message").pop();
    const parts = (msg?.content || []).filter(c => c.type === "output_text");
    const report = parts.map(c => c.text).join("\n\n");
    const seen = new Set(), sources = [];
    for (const p of parts) for (const a of p.annotations || []) {
      if (a.url && !seen.has(a.url)) { seen.add(a.url); sources.push({ url: a.url, title: a.title || a.url }); }
    }
    return { status: "completed", report, sources };
  }
  if (data.status === "failed" || data.status === "cancelled" || data.status === "incomplete") {
    return { status: "failed", error: data.error?.message || data.incomplete_details?.reason || data.status };
  }
  return { status: "running" }; // queued | in_progress
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: HEADERS });

  const url = new URL(req.url);
  if (!checkAuth(req, url)) return json({ error: "Jeton invalide ou manquant" }, 401);

  try {
    // ── GET : interroger l'état d'une tâche ──
    if (req.method === "GET") {
      const provider = url.searchParams.get("provider");
      const id = url.searchParams.get("id");
      const conf = PROVIDERS[provider];
      if (!conf || !id) {
        return json({
          error: "Paramètres requis : provider et id",
          providers: Object.fromEntries(Object.entries(PROVIDERS).map(([k, v]) => [k, v.label])),
        }, 400);
      }
      const missing = keyMissing(conf.vendor);
      if (missing) return json({ error: missing }, 500);

      const result = conf.vendor === "google" ? await pollGoogle(id) : await pollOpenAI(id);
      return json({ provider, label: conf.label, id, ...result });
    }

    // ── POST : lancer des recherches concurrentes ──
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      const question = (body.question || "").trim();
      let providers = Array.isArray(body.providers) && body.providers.length ? body.providers : ["gemini", "chatgpt"];
      providers = [...new Set(providers)];

      if (!question) return json({ error: "Champ « question » requis" }, 400);
      const unknown = providers.filter(p => !PROVIDERS[p]);
      if (unknown.length) {
        return json({ error: `Moteur(s) inconnu(s) : ${unknown.join(", ")}`, valides: Object.keys(PROVIDERS) }, 400);
      }

      // Lancements concurrents — chaque moteur démarre en parallèle
      const jobs = await Promise.all(providers.map(async p => {
        const conf = PROVIDERS[p];
        const missing = keyMissing(conf.vendor);
        if (missing) return { provider: p, label: conf.label, error: missing };
        try {
          const id = conf.vendor === "google"
            ? await launchGoogle(conf.agent, question)
            : await launchOpenAI(conf.model, question);
          return { provider: p, label: conf.label, id, status: "running" };
        } catch (err) {
          return { provider: p, label: conf.label, error: err.message };
        }
      }));

      return json({ question, launchedAt: new Date().toISOString(), jobs });
    }

    return json({ error: "Méthode non autorisée" }, 405);
  } catch (err) {
    return json({ error: err.message }, 500);
  }
}

function keyMissing(vendor) {
  if (vendor === "google" && !process.env.GEMINI_API_KEY) return "GEMINI_API_KEY non configurée sur Vercel";
  if (vendor === "openai" && !process.env.OPENAI_API_KEY) return "OPENAI_API_KEY non configurée sur Vercel";
  return null;
}
