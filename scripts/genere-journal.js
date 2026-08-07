// scripts/genere-journal.js — Julien App
// Génère journal/index.json à partir des entrées dictées de journal/entrees/.
// Seule la section « Relu » (et « Notes ») est publiée : le « Brut » reste
// archivé dans le dépôt mais n'est jamais exposé à l'application.

const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const DOSSIER = path.join(RACINE, "journal", "entrees");
const INDEX = path.join(RACINE, "journal", "index.json");

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

// Récupère le contenu d'une section « ## Titre » jusqu'à la section suivante.
function section(md, titre) {
  const re = new RegExp(`^##\\s+${titre}\\s*$`, "im");
  const debut = md.match(re);
  if (!debut) return "";
  const apres = md.slice(debut.index + debut[0].length);
  const suivante = apres.search(/^##\s+/m);
  return (suivante === -1 ? apres : apres.slice(0, suivante)).trim();
}

function libelleDate(iso) {
  const [a, m, j] = iso.split("-").map(Number);
  return `${j} ${MOIS[m - 1]} ${a}`;
}

function compteMots(texte) {
  return texte.split(/\s+/).filter(Boolean).length;
}

function main() {
  if (!fs.existsSync(DOSSIER)) {
    console.error(`Dossier introuvable : ${DOSSIER}`);
    process.exit(1);
  }

  const fichiers = fs.readdirSync(DOSSIER)
    .filter(f => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
    .sort()
    .reverse();

  const entrees = [];
  const ignorees = [];

  for (const fichier of fichiers) {
    const date = fichier.replace(/\.md$/, "");
    const md = fs.readFileSync(path.join(DOSSIER, fichier), "utf-8");
    const texte = section(md, "Relu");

    if (!texte) {
      ignorees.push(date);
      continue;
    }

    const notes = section(md, "Notes");
    entrees.push({
      date,
      titre: libelleDate(date),
      texte,
      ...(notes ? { notes } : {}),
      mots: compteMots(texte),
      source: `journal/entrees/${fichier}`,
    });
  }

  fs.writeFileSync(INDEX, JSON.stringify(entrees, null, 2) + "\n", "utf-8");

  const mots = entrees.reduce((n, e) => n + e.mots, 0);
  console.log(`journal/index.json généré — ${entrees.length} entrée(s), ${mots} mot(s).`);
  if (ignorees.length) {
    console.warn(`Ignorée(s) faute de section « Relu » : ${ignorees.join(", ")}`);
  }
}

main();
