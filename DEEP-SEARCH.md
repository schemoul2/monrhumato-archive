# Recherche approfondie multi-moteurs — MonRhumato.fr

Lancement **automatique et concurrent** de recherches approfondies (« Deep Research ») sur
**Gemini** (Google) et **ChatGPT** (OpenAI), depuis le site web ou depuis Claude.

## Architecture

- `api/deep-search.js` — fonction Edge Vercel qui lance et suit les tâches :
  - **Gemini** via l'[Interactions API](https://ai.google.dev/gemini-api/docs/deep-research)
    (agents `deep-research-preview-04-2026` et `deep-research-max-preview-04-2026`)
  - **ChatGPT** via la [Responses API](https://developers.openai.com/api/docs/guides/deep-research)
    (modèles `o3-deep-research` et `o4-mini-deep-research`, recherche web activée)
  - Les deux tournent en **mode background** côté fournisseur : le lancement est instantané,
    puis on interroge l'état jusqu'à la fin (5 à 20 minutes en général).
- `deep-search.html` — page web : saisie de la question, choix des moteurs, lancement
  concurrent, suivi automatique, rapports rendus en Markdown avec sources, copie et export.
  L'historique et les tâches en cours sont conservés dans le navigateur (localStorage) :
  on peut fermer la page et revenir plus tard.

## Configuration (Vercel → Settings → Environment Variables)

| Variable | Rôle |
|---|---|
| `GEMINI_API_KEY` | Clé [Google AI Studio](https://aistudio.google.com/apikey) |
| `OPENAI_API_KEY` | Clé [OpenAI Platform](https://platform.openai.com/api-keys) |
| `DEEP_SEARCH_TOKEN` | Jeton secret de votre choix — **fortement recommandé**, sinon n'importe qui peut lancer des recherches à vos frais |

Après ajout des variables, redéployer le projet. La page est alors accessible sur
`https://<votre-domaine>/deep-search.html` (saisir le jeton dans « Jeton d'accès »,
il est mémorisé localement).

## Moteurs disponibles

| Clé | Moteur | Profil |
|---|---|---|
| `gemini` | Gemini Deep Research | Rapide et efficace |
| `gemini-max` | Gemini Deep Research Max | Exhaustivité maximale |
| `chatgpt` | ChatGPT Deep Research (o3) | Synthèse approfondie — le plus coûteux (~10 $/M tokens entrée, 40 $/M sortie ; souvent 1 à 5 $ par rapport) |
| `chatgpt-mini` | ChatGPT Deep Research (o4-mini) | Plus rapide et économique |

## Utilisation depuis Claude (ou tout autre outil)

Lancer deux recherches concurrentes :

```bash
curl -s -X POST "https://<votre-domaine>/api/deep-search" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DEEP_SEARCH_TOKEN" \
  -d '{
    "question": "Synthèse des essais randomisés 2023-2026 sur les anti-IL-23 dans le rhumatisme psoriasique axial, avec citations.",
    "providers": ["gemini", "chatgpt"]
  }'
```

Réponse : un identifiant de tâche par moteur.

```json
{
  "question": "…",
  "launchedAt": "2026-08-03T10:00:00.000Z",
  "jobs": [
    { "provider": "gemini",  "label": "Gemini Deep Research",       "id": "…", "status": "running" },
    { "provider": "chatgpt", "label": "ChatGPT Deep Research (o3)", "id": "…", "status": "running" }
  ]
}
```

Suivre une tâche (répéter toutes les 1 à 2 minutes jusqu'à `"status": "completed"`) :

```bash
curl -s "https://<votre-domaine>/api/deep-search?provider=gemini&id=<ID>" \
  -H "Authorization: Bearer $DEEP_SEARCH_TOKEN"
```

Quand la tâche est terminée, la réponse contient `report` (rapport complet en Markdown)
et `sources` (URLs citées, pour ChatGPT).

Exemple de consigne à donner à Claude Code :

> « Lance une recherche approfondie sur Gemini et ChatGPT via
> https://\<votre-domaine\>/api/deep-search (jeton : …) sur le sujet X,
> attends les résultats et fais-moi une synthèse comparative. »

## Conseils de formulation

Les moteurs Deep Research **ne posent pas de questions de clarification** via l'API :
la question doit être complète d'emblée. Préciser :

- le contexte clinique et la période couverte ;
- le type de sources attendues (essais randomisés, recommandations, méta-analyses…) ;
- le format souhaité (« avec citations en ligne », « tableau comparatif », etc.).

## Limites connues

- Les identifiants de tâche ne sont pas stockés côté serveur (pas de base de données) :
  ils vivent dans le navigateur (page web) ou chez l'appelant (curl/Claude). En cas de
  perte de l'identifiant, le résultat reste consultable dans les consoles des fournisseurs.
- Les agents Gemini Deep Research sont en *preview* : les noms d'agents
  (`deep-research-preview-04-2026`) évolueront — à mettre à jour dans
  `api/deep-search.js` (constante `PROVIDERS`) le moment venu.
- Claude n'est pas inclus dans les moteurs : les recherches Claude se font directement
  dans vos sessions Claude (Recherche approfondie native), l'endpoint sert justement à
  déclencher les moteurs concurrents.
