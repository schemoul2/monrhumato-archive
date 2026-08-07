# Journal — matière première pour Julien App

Ce dossier sert à collecter, au fil du temps, le contenu qui alimentera le
**journal intime** de Julien App.

## Comment ça marche

- Le contenu arrive **surtout par dictée** : texte brut, ponctuation
  approximative, phrases coupées, répétitions. C'est normal, ce n'est pas un
  problème.
- Chaque session de dictée est déposée dans un fichier daté :
  `journal/entrees/AAAA-MM-JJ.md`
- Si plusieurs dictées le même jour, elles sont ajoutées à la suite dans le
  même fichier, séparées par un séparateur horaire.
- `journal/index.json` est **généré** à partir de ces fichiers : c'est le seul
  fichier que Julien App consomme.

## Règles de traitement

1. **On ne réécrit pas la voix.** Le texte dicté est conservé tel quel dans la
   section `## Brut`. On ne corrige ni le style, ni le ton, ni le vocabulaire.
2. **`## Brut` est archivé, pas publié.** Il reste dans le dépôt comme trace
   d'origine mais n'entre jamais dans `index.json` — l'app l'ignore.
3. **`## Relu` est ce que lit l'app.** C'est le même contenu, ponctué et
   découpé, sans réécriture du fond. Une entrée sans `## Relu` n'est pas
   indexée.
4. **Rien n'est supprimé.** Si un passage semble hors sujet, il reste — il
   servira peut-être plus tard.
5. **Pas d'interprétation ajoutée.** Aucune conclusion, aucun résumé
   psychologisant qui n'est pas dans le texte d'origine.

## Format d'une entrée

```markdown
# 2026-08-07

## Brut

<texte dicté, tel quel — archivé, non publié>

## Relu

<même contenu, ponctué et découpé — c'est ce que lit l'app>

## Notes

<contexte, personnes citées, sujets à reprendre — optionnel, publié>
```

## Génération de l'index

```bash
node scripts/genere-journal.js
```

Produit `journal/index.json`, trié du plus récent au plus ancien :

```json
[
  {
    "date": "2026-08-07",
    "titre": "7 août 2026",
    "texte": "…",
    "notes": "…",
    "mots": 214,
    "source": "journal/entrees/2026-08-07.md"
  }
]
```

## Statut

En attente de la première dictée.
