# Veille automatisée multi-IA — solution gratuite, zéro copier-coller

Pipeline entièrement automatique utilisant **uniquement vos abonnements existants**
(ChatGPT Plus, Google AI Pro, Claude) et des services gratuits (Gmail, GitHub Actions, Vercel).
Aucune API payante.

## Comment ça marche — l'aller-retour site ↔ IA

Le point de départ est **votre propre site** : la page `/api/mission-veille` liste
automatiquement les actualités de la semaine de MonRhumato (issues de `/api/rss` :
Inserm, Fondation Arthritis, AFLAR, Futura, SFR, PasseportSanté) accompagnées des
instructions — approfondir chaque actualité, retrouver l'étude source, traduire en
français, résumer pour le grand public et pour le clinicien.

```
                    ┌──── ALLER : les moteurs viennent lire la mission ────┐
                    │        monrhumato.fr/api/mission-veille              │
                    │   (actualités de la semaine + instructions)          │
                    ▼                                                      ▼
Lundi 6h00   ChatGPT (tâche planifiée)                    Gemini (action programmée)
             Deep Research sur chaque actualité           Deep Research sur chaque actualité
                    │                                                      │
                    └──courriel──►  Gmail  ◄──courriel────────────────────┘
                                     ▼
Lundi ~8h23  RETOUR : GitHub Actions (gratuit) :
             1. collecte-emails.py  → lit les rapports dans Gmail (IMAP)
             2. Claude (abonnement) → relit la même liste d'actualités, ajoute sa
                propre recherche, croise les 3 regards → synthèse PAR ARTICLE
             3. commit → Vercel redéploie → visible sur /rapports.html
             4. envoi-email.py      → la synthèse arrive dans votre boîte mail
```

Après la configuration initiale (~20 minutes, une seule fois), **tout tourne seul
chaque semaine** : vous recevez la synthèse comparative par e-mail et elle s'archive
sur votre site.

## Configuration initiale (une seule fois)

### 1. Tâche planifiée ChatGPT (incluse dans Plus — 25 Deep Research/mois)

Dans l'application ChatGPT, demandez simplement :

> Crée une tâche planifiée : chaque lundi à 6h00, ouvre la page
> https://monrhumato.fr/api/mission-veille — elle liste les actualités de la semaine
> de mon site et les instructions. Effectue une recherche approfondie (Deep Research)
> en suivant exactement cette mission : pour chaque actualité listée, retrouve l'étude
> source, approfondis, traduis en français et résume comme demandé. Envoie-moi le
> rapport complet par e-mail.

Vérifiez dans Réglages → Notifications que les notifications par e-mail des tâches sont activées.

### 2. Action programmée Gemini (incluse dans Google AI Pro)

Dans l'application Gemini :

> Chaque lundi à 6h00, ouvre https://monrhumato.fr/api/mission-veille — la page liste
> les actualités de la semaine de mon site et les instructions à suivre. Fais une
> recherche approfondie (Deep Research) en exécutant cette mission : pour chaque
> actualité, source primaire, approfondissement, traduction en français et résumés
> demandés. Rapport détaillé et sourcé, envoyé par e-mail.

(Les actions programmées se gèrent ensuite dans Paramètres → Actions programmées.
Activez les notifications par e-mail.)

### 3. Mot de passe d'application Google (pour que le robot lise/envoie vos e-mails)

1. Activez la validation en deux étapes sur votre compte Google si ce n'est pas fait.
2. Allez sur https://myaccount.google.com/apppasswords → créez un mot de passe
   d'application nommé « veille-monrhumato ».
3. Dans GitHub → votre dépôt → Settings → Secrets and variables → Actions, créez :
   - `GMAIL_USER` = votre adresse Gmail
   - `GMAIL_APP_PASSWORD` = le mot de passe d'application (16 caractères)

### 4. Jeton Claude (utilise votre abonnement, pas d'API payante)

1. Sur votre ordinateur, dans un terminal où Claude Code est installé :
   `claude setup-token`
2. Copiez le jeton généré dans un secret GitHub : `CLAUDE_CODE_OAUTH_TOKEN`

### 5. Activer

Fusionnez cette branche dans `main`. Le workflow `Veille hebdomadaire multi-IA`
tournera chaque lundi (~8h23, heure de Paris). Pour tester immédiatement :
onglet **Actions** → « Veille hebdomadaire multi-IA » → **Run workflow**.

## Personnalisation

- **Contenu de la mission** : instructions et nombre d'articles dans
  `api/mission-veille.js` — c'est LE point central : le modifier change ce que les
  trois moteurs font chaque semaine, sans toucher aux tâches ChatGPT/Gemini.
- **Domaine du site** : variable `SITE_URL` dans `.github/workflows/veille-hebdo.yml`
  et URL dans les prompts de vos tâches ChatGPT/Gemini.
- **Horaire** : ligne `cron:` du workflow (en UTC — Paris = UTC+2 l'été, +1 l'hiver).
  Gardez ~2 h de marge après l'heure des tâches ChatGPT/Gemini.
- **Filtre e-mail** : par défaut, tout e-mail OpenAI/Google de moins de 8 jours est
  collecté (les trop courts sont ignorés). Affinez avec la variable d'environnement
  `GMAIL_QUERY` dans le workflow (syntaxe de recherche Gmail).

## Coût

| Poste | Coût |
|---|---|
| Deep Research ChatGPT (tâche planifiée) | 0 € — quota de l'abonnement Plus |
| Deep Research Gemini (action programmée) | 0 € — quota Google AI Pro |
| Recherche + synthèse Claude | 0 € — usage de l'abonnement (jeton OAuth) |
| GitHub Actions | 0 € — ~5 min/semaine (quota gratuit : 2 000 min/mois) |
| Gmail (IMAP/SMTP), Vercel | 0 € |

## Limites connues

- La richesse des rapports collectés dépend de ce que ChatGPT/Gemini mettent dans leurs
  e-mails de notification (contenu complet ou résumé + lien selon les versions). Le
  collecteur enregistre tout le texte reçu ; Claude complète de toute façon avec sa
  propre recherche.
- Ce pipeline est fait pour la **veille récurrente**. Pour une question ponctuelle à la
  demande depuis le site, il faut les API payantes : voir `DEEP-SEARCH.md`
  (~2,50 $ par lancement double, endpoint déjà prêt dans `api/deep-search.js`).
- Le jeton `claude setup-token` expire au bout d'un certain temps (généralement 1 an) —
  à renouveler si le workflow se met à échouer en authentification.
