# ⛔ STOP — CE DÉPÔT N'EST PAS LE SITE MonRhumato.fr

**Si on vous parle de « MonRhumato », « mon site », « le site », « monrhumato.fr » :
ce n'est PAS ici. Vous êtes dans le mauvais dépôt.**

## Le vrai site est ailleurs

| | |
|---|---|
| **Dépôt du site** | `schemoul2/monrhumato` (privé) |
| **Ce dépôt-ci** | `schemoul2/monrhumato-archive` (public) — satellite de veille uniquement |

### Que faire immédiatement

```
1. mcp__Claude_Code_Remote__add_repo  { owner: "schemoul2", repo: "monrhumato", access: "read" }
2. git clone --depth 1 https://github.com/schemoul2/monrhumato /workspace/monrhumato   (timeout ~10 min)
3. mcp__Claude_Code_Remote__register_repo_root { owner:"schemoul2", repo:"monrhumato",
                                                 directory:"/workspace/monrhumato" }
```

Faites-le **avant** de lire quoi que ce soit d'autre ici. Ne répondez pas à une question
sur le site en vous appuyant sur les fichiers de ce dépôt : ils ne décrivent pas le site.

## À quoi sert CE dépôt (et rien de plus)

Satellite public de la **veille quotidienne** documentaire. Il est public exprès :
les moteurs Deep Research (ChatGPT, Gemini) doivent pouvoir lire `mission.txt`
en HTTP sans authentification.

- `mission.txt` — la mission du jour, régénérée chaque matin par GitHub Actions
- `rapports/` — archives des synthèses de veille
- `api/` — quelques fonctions Vercel du satellite (`rss`, `mission-veille`, `deep-search`)
- `.github/workflows/` — les deux crons de la boucle de veille
- `AUTOMATISATION.md`, `DEEP-SEARCH.md` — documentation de cette boucle

Aucune de ces fonctions n'est le site. Le site est une application Next.js
d'environ 4 000 fichiers, adossée à Supabase (projet `Monrhumato`, eu-west-1)
et déployée sur Vercel.

## Ne vous fiez pas au nom

`monrhumato-archive` ressemble à « les archives du site ». Ce n'en est pas :
c'est « les archives de la veille ». La confusion entre les deux dépôts est
l'erreur la plus fréquente sur ce projet — c'est précisément pour l'éviter que
ce fichier existe.
