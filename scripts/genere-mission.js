// scripts/genere-mission.js — MonRhumato.fr
// Génère mission.txt à la racine du dépôt : la mission de veille du jour
// (actualités récentes + instructions), lue par les tâches planifiées
// ChatGPT/Gemini via l'URL brute GitHub du dépôt public.
// Exécuté chaque matin par .github/workflows/genere-mission.yml.

const fs = require("fs");
const path = require("path");
const { SOURCES, fetchSource } = require("../api/rss.js");
const { buildMission } = require("../api/mission-veille.js");

async function main() {
  const results = await Promise.allSettled(SOURCES.map(fetchSource));
  const articles = [];
  results.forEach((r, i) => {
    if (r.status === "fulfilled") articles.push(...r.value);
    else console.error(`[RSS] ${SOURCES[i].key} en échec :`, r.reason?.message);
  });
  if (!articles.length) {
    console.error("Aucune actualité récupérée — mission.txt conservé tel quel.");
    process.exit(1);
  }
  articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  const mission = buildMission(articles);
  fs.writeFileSync(path.join(__dirname, "..", "mission.txt"), mission + "\n", "utf-8");
  console.log(`mission.txt généré — ${articles.length} article(s) agrégé(s).`);
}

main().catch(err => { console.error(err); process.exit(1); });
