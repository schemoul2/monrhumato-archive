// api/mission-veille.js — MonRhumato.fr
// Page « mission » lue chaque semaine par les agents Deep Research (ChatGPT, Gemini, Claude).
// Elle liste les actualités récentes du site (via /api/rss) et donne les instructions
// d'approfondissement, de traduction et de résumé. C'est l'« aller » de la boucle :
// les moteurs viennent chercher ici leur travail de la semaine, puis renvoient leur
// rapport par e-mail (le « retour » est traité par .github/workflows/veille-hebdo.yml).

const JOURS = 8; // fenêtre de fraîcheur des actualités
const MAX_ARTICLES = 12;

function buildMission(articles, now = new Date()) {
  const seuil = now.getTime() - JOURS * 86400000;
  const recents = articles.filter(a => a.pubDate && new Date(a.pubDate).getTime() >= seuil);
  const liste = (recents.length ? recents : articles).slice(0, MAX_ARTICLES);

  const lignes = liste.map((a, i) => {
    const date = a.pubDate ? a.pubDate.slice(0, 10) : "date inconnue";
    return `${i + 1}. ${a.title}
   Source : ${a.sourceLabel} — ${date}
   Résumé initial : ${a.summary || "(non disponible)"}
   Lien : ${a.link}`;
  }).join("\n\n");

  return `MISSION DE VEILLE HEBDOMADAIRE — MonRhumato.fr
Générée le ${now.toISOString().slice(0, 10)} — ${liste.length} actualité(s)${recents.length ? " des " + JOURS + " derniers jours" : " (les plus récentes)"}

Tu es chargé(e) d'une recherche approfondie pour MonRhumato.fr, site francophone
d'information en rhumatologie. Ta mission porte sur les actualités ci-dessous,
publiées cette semaine sur le site.

═══ ACTUALITÉS DE LA SEMAINE ═══

${lignes}

═══ INSTRUCTIONS ═══

Pour CHAQUE actualité ci-dessus :
1. Retrouve la SOURCE PRIMAIRE au-delà de l'article de presse : étude originale
   (PubMed, DOI), communiqué officiel, recommandation de société savante.
2. Approfondis : contexte scientifique, méthodologie, effectifs, chiffres clés,
   niveau de preuve, limites de l'étude.
3. Traduis en FRANÇAIS toutes les informations issues de sources anglophones
   (fidèlement, avec les chiffres).
4. Rédige pour chaque actualité :
   a) « En bref » — 2 phrases accessibles au grand public ;
   b) « Pour le clinicien » — implications pratiques pour un rhumatologue ;
   c) « Détails » — l'approfondissement traduit et sourcé.
5. Cite systématiquement tes sources avec des liens.

FORMAT DU RAPPORT : une section par actualité, dans l'ordre et avec les titres
ci-dessus. Termine par une section « Autres actualités notables de la semaine »
si tes recherches révèlent des sujets majeurs en rhumatologie absents de la liste.
Rapport intégralement en français.`;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
  if (req.method === "OPTIONS") { res.status(200).end(); return; }

  try {
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const proto = req.headers["x-forwarded-proto"] || "https";
    const r = await fetch(`${proto}://${host}/api/rss`);
    if (!r.ok) throw new Error(`/api/rss a répondu ${r.status}`);
    const { articles } = await r.json();
    if (!articles || !articles.length) throw new Error("Aucune actualité disponible");

    if (req.query && req.query.format === "json") {
      res.status(200).json({ articles: articles.slice(0, MAX_ARTICLES) });
      return;
    }
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(buildMission(articles));
  } catch (err) {
    res.status(502).setHeader("Content-Type", "text/plain; charset=utf-8");
    res.send(`Mission indisponible : ${err.message}\nRéessaie dans quelques minutes.`);
  }
};

module.exports.buildMission = buildMission;
