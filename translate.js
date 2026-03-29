// api/translate.js — Vercel Edge Function
// Déposer dans /api/translate.js à la racine du projet Vercel
// Variable d'environnement à configurer : ANTHROPIC_API_KEY

export const config = { runtime: "edge" };

export default async function handler(req) {
  // CORS — autoriser votre domaine
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  }

  try {
    const { articles } = await req.json();
    if (!articles || !articles.length) {
      return new Response(JSON.stringify({ error: "No articles provided" }), { status: 400, headers });
    }

    const items = articles.map((a, i) =>
      `=== ARTICLE ${i + 1} (PMID ${a.pmid}) ===\nTITRE: ${a.title}\nABSTRACT: ${a.abstract || "(non disponible)"}`
    ).join("\n\n");

    const prompt = `Tu es expert en rhumatologie francophone. Pour chaque article ci-dessous, génère EN FRANÇAIS :
- "summary" : UNE seule phrase (max 35 mots) capturant l'essentiel clinique
- "bullets" : 3 à 4 points clés concis et précis (15-20 mots chacun), commençant par un verbe ou fait clinique
- "frText" : traduction française COMPLÈTE et FIDÈLE de l'abstract entier, avec tous les chiffres, résultats et méthodes, en conservant les sections (Objectifs, Méthodes, Résultats, Conclusion)

Réponds UNIQUEMENT avec un tableau JSON valide, sans backticks ni texte autour :
[{"pmid":"...","summary":"...","bullets":["...","...","..."],"frText":"..."},...]

${items}`;

    const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!apiRes.ok) {
      const err = await apiRes.text();
      return new Response(JSON.stringify({ error: `Anthropic API ${apiRes.status}: ${err}` }), { status: 502, headers });
    }

    const data = await apiRes.json();
    const raw = data.content?.find(b => b.type === "text")?.text || "";
    const clean = raw.replace(/```json|```/g, "").trim();
    const s = clean.indexOf("["), e = clean.lastIndexOf("]");
    if (s === -1 || e === -1) throw new Error("JSON invalide reçu de Claude");
    const parsed = JSON.parse(clean.slice(s, e + 1));

    return new Response(JSON.stringify({ translations: parsed }), { status: 200, headers });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers });
  }
}
