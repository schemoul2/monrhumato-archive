// api/recommandations.js — MonRhumato.fr
// Liens directs vers les recommandations (pas les pages d'accueil des sociétés)

const RECOMMENDATIONS = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: "eular-jak-safety-2025",
    society: "EULAR", societyColor: "#d4a017",
    title: "Sécurité des inhibiteurs de JAK — point de position EULAR",
    pathology: "Polyarthrite rhumatoïde", category: "Sécurité",
    publicationDate: "2025-03-10", updatedAt: "2025-03-10",
    url: "https://ard.bmj.com/content/84/1/8",
    summary: "Point de position EULAR sur la sécurité CV et néoplasique des JAKi (ORAL Surveillance). Stratification du risque et indications préférentielles.",
    keyPoints: ["Éviter JAKi chez > 65 ans, fumeurs ou risque CV élevé","Préférer abatacept ou rituximab dans ces profils","Surveillance CV et bilan lipidique sous JAKi","Dépistage cancers cutanés au long cours","Réévaluation bénéfice/risque annuelle obligatoire"],
    quiz: [
      {type:"tf",q:"Les JAKi sont déconseillés chez les > 65 ans avec facteurs de risque CV.",answer:true,expl:"EULAR recommande d'éviter les JAKi dans ce profil, en privilégiant abatacept ou rituximab."},
      {type:"mcq",q:"Quel essai a conduit à la réévaluation des JAKi ?",options:["MONARCH","ORAL Surveillance","EMPIRE","BREVACTA"],answer:1,expl:"L'essai ORAL Surveillance a mis en évidence un surrisque CV et néoplasique sous tofacitinib vs anti-TNF."}
    ]
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    id: "eular-cvd-rheum-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Risque cardiovasculaire dans les rhumatismes inflammatoires — EULAR 2024",
    pathology: "Transversal", category: "Comorbidités",
    publicationDate: "2024-12-01", updatedAt: "2024-12-01",
    url: "https://ard.bmj.com/content/84/1/7",
    summary: "Mise à jour EULAR 2024 sur le risque CV dans la PR, lupus et SpA. SCORE2, multiplicateur × 1,5, statines.",
    keyPoints: ["Évaluation CV tous les 5 ans (SCORE2)","Multiplicateur × 1,5 pour PR et lupus","Statines si risque CV modéré à élevé","Contrôle de l'activité inflammatoire prioritaire","Éviction tabac, activité physique"],
    quiz: [
      {type:"mcq",q:"Quel coefficient multiplicateur EULAR recommande pour la PR ?",options:["× 1,0","× 1,5","× 2,0","× 3,0"],answer:1,expl:"EULAR recommande × 1,5 pour la PR et le lupus appliqué au SCORE2."}
    ]
  },
  {
    id: "eular-pregnancy-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Grossesse dans les rhumatismes inflammatoires et connectivites — EULAR 2024",
    pathology: "Transversal", category: "Situations particulières",
    publicationDate: "2024-10-01", updatedAt: "2024-10-01",
    url: "https://ard.bmj.com/content/early/2024/09/17/ard-2024-225816",
    summary: "Mise à jour EULAR 2024 sur la grossesse : sécurité des biothérapies, SAPL obstétrical, planification préconceptionnelle.",
    keyPoints: ["HCQ compatible grossesse et allaitement","Anti-TNF : arrêt T3 sauf certolizumab","Rituximab contre-indiqué pendant la grossesse","Aspirine + HBPM dans le SAPL obstétrical","Planification préconceptionnelle systématique"],
    quiz: [
      {type:"tf",q:"Le certolizumab peut être maintenu tout au long de la grossesse.",answer:true,expl:"Pas de transfert placentaire actif — peut être maintenu si nécessaire."}
    ]
  },
  {
    id: "acr-psa-2024",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Rhumatisme psoriasique — ACR Guidelines 2024",
    pathology: "Rhumatisme psoriasique", category: "Traitement",
    publicationDate: "2024-11-15", updatedAt: "2024-11-15",
    url: "https://rheumatology.org/psa-guideline",
    summary: "Algorithme ACR 2024 pour le PsA selon manifestations dominantes : articulaire, cutanée, enthèse, rachis.",
    keyPoints: ["Anti-TNF en première biothérapie articulaire","Anti-IL-17 si atteinte cutanée prédominante","Anti-IL-23 : efficacité articulaire et cutanée","Apremilast pour formes légères à modérées","Évaluation enthèses et dactylites"],
    quiz: [
      {type:"mcq",q:"En cas d'atteinte cutanée prédominante dans le PsA, quelle classe ?",options:["Anti-TNF","Anti-IL-17","Méthotrexate","JAKi"],answer:1,expl:"Anti-IL-17 privilégiés pour leur efficacité supérieure sur le psoriasis cutané."}
    ]
  },
  {
    id: "eular-sjogren-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Syndrome de Sjögren primitif — premières recommandations EULAR",
    pathology: "Sjögren", category: "Traitement",
    publicationDate: "2024-09-01", updatedAt: "2024-09-01",
    url: "https://ard.bmj.com/content/early/2024/08/29/ard-2024-225851",
    summary: "Premières recommandations EULAR pour le Sjögren primitif : gestion glandulaire, manifestations systémiques, dépistage du lymphome.",
    keyPoints: ["Pilocarpine ou céviméline pour la sécheresse","HCQ pour manifestations systémiques légères","Rituximab pour formes systémiques sévères","Dépistage lymphome tous les 1 à 2 ans","ESSDAI systématique"],
    quiz: [
      {type:"tf",q:"Le rituximab est recommandé dans les formes systémiques sévères du Sjögren.",answer:true,expl:"EULAR 2024 recommande le rituximab pour les manifestations sévères réfractaires."}
    ]
  },
  {
    id: "has-fibromyalgie-2024",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Fibromyalgie — recommandations de bonne pratique HAS 2024",
    pathology: "Fibromyalgie", category: "Bonne pratique",
    publicationDate: "2024-06-20", updatedAt: "2024-06-20",
    url: "https://www.has-sante.fr/jcms/p_3241123",
    summary: "Recommandations HAS 2024 : diagnostic sur critères ACR 2010/2016, prise en charge multimodale, pas d'opioïdes forts.",
    keyPoints: ["Diagnostic sur critères ACR 2010/2016 (WPI + SS)","Exercice physique adapté — pilier central","TCC + éducation thérapeutique","Duloxétine ou prégabaline en adjuvant","Pas d'opioïdes forts recommandés"],
    quiz: [
      {type:"tf",q:"Les opioïdes forts sont recommandés dans la fibromyalgie sévère.",answer:false,expl:"La HAS 2024 déconseille les opioïdes forts. La prise en charge multimodale est centrale."},
      {type:"mcq",q:"Pierre angulaire du traitement de la fibromyalgie ?",options:["Prégabaline","Exercice + TCC","Duloxétine","Infiltrations"],answer:1,expl:"Exercice physique + TCC sont le pilier thérapeutique."}
    ]
  },
  {
    id: "eular-pmr-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Polymyalgia rheumatica — recommandations EULAR 2024",
    pathology: "Polymyalgia rheumatica", category: "Traitement",
    publicationDate: "2024-04-15", updatedAt: "2024-04-15",
    url: "https://ard.bmj.com/content/early/2024/03/27/ard-2024-225641",
    summary: "Mise à jour EULAR pour la PMR : corticoïdes, décroissance, tocilizumab pour formes cortico-dépendantes.",
    keyPoints: ["Prednisone 12,5–25 mg/j en induction","Décroissance sur 12 à 18 mois minimum","Tocilizumab SC pour formes cortico-dépendantes","Surveillance CRP/VS mensuelle la 1re année","Écho Doppler temporal si suspicion Horton"],
    quiz: [
      {type:"mcq",q:"Dose initiale EULAR pour la PMR ?",options:["5–10 mg/j","12,5–25 mg/j","40–60 mg/j","1 mg/kg/j"],answer:1,expl:"EULAR recommande 12,5–25 mg/j de prednisone en induction pour la PMR."}
    ]
  },

  // ── MÉCANIQUES ────────────────────────────────────────────────────────────
  {
    id: "eular-arthrose-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Arthrose du genou, hanche et main — EULAR 2023",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2023-01-15", updatedAt: "2023-07-20",
    url: "https://ard.bmj.com/content/82/8/1031",
    summary: "Recommandations EULAR 2023. Exercice et perte de poids comme pilier central. AINS topiques préférés aux systémiques.",
    keyPoints: ["Exercice physique adapté — pilier central","Perte de poids si surpoids/obésité","AINS topiques avant AINS systémiques","Infiltrations de corticoïdes en adjuvant","Chirurgie en dernier recours"],
    quiz: [
      {type:"tf",q:"L'exercice physique est contre-indiqué dans l'arthrose douloureuse active.",answer:false,expl:"Au contraire — l'exercice adapté est le traitement central de l'arthrose selon EULAR 2023."}
    ]
  },
  {
    id: "oarsi-arthrose-2022",
    society: "OARSI", societyColor: "#e53e3e",
    title: "Non-Surgical Management of Knee, Hip and Polyarticular Osteoarthritis — OARSI 2022",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2022-03-01", updatedAt: "2023-03-01",
    url: "https://oarsijournal.com/article/S1063-4584(22)00046-0/fulltext",
    summary: "Recommandations OARSI pour la prise en charge non chirurgicale de l'arthrose. Hiérarchie des interventions selon profils de patients.",
    keyPoints: ["Exercice physique — recommandation forte pour tous","Perte de poids si IMC > 25","AINS topiques pour arthrose du genou","AINS oraux — balance bénéfice/risque","Acide hyaluronique — non recommandé en routine"],
    quiz: [
      {type:"tf",q:"L'OARSI recommande les injections d'acide hyaluronique en routine pour l'arthrose du genou.",answer:false,expl:"OARSI ne recommande pas l'AH en routine — bénéfice clinique modeste et controversé."}
    ]
  },
  {
    id: "has-tendinopathie-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Tendinopathies des membres — recommandations HAS",
    pathology: "Tendinopathie", category: "Traitement",
    publicationDate: "2023-06-01", updatedAt: "2023-06-01",
    url: "https://www.has-sante.fr/jcms/p_3267177",
    summary: "Recommandations HAS pour les tendinopathies : diagnostic clinique, kinésithérapie excentrique en premier, place des injections.",
    keyPoints: ["Diagnostic clinique avant tout","Kinésithérapie excentrique en première intention","Éviter les infiltrations de corticoïdes répétées","Ondes de choc : indication validée pour tendinopathies chroniques","Chirurgie exceptionnelle après échec du traitement conservateur"],
    quiz: [
      {type:"tf",q:"Les infiltrations de corticoïdes répétées sont recommandées dans les tendinopathies chroniques.",answer:false,expl:"Les infiltrations répétées sont déconseillées — risque de rupture tendineuse. La kinésithérapie excentrique est privilégiée."},
      {type:"mcq",q:"Quel traitement physique est recommandé en première intention dans les tendinopathies ?",options:["Ondes de choc","Kinésithérapie excentrique","Chirurgie","Infiltrations PRP"],answer:1,expl:"La kinésithérapie excentrique est le traitement de référence en première intention."}
    ]
  },
  {
    id: "has-lombalgie-2019",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Lombalgie commune — prise en charge HAS 2019",
    pathology: "Lombalgie", category: "Bonne pratique",
    publicationDate: "2019-04-01", updatedAt: "2022-01-10",
    url: "https://www.has-sante.fr/jcms/c_2961499",
    summary: "Recommandations HAS pour la lombalgie commune : maintien de l'activité, antalgiques, place de l'imagerie et des thérapies physiques.",
    keyPoints: ["Maintien de l'activité physique — essentiel","Éviter le repos au lit","Antalgiques par palier selon intensité","Imagerie non systématique dans la lombalgie aiguë < 4 semaines","École du dos + approche biopsychosociale pour les formes chroniques"],
    quiz: [
      {type:"tf",q:"Le repos au lit est recommandé dans la lombalgie aiguë.",answer:false,expl:"Le repos au lit est déconseillé. Le maintien de l'activité physique est le pilier du traitement."},
      {type:"mcq",q:"L'imagerie (IRM ou scanner) est-elle systématique dans la lombalgie aiguë sans signe d'alarme ?",options:["Oui, à réaliser dès J1","Oui, après 4 semaines","Non, non systématique < 4 semaines","Oui, uniquement la radiographie"],answer:2,expl:"L'imagerie n'est pas systématique dans la lombalgie aiguë sans signe d'alarme (< 4 semaines)."}
    ]
  },
  {
    id: "has-coiffe-2021",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Pathologie de la coiffe des rotateurs — HAS 2021",
    pathology: "Épaule / Coiffe des rotateurs", category: "Bonne pratique",
    publicationDate: "2021-09-01", updatedAt: "2022-06-01",
    url: "https://www.has-sante.fr/jcms/p_3271116",
    summary: "Recommandations HAS pour la coiffe des rotateurs : diagnostic clinique et échographique, kinésithérapie en premier, place de la chirurgie.",
    keyPoints: ["Échographie en première intention (pas IRM d'emblée)","Kinésithérapie analytique — traitement de première ligne","Infiltration sous-acromiale guidée si douleurs sévères","Chirurgie après 6 mois d'échec conservateur","Surveillance rupture transfixiante : indication opératoire précoce"],
    quiz: [
      {type:"mcq",q:"Quel examen d'imagerie est recommandé en première intention pour la coiffe ?",options:["IRM","Arthro-IRM","Échographie","Scanner"],answer:2,expl:"L'échographie est l'examen de première intention, moins coûteuse et aussi fiable pour les ruptures."},
      {type:"tf",q:"La chirurgie est recommandée dès le premier épisode de tendinopathie de la coiffe.",answer:false,expl:"La kinésithérapie pendant au moins 6 mois est à tenter avant d'envisager la chirurgie."}
    ]
  },
  {
    id: "has-canal-carpien-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Syndrome du canal carpien — recommandations HAS 2023",
    pathology: "Canal carpien", category: "Diagnostic",
    publicationDate: "2023-03-01", updatedAt: "2023-03-01",
    url: "https://www.has-sante.fr/jcms/p_3346590",
    summary: "Recommandations HAS pour le SCC : diagnostic clinique + EMG, orthèse nocturne, infiltration, chirurgie selon sévérité.",
    keyPoints: ["Diagnostic clinique (Tinel, Phalen) + EMG de confirmation","Orthèse nocturne en première intention formes légères","Infiltration de corticoïdes : soulagement transitoire","Chirurgie (libération du nerf médian) si EMG sévère ou échec","Délai opératoire à réduire si déficit sensitif ou moteur"],
    quiz: [
      {type:"tf",q:"L'EMG est obligatoire avant toute infiltration dans le syndrome du canal carpien.",answer:false,expl:"L'EMG n'est pas obligatoire avant infiltration — il est utile pour confirmer le diagnostic et évaluer la sévérité."},
      {type:"mcq",q:"Quel est le traitement de première intention dans le SCC léger à modéré ?",options:["Chirurgie","Infiltration de corticoïdes","Orthèse nocturne","AINS oraux"],answer:2,expl:"L'orthèse nocturne est recommandée en première intention dans les formes légères à modérées."}
    ]
  },
  {
    id: "has-epicondylite-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Épicondylite latérale (tennis elbow) — recommandations HAS",
    pathology: "Épicondylite", category: "Traitement",
    publicationDate: "2023-04-01", updatedAt: "2023-04-01",
    url: "https://www.has-sante.fr/jcms/p_3267177",
    summary: "Recommandations pour l'épicondylite latérale : rééducation excentrique, ondes de choc, place limitée des infiltrations.",
    keyPoints: ["Éviction des gestes déclenchants","Kinésithérapie — exercices excentriques validés","Ondes de choc : efficacité démontrée formes > 3 mois","Infiltrations corticoïdes : efficacité court terme uniquement","Chirurgie : indication exceptionnelle après > 12 mois d'échec"],
    quiz: [
      {type:"tf",q:"Les infiltrations de corticoïdes guérissent définitivement l'épicondylite.",answer:false,expl:"L'effet des infiltrations est court terme (4-8 semaines). À long terme, la kinésithérapie est supérieure."}
    ]
  },
  {
    id: "eular-acr-canal-lombaire-2021",
    society: "EULAR", societyColor: "#d4a017",
    title: "Sténose du canal lombaire — recommandations de prise en charge",
    pathology: "Canal lombaire étroit", category: "Traitement",
    publicationDate: "2021-06-01", updatedAt: "2022-03-01",
    url: "https://ard.bmj.com/content/80/9/1107",
    summary: "Prise en charge de la sténose du canal lombaire : traitement conservateur en premier, décompression chirurgicale si échec.",
    keyPoints: ["Traitement conservateur en première ligne (kinésithérapie, AINS)","Infiltrations épidurales : efficacité transitoire sur la claudication","Décompression chirurgicale si claudication sévère ou déficit neurologique","IRM nécessaire pour confirmer le niveau de sténose","Résultats chirurgicaux bons mais dégradation possible à 5 ans"],
    quiz: [
      {type:"tf",q:"La chirurgie est le traitement de première intention dans le canal lombaire étroit.",answer:false,expl:"Le traitement conservateur (kiné, infiltrations) est tenté en premier sauf si déficit neurologique ou claudication sévère invalidante."}
    ]
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    id: "eular-vaccination-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Vaccination sous immunosuppresseurs — EULAR 2023",
    pathology: "Transversal", category: "Prévention",
    publicationDate: "2023-11-01", updatedAt: "2024-01-15",
    url: "https://ard.bmj.com/content/82/12/1608",
    summary: "Données post-COVID, vaccin zona Shingrix, calendrier pré-biothérapie, situations d'urgence.",
    keyPoints: ["Mise à jour vaccinale avant toute biothérapie","Shingrix > 50 ans sous immunosuppresseurs","Grippe annuelle systématique","Pneumocoque (PCV20) tous les 5 ans","Vaccins vivants contre-indiqués sous biothérapies"],
    quiz: [
      {type:"tf",q:"Les vaccins vivants sont contre-indiqués sous biothérapies.",answer:true,expl:"Vaccins vivants (ROR, varicelle, fièvre jaune) contre-indiqués sous biothérapies."},
      {type:"mcq",q:"Quel vaccin zona sous immunosuppresseurs ?",options:["Zostavax (vivant)","Shingrix (inactivé)","Les deux","Aucun"],answer:1,expl:"Shingrix est le seul recommandé — Zostavax (vivant) est contre-indiqué."}
    ]
  },
  {
    id: "eular-cppd-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Dépôts de CPPD / Chondrocalcinose — premières recommandations EULAR",
    pathology: "CPPD / Chondrocalcinose", category: "Traitement",
    publicationDate: "2023-07-01", updatedAt: "2023-07-01",
    url: "https://ard.bmj.com/content/82/8/1024",
    summary: "Premières recommandations EULAR spécifiques à la maladie à dépôts de CPPD. Accès aigus, formes chroniques, bilan secondaire.",
    keyPoints: ["Colchicine ou AINS pour les accès aigus","Bilan métabolique (magnésium, PTH, ferritine)","Pas de traitement hypocalcifiant disponible","Infiltrations locales en accès monoarticulaire","Colchicine au long cours pour formes récidivantes"],
    quiz: [
      {type:"tf",q:"Il existe un traitement hypocalcifiant validé pour les dépôts de CPPD.",answer:false,expl:"Contrairement à la goutte, aucun traitement ne dissout les dépôts de CPPD à ce jour."}
    ]
  },
  {
    id: "eular-myosites-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Myosites inflammatoires idiopathiques — EULAR/ACR 2023",
    pathology: "Myosites", category: "Traitement",
    publicationDate: "2023-09-15", updatedAt: "2023-09-15",
    url: "https://ard.bmj.com/content/82/12/1515",
    summary: "Premières recommandations conjointes pour PM, DM, IBM, MNAI. Corticoïdes, immunosuppresseurs, dépistage néoplasique.",
    keyPoints: ["Corticoïdes en induction (1 mg/kg/j)","MTX ou azathioprine en épargne cortisonique","Rituximab pour formes réfractaires","IVIG pour myosites sévères réfractaires","Dépistage néoplasique systématique (DM)"],
    quiz: [
      {type:"mcq",q:"Quel dépistage est systématique dans la dermatomyosite ?",options:["Cardiovasculaire","Néoplasique","Neurologique","Ophtalmologique"],answer:1,expl:"Dépistage néoplasique systématique dans la DM les 3 premières années."}
    ]
  },
  {
    id: "eular-ssc-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Sclérodermie systémique — recommandations EULAR 2023",
    pathology: "Sclérodermie", category: "Traitement",
    publicationDate: "2023-08-01", updatedAt: "2023-08-01",
    url: "https://ard.bmj.com/content/84/1/15",
    summary: "Nintédanib pour la PID, tocilizumab, dépistage HTAP annuel.",
    keyPoints: ["Nintédanib pour la PID","Tocilizumab pour ralentir la PID","Cyclophosphamide ou mycophénolate pour PID sévère","Dépistage HTAP annuel par écho","Inhibiteurs récepteurs endothéline pour HTAP"],
    quiz: [
      {type:"tf",q:"Le tocilizumab a une indication validée pour la PID dans la sclérodermie.",answer:true,expl:"Indication obtenue dans la ScS-ILD pour ralentir le déclin de la CVF."}
    ]
  },
  {
    id: "has-osteoporose-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Ostéoporose — prévention et traitement HAS 2023",
    pathology: "Ostéoporose", category: "Bonne pratique",
    publicationDate: "2023-05-01", updatedAt: "2023-09-20",
    url: "https://www.has-sante.fr/jcms/p_3300379",
    summary: "FRAX, seuils d'intervention, séquences thérapeutiques, consolidation après dénosumab.",
    keyPoints: ["Évaluation par FRAX","Bisphosphonates en première intention","Dénosumab — relais obligatoire à l'arrêt","Romosozumab pour formes sévères","Calcium + vitamine D systématique"],
    quiz: [
      {type:"tf",q:"Le FRAX est l'outil recommandé par la HAS pour le risque fracturaire.",answer:true,expl:"Le FRAX est l'outil validé pour estimer le risque à 10 ans."},
      {type:"mcq",q:"Risque à prévenir à l'arrêt du dénosumab ?",options:["Hypercalcémie rebond","Fractures vertébrales multiples","Ostéonécrose de mâchoire","Insuffisance rénale"],answer:1,expl:"Arrêt brutal → rebond osseux → fractures vertébrales multiples. Relais bisphosphonate impératif."}
    ]
  },
  {
    id: "eular-acr-sapl-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Syndrome des antiphospholipides — recommandations EULAR/ACR 2023",
    pathology: "SAPL", category: "Traitement",
    publicationDate: "2023-06-01", updatedAt: "2023-06-01",
    url: "https://ard.bmj.com/content/82/10/1327",
    summary: "Première reco conjointe EULAR/ACR. AVK, aspirine, éviction des AOD à haut risque.",
    keyPoints: ["AVK (INR 2–3) pour SAPL veineux","AVK (INR 3–4) pour SAPL artériel","Aspirine + HBPM pour SAPL obstétrical","Éviter AOD si triple positivité","HCQ en adjuvant dans le SAPL lupique"],
    quiz: [
      {type:"tf",q:"Les AOD sont recommandés en première intention dans le SAPL.",answer:false,expl:"Les AOD sont déconseillés dans le SAPL à haut risque. Les AVK restent la référence."}
    ]
  },
  {
    id: "asas-eular-imaging-2023",
    society: "ASAS", societyColor: "#7c4dff",
    title: "Imagerie dans les spondyloarthrites — ASAS/EULAR 2023",
    pathology: "Spondyloarthrite", category: "Diagnostic",
    publicationDate: "2023-04-01", updatedAt: "2023-04-01",
    url: "https://ard.bmj.com/content/82/10/1329",
    summary: "Utilisation optimale de l'IRM, radiographie et échographie dans le diagnostic et suivi des SpA.",
    keyPoints: ["IRM des sacro-iliaques en première intention","Radiographie pour suivi structural","Pas de TDM en routine","Échographie pour enthèses et articulations périphériques","IRM de contrôle à 3–6 mois"],
    quiz: [
      {type:"mcq",q:"Examen de référence pour la sacro-iliite précoce ?",options:["Radiographie","TDM","IRM des sacro-iliaques","Scintigraphie"],answer:2,expl:"L'IRM détecte l'inflammation précoce avant les lésions radiographiques."}
    ]
  },
  {
    id: "esceo-2023",
    society: "ESCEO", societyColor: "#6b46c1",
    title: "Ostéoporose post-ménopausique — algorithme ESCEO/IOF 2023",
    pathology: "Ostéoporose", category: "Traitement",
    publicationDate: "2023-02-01", updatedAt: "2023-02-01",
    url: "https://www.esceo.org/sites/esceo/files/pdf/ESCEO-algorithm-2023-Osteoporosis-International.pdf",
    summary: "Algorithme ESCEO/IOF 2023 : séquences thérapeutiques anabolisants et antiresorptifs.",
    keyPoints: ["Bisphosphonates oraux en première ligne","Dénosumab si intolérance bisphosphonates","Romosozumab ou tériparatide pour formes sévères","Séquence anabolisant → antiresorptif recommandée","Réévaluation à 3–5 ans"],
    quiz: [
      {type:"mcq",q:"Séquence ESCEO pour l'ostéoporose sévère ?",options:["Antiresorptif → anabolisant","Anabolisant → antiresorptif","Anabolisant seul","Antiresorptif 10 ans"],answer:1,expl:"Commencer par un anabolisant (romosozumab/tériparatide) puis consolider par un antiresorptif."}
    ]
  },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    id: "eular-ra-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Polyarthrite rhumatoïde — recommandations EULAR 2022",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2022-11-01", updatedAt: "2024-03-15",
    url: "https://ard.bmj.com/content/82/1/3",
    summary: "Thérapies ciblées, treat-to-target, MTX pivot, JAKi après évaluation du risque CV.",
    keyPoints: ["Cible : rémission ou faible activité (DAS28 < 3,2)","Méthotrexate en première intention","bDMARDs ou JAKi si échec csDMARDs","Adaptation selon comorbidités et risque CV","Décroissance progressive en rémission"],
    quiz: [
      {type:"tf",q:"Le MTX reste le traitement de référence en première intention dans la PR.",answer:true,expl:"EULAR 2022 maintient le MTX comme pierre angulaire, sauf contre-indication."},
      {type:"mcq",q:"Cible thérapeutique dans la PR ?",options:["Faible activité seule","Rémission ou faible activité","DAS28 < 2,6 obligatoire","Amélioration > 50%"],answer:1,expl:"Rémission ou faible activité (DAS28 < 3,2) si rémission non atteignable."}
    ]
  },
  {
    id: "eular-spa-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Spondyloarthrites axiales — recommandations EULAR 2022",
    pathology: "Spondyloarthrite", category: "Traitement",
    publicationDate: "2022-10-01", updatedAt: "2023-06-10",
    url: "https://ard.bmj.com/content/82/1/19",
    summary: "Anti-IL-17, stratification radiographique/non-radiographique. AINS en pivot, kiné systématique.",
    keyPoints: ["AINS en première intention","Anti-TNF ou anti-IL-17 si AINS insuffisants","Pas de corticoïdes systémiques au long cours","Kinésithérapie systématique","IRM pour suivi de l'activité"],
    quiz: [
      {type:"tf",q:"Les corticoïdes systémiques au long cours sont recommandés dans la SpA axiale.",answer:false,expl:"Non recommandés au long cours. Injections locales possibles."}
    ]
  },
  {
    id: "eular-goutte-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Goutte — recommandations EULAR 2022",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2022-09-15", updatedAt: "2023-02-01",
    url: "https://ard.bmj.com/content/82/1/35",
    summary: "Cibles uricémiques, allopurinol première intention, prophylaxie des accès à l'initiation.",
    keyPoints: ["Cible < 360 µmol/L","< 300 µmol/L si tophus","Allopurinol en première intention (titration lente)","Colchicine ou AINS pour les accès","Prophylaxie 6 mois à l'initiation"],
    quiz: [
      {type:"mcq",q:"Cible d'uricémie EULAR en présence de tophus ?",options:["< 420 µmol/L","< 360 µmol/L","< 300 µmol/L","< 240 µmol/L"],answer:2,expl:"En présence de tophus la cible est < 300 µmol/L."},
      {type:"tf",q:"L'allopurinol doit être démarré pendant un accès aigu.",answer:false,expl:"Initié à distance de l'accès, avec prophylaxie par colchicine."}
    ]
  },
  {
    id: "eular-vasculites-anca-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Vascularites associées aux ANCA — recommandations EULAR 2022",
    pathology: "Vascularites", category: "Traitement",
    publicationDate: "2022-08-01", updatedAt: "2023-01-15",
    url: "https://ard.bmj.com/content/82/1/51",
    summary: "GPA et PAM. Rituximab, avacopan, décroissance des corticoïdes.",
    keyPoints: ["Rituximab ou cyclophosphamide en induction","Rituximab préféré pour rechutes et formes sévères","Avacopan comme épargne cortisonique","Rituximab en entretien toutes les 6 mois","Surveillance rénale et ORL"],
    quiz: [
      {type:"mcq",q:"Traitement préféré dans les vascularites ANCA sévères ?",options:["Azathioprine","Cyclophosphamide IV","Rituximab","Mycophénolate"],answer:2,expl:"Rituximab préféré pour les formes sévères et les rechutes."}
    ]
  },
  {
    id: "sfr-lupus-2022",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Lupus érythémateux systémique — recommandations SFR 2022",
    pathology: "Lupus", category: "Traitement",
    publicationDate: "2022-04-01", updatedAt: "2023-04-10",
    url: "https://www.sfrhuma.fr/pages-statiques/recommandations-de-la-sfr.html",
    summary: "HCQ systématique, bélimumab et anifrolumab dans les formes résistantes, gestion grossesse.",
    keyPoints: ["HCQ systématique sauf contre-indication","Bélimumab et anifrolumab si résistance","Surveillance ophtalmologique annuelle HCQ","Gestion contraception et grossesse","Photoprotection systématique"],
    quiz: [
      {type:"tf",q:"L'HCQ est recommandée chez tous les lupiques sauf contre-indication.",answer:true,expl:"HCQ recommandée systématiquement pour ses effets protecteurs multi-organes."},
      {type:"mcq",q:"Surveillance obligatoire sous HCQ au long cours ?",options:["ECG annuel","OCT / fond d'œil annuel","Bilan hépatique trimestriel","Audiogramme annuel"],answer:1,expl:"Surveillance ophtalmologique annuelle (OCT) pour dépister la toxicité rétinienne."}
    ]
  },
  {
    id: "eular-horton-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Maladie de Horton / Artérite à cellules géantes — EULAR",
    pathology: "Maladie de Horton", category: "Traitement",
    publicationDate: "2022-06-01", updatedAt: "2023-01-10",
    url: "https://ard.bmj.com/content/77/10/1428",
    summary: "Tocilizumab, TEP-TDM, urgence ophtalmologique, décroissance des corticoïdes.",
    keyPoints: ["Prednisone 40–60 mg/j en induction","Tocilizumab SC pour réduire la dose cumulée","TEP-TDM pour atteinte vasculaire étendue","Bilan ophtalmologique urgent si signes visuels","Biopsie temporale avant traitement si possible"],
    quiz: [
      {type:"tf",q:"En cas de menace visuelle, attendre la biopsie avant les corticoïdes.",answer:false,expl:"Corticoïdes immédiats. Biopsie valide jusqu'à 2 semaines après."}
    ]
  },

  // ── 2021 et avant ─────────────────────────────────────────────────────────
  {
    id: "acr-ra-2021",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Polyarthrite rhumatoïde — ACR Guidelines 2021",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2021-06-01", updatedAt: "2022-03-10",
    url: "https://rheumatology.org/2021-ra-guideline",
    summary: "Algorithmes détaillés, prudence JAKi en contexte CV, vaccination avant immunosuppresseur.",
    keyPoints: ["Treat-to-target systématique","MTX + HCQ en combinaison précoce possible","Prudence JAKi si risque CV élevé ou > 65 ans","Vaccination complète avant immunosuppression","Suivi DAS28 ou CDAI régulier"],
    quiz: [
      {type:"tf",q:"L'ACR recommande la mise à jour vaccinale avant toute biothérapie.",answer:true,expl:"Vaccination complète recommandée avant tout immunosuppresseur."}
    ]
  },
  {
    id: "eular-behcet-2018",
    society: "EULAR", societyColor: "#d4a017",
    title: "Maladie de Behçet — recommandations EULAR",
    pathology: "Maladie de Behçet", category: "Traitement",
    publicationDate: "2018-07-01", updatedAt: "2022-05-10",
    url: "https://ard.bmj.com/content/77/6/808",
    summary: "Atteintes cutanéomuqueuses, oculaires, articulaires et vasculaires.",
    keyPoints: ["Colchicine pour aphtoses et arthrites","Azathioprine ou ciclosporine pour atteintes oculaires","Anti-TNF pour formes réfractaires sévères","Anticoagulation pour thromboses veineuses","IFN-alpha pour formes oculaires résistantes"],
    quiz: [
      {type:"mcq",q:"Traitement recommandé pour les aphtes récidivants dans Behçet ?",options:["Corticoïdes systémiques","Colchicine","Azathioprine","Anti-TNF"],answer:1,expl:"La colchicine est recommandée en première intention pour les aphtoses et arthrites."}
    ]
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const { pathology, category, society } = req.query;
  let data = [...RECOMMENDATIONS];
  if (pathology && pathology !== 'Toutes') data = data.filter(r => r.pathology === pathology);
  if (category && category !== 'Toutes') data = data.filter(r => r.category === category);
  if (society && society !== 'Toutes') data = data.filter(r => r.society === society);
  data.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
  res.status(200).json({ count: data.length, lastUpdated: new Date().toISOString(), data });
}
