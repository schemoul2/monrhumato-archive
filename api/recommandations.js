// api/recommandations.js — MonRhumato.fr
// Version 4 — URLs vérifiées, sources primaires, liens directs
// Note: ARD a migré de BMJ vers Elsevier (ard.eular.org) pour les volumes 84+ (2025)
// DOI 10.1136 → ard.bmj.com (vol ≤83) | DOI 10.1016 → ard.eular.org (vol 84+)

const RECOMMENDATIONS = [

  // ════════════════════════════════════════════════════════════════
  // 2025
  // ════════════════════════════════════════════════════════════════

  {
    id: "eular-ra-2025",
    society: "EULAR", societyColor: "#d4a017",
    title: "Polyarthrite rhumatoïde — recommandations EULAR 2025",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2025-01-01", updatedAt: "2025-01-01",
    url: "https://ard.eular.org/article/S0003-4967(25)00086-3/abstract",
    summary: "Mise à jour 2025 des recommandations EULAR pour la PR incluant la place des JAKi après les données de sécurité ORAL Surveillance, et les nouvelles stratégies de décroissance.",
    keyPoints: ["Restriction des JAKi chez > 65 ans, fumeurs, risque CV/néoplasique élevé","MTX reste le pivot thérapeutique","Treat-to-target maintenu (rémission ou faible activité)","Décroissance progressive recommandée en rémission prolongée","Évaluation CV systématique avant JAKi"],
    quiz: [
      {type:"tf",q:"Le méthotrexate reste le traitement pivot de la PR selon EULAR 2025.",answer:true,expl:"EULAR 2025 maintient le MTX comme traitement central en l'absence de contre-indication."},
      {type:"mcq",q:"Dans quel profil les JAK inhibiteurs doivent-ils être évités ?",options:["Patients < 40 ans","Patients > 65 ans avec facteurs de risque CV ou néoplasique","Patients avec ACPA positifs","Patients sous MTX"],answer:1,expl:"EULAR 2025 recommande d'éviter les JAKi chez les patients > 65 ans, fumeurs ou avec antécédents CV/néoplasiques significatifs."}
    ]
  },
  {
    id: "eular-grossesse-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Médicaments antirhumatismaux en reproduction, grossesse et lactation — EULAR 2024",
    pathology: "Transversal", category: "Situations particulières",
    publicationDate: "2024-11-01", updatedAt: "2024-11-01",
    url: "https://ard.eular.org/article/S0003-4967(25)00028-0/abstract",
    summary: "Mise à jour complète 2024 (passage de points to consider à recommandations). Sécurité des DMARDs, biothérapies et JAKi en période périconceptionnelle, grossesse et allaitement.",
    keyPoints: ["HCQ : compatible grossesse et allaitement","Certolizumab : pas de transfert placentaire actif — peut être maintenu","Rituximab contre-indiqué — arrêt ≥ 6 mois avant conception","JAKi : arrêt avant conception — tératogènes potentiels","Aspirine 75–100 mg + HBPM dans le SAPL obstétrical"],
    quiz: [
      {type:"tf",q:"Le certolizumab peut être maintenu pendant toute la grossesse si nécessaire.",answer:true,expl:"Pas de transfert placentaire actif significatif grâce à l'absence de fragment Fc."},
      {type:"mcq",q:"Quel DMARD biologique nécessite un arrêt ≥ 6 mois avant la conception ?",options:["Adalimumab","Abatacept","Rituximab","Certolizumab"],answer:2,expl:"Le rituximab dépléte les lymphocytes B sur plusieurs mois — arrêt ≥ 6 mois avant conception recommandé."}
    ]
  },
  {
    id: "eular-jak-securite-2025",
    society: "EULAR", societyColor: "#d4a017",
    title: "Consensus sur les JAK inhibiteurs dans les maladies inflammatoires — 2024",
    pathology: "Transversal", category: "Sécurité",
    publicationDate: "2025-02-01", updatedAt: "2025-02-01",
    url: "https://ard.eular.org/article/S0003-4967(25)00041-3/abstract",
    summary: "Consensus d'experts 2024 sur la sécurité des JAKi dans les maladies inflammatoires chroniques (PR, SpA, PsA, lupus). Stratification du risque CV, néoplasique, infectieux et thromboembolique.",
    keyPoints: ["Éviter JAKi si > 65 ans, fumeurs, ATCD CV, ATCD néoplasique","Préférer abatacept ou rituximab dans ces profils","Bilan lipidique, surveillance NFS, créatinine avant et sous JAKi","Dépistage cancer cutané annuel","Réévaluation bénéfice/risque annuelle"],
    quiz: [
      {type:"mcq",q:"Quel essai a conduit à la réévaluation de la sécurité des JAKi ?",options:["MONARCH","ORAL Surveillance","EMPIRE","BREVACTA"],answer:1,expl:"L'essai ORAL Surveillance a mis en évidence un surrisque CV et néoplasique sous tofacitinib vs anti-TNF."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 2024
  // ════════════════════════════════════════════════════════════════

  {
    id: "sfr-ppr-2024",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Pseudopolyarthrite rhizomélique — premières recommandations SFR",
    pathology: "Polymyalgia rheumatica", category: "Traitement",
    publicationDate: "2024-06-06", updatedAt: "2024-06-06",
    url: "https://www.sciencedirect.com/science/article/pii/S1169833024001443",
    summary: "Premières recommandations SFR pour la PPR : 5 principes généraux et 19 recommandations couvrant diagnostic, évaluation (DAS-PPR), corticothérapie adaptée au poids, et épargne cortisonique.",
    keyPoints: ["Diagnostic : douleurs inflammatoires ceintures + CRP élevée + > 50 ans","Pas d'imagerie systématique si présentation typique","DAS-PPR à chaque visite","Prednisone 0,2–0,3 mg/kg/j en induction","Durée 12 mois — décroissance 1 mg/mois après 10 mg","Tocilizumab ou sarilumab si cortico-dépendance (niveau A)"],
    quiz: [
      {type:"mcq",q:"Dose initiale SFR pour la PPR ?",options:["0,5 mg/kg/j","0,2–0,3 mg/kg/j","40–60 mg/j fixe","1 mg/kg/j"],answer:1,expl:"La SFR recommande 0,2–0,3 mg/kg/j de prednisone, selon les comorbidités."},
      {type:"tf",q:"Le DAS-PPR doit être calculé à chaque visite.",answer:true,expl:"Recommandation 8 de la SFR — outil validé à utiliser systématiquement."},
      {type:"mcq",q:"En cas de cortico-dépendance dans la PPR, quel traitement est recommandé en 1re intention ?",options:["Méthotrexate","Tocilizumab ou sarilumab (anti-IL-6R)","Rituximab","Abatacept"],answer:1,expl:"Anti-IL-6R en 1re intention (niveau A), MTX en alternative (niveau C)."}
    ]
  },
  {
    id: "eular-psa-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Rhumatisme psoriasique — recommandations EULAR 2023",
    pathology: "Rhumatisme psoriasique", category: "Traitement",
    publicationDate: "2024-03-15", updatedAt: "2024-03-15",
    url: "https://ard.bmj.com/content/83/6/706",
    summary: "Mise à jour 2023 des recommandations EULAR pour le PsA. Place des anti-IL-23, JAKi et approche selon les manifestations dominantes.",
    keyPoints: ["AINS et injection locale en premier","csDMARDs (MTX, SSZ) pour atteinte articulaire","Anti-IL-17 ou anti-TNF si échec csDMARDs","Anti-IL-23 (guselkumab, risankizumab) : efficacité articulaire et cutanée","JAKi après discussion du risque CV/néoplasique"],
    quiz: [
      {type:"mcq",q:"Quelle classe est privilégiée si atteinte cutanée prédominante dans le PsA ?",options:["Anti-TNF","Anti-IL-17 ou anti-IL-23","Méthotrexate","JAKi"],answer:1,expl:"Anti-IL-17 et anti-IL-23 sont privilégiés en cas d'atteinte cutanée importante."}
    ]
  },
  {
    id: "eular-sjogren-2024",
    society: "EULAR", societyColor: "#d4a017",
    title: "Syndrome de Sjögren — recommandations EULAR 2024",
    pathology: "Sjögren", category: "Traitement",
    publicationDate: "2024-07-01", updatedAt: "2024-07-01",
    url: "https://ard.eular.org/article/S0003-4967(24)01534-6/abstract",
    summary: "Premières recommandations EULAR de traitement pour le syndrome de Sjögren primitif : gestion de la sécheresse, manifestations systémiques et dépistage lymphome.",
    keyPoints: ["Larmes artificielles et lubrifiants oculaires en continu","Pilocarpine ou céviméline pour la sécheresse sévère","HCQ pour manifestations systémiques légères","Rituximab pour formes systémiques sévères","Dépistage lymphome tous les 1 à 2 ans (ESSDAI)"],
    quiz: [
      {type:"tf",q:"Le rituximab est recommandé dans les formes systémiques sévères du Sjögren.",answer:true,expl:"EULAR 2024 recommande le rituximab pour les manifestations systémiques sévères réfractaires."}
    ]
  },
  {
    id: "eular-cvd-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Risque cardiovasculaire dans les rhumatismes inflammatoires — EULAR 2022",
    pathology: "Transversal", category: "Comorbidités",
    publicationDate: "2022-03-01", updatedAt: "2022-03-01",
    url: "https://ard.bmj.com/content/81/6/768",
    summary: "Recommandations EULAR 2022 sur la gestion du risque CV dans la PR, SpA, lupus et SAPL. Utilisation du SCORE2 avec multiplicateur × 1,5.",
    keyPoints: ["Évaluation CV tous les 5 ans (SCORE2)","Multiplicateur × 1,5 pour PR, lupus, SAPL","Statines si risque CV modéré à élevé","Contrôle de l'activité inflammatoire = priorité CV","Éviction tabac, activité physique adaptée"],
    quiz: [
      {type:"mcq",q:"Quel coefficient multiplicateur s'applique au SCORE2 dans la PR ?",options:["× 1,0","× 1,5","× 2,0","× 3,0"],answer:1,expl:"EULAR recommande × 1,5 pour la PR et le lupus appliqué au score SCORE2."}
    ]
  },
  {
    id: "sfr-pr-2024",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Polyarthrite rhumatoïde — actualisation 2024 des recommandations SFR",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2024-09-01", updatedAt: "2024-09-01",
    url: "https://www.sciencedirect.com/science/article/pii/S1169833024002291",
    summary: "Actualisation 2024 des recommandations SFR pour le diagnostic et la prise en charge de la PR, incluant les données de sécurité des JAKi et les nouvelles biothérapies.",
    keyPoints: ["MTX en première intention si pas de contre-indication","Objectif : rémission (DAS28 < 2,6) ou faible activité","Choix biothérapie adapté au profil de risque","Restriction JAKi en cas de risque CV/néoplasique élevé","Décroissance progressive en rémission prolongée"],
    quiz: [
      {type:"tf",q:"La SFR recommande le MTX en première intention dans la PR sauf contre-indication.",answer:true,expl:"Consensus SFR 2024 — le MTX reste le traitement de fond central."}
    ]
  },
  {
    id: "has-fibromyalgie-2025",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Fibromyalgie de l'adulte — recommandations HAS 2025",
    pathology: "Fibromyalgie", category: "Bonne pratique",
    publicationDate: "2025-01-01", updatedAt: "2025-01-01",
    url: "https://www.has-sante.fr/jcms/p_3634512/fr/fibromyalgie-de-l-adulte-conduite-diagnostique-et-strategie-therapeutique",
    summary: "Recommandations HAS 2025 pour la fibromyalgie : diagnostic sur critères ACR 2010/2016, prise en charge multimodale, pas d'opioïdes forts.",
    keyPoints: ["Diagnostic sur critères ACR 2010/2016 (WPI + SS)","Exercice physique adapté — pilier central","TCC + éducation thérapeutique","Duloxétine ou prégabaline en adjuvant si douleur sévère","Pas d'opioïdes forts recommandés"],
    quiz: [
      {type:"tf",q:"Les opioïdes forts sont recommandés dans la fibromyalgie sévère.",answer:false,expl:"La HAS déconseille les opioïdes forts dans la fibromyalgie. La prise en charge multimodale est centrale."},
      {type:"mcq",q:"Pierre angulaire du traitement de la fibromyalgie ?",options:["Prégabaline","Exercice physique + TCC","Duloxétine","Infiltrations"],answer:1,expl:"La prise en charge multimodale (exercice + TCC) est le pilier thérapeutique."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // 2023
  // ════════════════════════════════════════════════════════════════

  {
    id: "eular-ra-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Polyarthrite rhumatoïde — recommandations EULAR 2022",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2022-11-01", updatedAt: "2022-11-01",
    url: "https://ard.bmj.com/content/82/1/3",
    summary: "Recommandations EULAR 2022 pour la PR. Treat-to-target, MTX pivot, place des JAKi après évaluation du risque CV.",
    keyPoints: ["Cible : rémission ou faible activité (DAS28 < 3,2)","MTX en première intention","bDMARDs ou JAKi si échec csDMARDs","Évaluation risque CV avant JAKi","Décroissance progressive en rémission"],
    quiz: [
      {type:"tf",q:"Le MTX reste le traitement de référence en 1re intention dans la PR.",answer:true,expl:"EULAR 2022 maintient le MTX comme pierre angulaire, sauf contre-indication."},
      {type:"mcq",q:"Cible thérapeutique dans la PR ?",options:["Faible activité seule","Rémission ou faible activité","DAS28 < 2,6 obligatoire","Amélioration > 50%"],answer:1,expl:"Rémission ou faible activité (DAS28 < 3,2) si rémission non atteignable."}
    ]
  },
  {
    id: "eular-lupus-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Lupus érythémateux systémique — recommandations EULAR 2023",
    pathology: "Lupus", category: "Traitement",
    publicationDate: "2023-10-01", updatedAt: "2023-10-01",
    url: "https://ard.bmj.com/content/83/1/15",
    summary: "Mise à jour 2023 des recommandations EULAR pour le LES. HCQ systématique, nouvelles biothérapies (anifrolumab), gestion rénale et cardiovasculaire.",
    keyPoints: ["HCQ systématique sauf contre-indication (max 5 mg/kg/j)","Surveillance ophtalmologique annuelle HCQ (OCT)","Bélimumab ou anifrolumab si résistance","Rituximab pour atteintes sévères réfractaires","Prévention CV : statines, antiagrégants selon risque SAPL"],
    quiz: [
      {type:"tf",q:"L'HCQ est recommandée chez tous les lupiques sauf contre-indication.",answer:true,expl:"HCQ recommandée systématiquement pour ses effets protecteurs multi-organes."},
      {type:"mcq",q:"Surveillance obligatoire sous HCQ au long cours ?",options:["ECG annuel","OCT / fond d'œil annuel","Bilan hépatique trimestriel","Audiogramme annuel"],answer:1,expl:"Surveillance ophtalmologique annuelle (OCT) pour dépister la toxicité rétinienne."}
    ]
  },
  {
    id: "eular-spa-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Spondyloarthrites axiales — recommandations ASAS/EULAR 2022",
    pathology: "Spondyloarthrite", category: "Traitement",
    publicationDate: "2022-10-01", updatedAt: "2022-10-01",
    url: "https://ard.bmj.com/content/82/1/19",
    summary: "Mise à jour ASAS/EULAR 2022. AINS en pivot, anti-TNF ou anti-IL-17 si échec, kinésithérapie systématique.",
    keyPoints: ["AINS en première intention","Anti-TNF ou anti-IL-17 si AINS insuffisants","Pas de corticoïdes systémiques au long cours","Kinésithérapie systématique","IRM pour suivi de l'activité inflammatoire"],
    quiz: [
      {type:"tf",q:"Les corticoïdes systémiques au long cours sont recommandés dans la SpA axiale.",answer:false,expl:"Non recommandés au long cours. Injections locales possibles."}
    ]
  },
  {
    id: "eular-vasculites-anca-2022",
    society: "EULAR", societyColor: "#d4a017",
    title: "Vascularites ANCA (GPA, PAM) — recommandations EULAR 2022",
    pathology: "Vascularites", category: "Traitement",
    publicationDate: "2023-03-01", updatedAt: "2023-03-01",
    url: "https://ard.bmj.com/content/83/1/30",
    summary: "Mise à jour 2022 des recommandations EULAR pour les vascularites ANCA. Rituximab, avacopan, décroissance des corticoïdes.",
    keyPoints: ["Rituximab ou cyclophosphamide en induction","Rituximab préféré pour rechutes et formes sévères","Avacopan comme épargne cortisonique","Rituximab en entretien toutes les 6 mois","Surveillance rénale et ORL systématique"],
    quiz: [
      {type:"mcq",q:"Traitement préféré dans les vascularites ANCA sévères et rechutes ?",options:["Azathioprine","Cyclophosphamide IV","Rituximab","Mycophénolate"],answer:2,expl:"Rituximab préféré pour les formes sévères et les rechutes selon EULAR."}
    ]
  },
  {
    id: "eular-ssc-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Sclérodermie systémique — recommandations EULAR 2023",
    pathology: "Sclérodermie", category: "Traitement",
    publicationDate: "2024-10-01", updatedAt: "2024-10-01",
    url: "https://ard.eular.org/article/S0003-4967(24)01523-1/abstract",
    summary: "Mise à jour 2023 des recommandations EULAR pour la ScS. Nintédanib et tocilizumab pour la PID, dépistage HTAP annuel.",
    keyPoints: ["Nintédanib pour la PID (ralentissement du déclin de CVF)","Tocilizumab pour ralentir la progression de la PID","Cyclophosphamide ou mycophénolate pour PID sévère","Dépistage HTAP annuel par échocardiographie","Inhibiteurs récepteurs endothéline pour HTAP"],
    quiz: [
      {type:"tf",q:"Le tocilizumab a une indication validée pour ralentir la PID dans la sclérodermie.",answer:true,expl:"Indication obtenue dans la ScS-ILD pour ralentir le déclin de la CVF."}
    ]
  },
  {
    id: "eular-sapl-2019",
    society: "EULAR", societyColor: "#d4a017",
    title: "Syndrome des antiphospholipides — recommandations EULAR 2019",
    pathology: "SAPL", category: "Traitement",
    publicationDate: "2019-07-01", updatedAt: "2019-07-01",
    url: "https://ard.bmj.com/content/78/10/1296",
    summary: "Recommandations EULAR pour le SAPL thrombotique et obstétrical. AVK, aspirine, place des AOD.",
    keyPoints: ["AVK (INR 2–3) pour SAPL thrombotique veineux","AVK (INR 3–4) pour SAPL artériel","Aspirine 75–100 mg + HBPM pour SAPL obstétrical","AOD déconseillés si triple positivité","HCQ en adjuvant dans le SAPL lupique"],
    quiz: [
      {type:"tf",q:"Les AOD sont recommandés en première intention dans le SAPL.",answer:false,expl:"Les AOD sont déconseillés dans le SAPL à haut risque (triple positivité). Les AVK restent la référence."}
    ]
  },
  {
    id: "eular-horton-2018",
    society: "EULAR", societyColor: "#d4a017",
    title: "Maladie de Horton (artérite à cellules géantes) — EULAR 2018",
    pathology: "Maladie de Horton", category: "Traitement",
    publicationDate: "2020-01-01", updatedAt: "2020-01-01",
    url: "https://ard.bmj.com/content/79/1/19",
    summary: "Mise à jour 2018 des recommandations EULAR pour l'artérite à cellules géantes et les vascularites des gros vaisseaux. Tocilizumab, TEP-TDM, urgence ophtalmologique.",
    keyPoints: ["Prednisone 40–60 mg/j en induction","Tocilizumab SC pour réduire la dose cumulée de corticoïdes","TEP-TDM pour atteinte vasculaire étendue","Bilan ophtalmologique urgent si signes visuels","Biopsie temporale avant traitement (≤ 2 semaines)"],
    quiz: [
      {type:"tf",q:"En cas de menace visuelle, attendre la biopsie avant de démarrer les corticoïdes.",answer:false,expl:"Corticoïdes immédiats en urgence. La biopsie reste interprétable jusqu'à 2 semaines après."}
    ]
  },
  {
    id: "eular-vaccination-2019",
    society: "EULAR", societyColor: "#d4a017",
    title: "Vaccination des patients adultes sous traitements immunomodulateurs — EULAR 2019",
    pathology: "Transversal", category: "Prévention",
    publicationDate: "2019-11-01", updatedAt: "2022-09-01",
    url: "https://ard.bmj.com/content/79/1/39",
    summary: "Recommandations EULAR 2019 (mise à jour COVID 2022) sur la vaccination. Calendrier pré-biothérapie, Shingrix pour le zona, grippe et pneumocoque annuels.",
    keyPoints: ["Mise à jour vaccinale avant toute biothérapie","Shingrix (zona inactivé) recommandé > 50 ans sous immunosuppresseurs","Grippe annuelle systématique","Pneumocoque (PCV13/PCV20) tous les 5 ans","Vaccins vivants contre-indiqués sous biothérapies"],
    quiz: [
      {type:"tf",q:"Les vaccins vivants atténués sont contre-indiqués sous biothérapies.",answer:true,expl:"Vaccins vivants (ROR, varicelle, fièvre jaune, Zostavax) contre-indiqués sous biothérapies."},
      {type:"mcq",q:"Quel vaccin zona est recommandé sous immunosuppresseurs ?",options:["Zostavax (vivant)","Shingrix (inactivé adjuvanté)","Les deux","Aucun"],answer:1,expl:"Shingrix (recombinant inactivé) est le seul recommandé — Zostavax (vivant) est contre-indiqué."}
    ]
  },
  {
    id: "eular-cppd-2011",
    society: "EULAR", societyColor: "#d4a017",
    title: "Dépôts de pyrophosphate de calcium (CPPD) — recommandations EULAR",
    pathology: "CPPD / Chondrocalcinose", category: "Traitement",
    publicationDate: "2011-03-01", updatedAt: "2023-06-01",
    url: "https://ard.bmj.com/content/70/4/563",
    summary: "Recommandations EULAR pour la maladie à dépôts de CPPD. Accès aigus, formes chroniques, bilan secondaire. Seules recommandations de prise en charge disponibles (critères de classification 2023 disponibles séparément).",
    keyPoints: ["Colchicine ou AINS pour les accès aigus","Bilan métabolique systématique (magnésium, PTH, ferritine, TSH)","Pas de traitement dissolvant les cristaux disponible","Infiltrations locales en accès monoarticulaire","Colchicine au long cours pour formes récidivantes"],
    quiz: [
      {type:"tf",q:"Il existe un traitement hypocalcifiant validé pour dissoudre les dépôts de CPPD.",answer:false,expl:"Contrairement à la goutte, aucun traitement ne dissout les dépôts de CPPD à ce jour."}
    ]
  },
  {
    id: "eular-arthrose-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Arthrose hanche et genou — prise en charge non pharmacologique EULAR 2023",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2024-01-15", updatedAt: "2024-01-15",
    url: "https://ard.bmj.com/content/83/6/706",
    summary: "Recommandations EULAR 2023 sur la prise en charge non pharmacologique de l'arthrose de hanche et genou. Exercice et perte de poids comme piliers centraux.",
    keyPoints: ["Exercice physique adapté — recommandation centrale pour tous","Perte de poids si surpoids/obésité","Éducation thérapeutique systématique","Attelles et orthèses si indiquées","Approche multimodale avec kinésithérapeute"],
    quiz: [
      {type:"tf",q:"L'exercice physique est contre-indiqué dans l'arthrose douloureuse active.",answer:false,expl:"Au contraire — l'exercice adapté est le traitement central de l'arthrose selon EULAR 2023."}
    ]
  },
  {
    id: "eular-behcet-2018",
    society: "EULAR", societyColor: "#d4a017",
    title: "Maladie de Behçet — recommandations EULAR 2018",
    pathology: "Maladie de Behçet", category: "Traitement",
    publicationDate: "2018-03-01", updatedAt: "2018-03-01",
    url: "https://ard.bmj.com/content/77/6/808",
    summary: "Mise à jour 2018 des recommandations EULAR pour la maladie de Behçet. Atteintes cutanéomuqueuses, oculaires, articulaires et vasculaires. Une mise à jour 2025 est disponible sur ard.eular.org.",
    keyPoints: ["Colchicine pour aphtoses et arthrites","Azathioprine ou ciclosporine pour atteintes oculaires","Anti-TNF pour formes réfractaires sévères","Anticoagulation pour thromboses veineuses","IFN-alpha pour formes oculaires résistantes"],
    quiz: [
      {type:"mcq",q:"Traitement recommandé en 1re intention pour les aphtes récidivants dans Behçet ?",options:["Corticoïdes systémiques","Colchicine","Azathioprine","Anti-TNF"],answer:1,expl:"La colchicine est recommandée en première intention pour les aphtoses et arthrites."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // SFR — Societe Française de Rhumatologie
  // ════════════════════════════════════════════════════════════════

  {
    id: "sfr-spa-psa-2022",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Spondyloarthrite et rhumatisme psoriasique — recommandations SFR 2022",
    pathology: "Spondyloarthrite", category: "Traitement",
    publicationDate: "2022-03-01", updatedAt: "2022-03-01",
    url: "https://www.sciencedirect.com/science/article/pii/S1169833022000023",
    summary: "Actualisation 2022 des recommandations SFR pour la prise en charge des malades atteints de spondyloarthrite, incluant le rhumatisme psoriasique.",
    keyPoints: ["AINS en première intention","Anti-TNF ou anti-IL-17 si AINS insuffisants (SpA axiale)","MTX pour l'atteinte périphérique et cutanée (PsA)","Anti-IL-23 disponibles pour le PsA","Kinésithérapie et activité physique systématiques"],
    quiz: [
      {type:"tf",q:"Le MTX est efficace sur l'atteinte axiale de la spondyloarthrite.",answer:false,expl:"Le MTX n'est pas efficace sur l'atteinte axiale. Il est utilisé pour l'atteinte périphérique et cutanée du rhumatisme psoriasique."}
    ]
  },
  {
    id: "sfr-goutte-crises-2020",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Traitement des crises de goutte — recommandations SFR 2020",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2020-11-01", updatedAt: "2020-11-01",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1169833020301502",
    summary: "Recommandations SFR 2020 pour le traitement des crises de goutte aiguës et la prophylaxie.",
    keyPoints: ["Colchicine en 1re intention (1 mg puis 0,5 mg 1h après)","AINS en alternative si colchicine non tolérée","Corticoïdes si colchicine et AINS contre-indiqués","Prophylaxie par colchicine 0,5–1 mg/j à l'initiation du traitement hypouricémiant","Glace locale et mise au repos de l'articulation"],
    quiz: [
      {type:"mcq",q:"Dose de colchicine recommandée par la SFR lors d'un accès de goutte ?",options:["3 mg en une prise","1 mg puis 0,5 mg 1h après","0,5 mg × 3/j d'emblée","2 mg × 2/j"],answer:1,expl:"SFR 2020 : 1 mg puis 0,5 mg une heure après (schéma faible dose), à répéter si nécessaire."}
    ]
  },
  {
    id: "sfr-goutte-hypo-2020",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Traitement hypouricémiant de la goutte — recommandations SFR 2020",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2020-11-01", updatedAt: "2020-11-01",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1169833020301514",
    summary: "Recommandations SFR 2020 pour le traitement hypouricémiant de la goutte. Indication, cibles, allopurinol, febuxostat.",
    keyPoints: ["Indication : ≥ 2 crises/an, tophus, lithiase urique, néphropathie uratée","Cible uricémie < 360 µmol/L (< 300 µmol/L si tophus)","Allopurinol en 1re intention (titration lente depuis 50–100 mg/j)","Febuxostat si intolérance ou insuffisance rénale","Prophylaxie par colchicine 0,5 mg/j pendant ≥ 6 mois à l'initiation"],
    quiz: [
      {type:"mcq",q:"Cible d'uricémie SFR en présence de tophus ?",options:["< 420 µmol/L","< 360 µmol/L","< 300 µmol/L","< 240 µmol/L"],answer:2,expl:"En présence de tophus, la cible est < 300 µmol/L selon la SFR 2020."}
    ]
  },
  {
    id: "sfr-gonarthrose-2020",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Gonarthrose — recommandations SFR 2020",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2020-10-01", updatedAt: "2020-10-01",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1169833020301769",
    summary: "Recommandations SFR 2020 sur la prise en charge pharmacologique de la gonarthrose.",
    keyPoints: ["Paracétamol en premier si forme légère","AINS topiques préférés aux AINS systémiques","Infiltrations de corticoïdes pour les poussées inflammatoires","Acide hyaluronique : bénéfice modeste, utilisation optionnelle","Duloxétine possible dans les formes douloureuses chroniques"],
    quiz: [
      {type:"tf",q:"L'acide hyaluronique est recommandé en 1re intention dans la gonarthrose par la SFR.",answer:false,expl:"La SFR classe l'AH comme option à bénéfice modeste, utilisé après échec des traitements de première ligne."}
    ]
  },
  {
    id: "sfr-grio-osteoporose-2018",
    society: "SFR", societyColor: "#2dc4b5",
    title: "Ostéoporose post-ménopausique — recommandations SFR/GRIO 2018",
    pathology: "Ostéoporose", category: "Traitement",
    publicationDate: "2018-04-01", updatedAt: "2023-06-01",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1169833018300504",
    summary: "Recommandations SFR/GRIO pour l'ostéoporose post-ménopausique. Évaluation FRAX, bisphosphonates, séquences thérapeutiques.",
    keyPoints: ["Évaluation du risque fracturaire par FRAX + DMO","Bisphosphonates (alendronate, risédronate) en 1re intention","Dénosumab si intolérance bisphosphonates ou DFG < 35","Romosozumab ou tériparatide pour formes sévères","Relais bisphosphonate obligatoire à l'arrêt du dénosumab"],
    quiz: [
      {type:"mcq",q:"Quel risque faut-il prévenir à l'arrêt du dénosumab ?",options:["Hypercalcémie rebond","Fractures vertébrales multiples par effet rebond","Ostéonécrose de mâchoire","Insuffisance rénale"],answer:1,expl:"Arrêt brutal du dénosumab → rebond osseux → fractures vertébrales multiples. Relais bisphosphonate impératif."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // HAS — Haute Autorité de Santé
  // ════════════════════════════════════════════════════════════════

  {
    id: "has-lombalgie-2019",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Lombalgie commune — prise en charge HAS 2019",
    pathology: "Lombalgie", category: "Bonne pratique",
    publicationDate: "2019-04-01", updatedAt: "2019-04-01",
    url: "https://www.has-sante.fr/jcms/c_2961499/fr/prise-en-charge-du-patient-presentant-une-lombalgie-commune",
    summary: "Recommandations HAS pour la lombalgie commune. Maintien de l'activité, antalgiques, imagerie non systématique, approche biopsychosociale.",
    keyPoints: ["Maintien de l'activité physique — essentiel","Éviter le repos au lit","Antalgiques par palier selon intensité","Imagerie non systématique < 4 semaines sans signe d'alarme","École du dos + approche biopsychosociale pour les formes chroniques"],
    quiz: [
      {type:"tf",q:"Le repos au lit est recommandé dans la lombalgie aiguë.",answer:false,expl:"Le repos au lit est déconseillé. Le maintien de l'activité physique est le pilier du traitement."},
      {type:"mcq",q:"L'imagerie est-elle systématique dans la lombalgie aiguë sans signe d'alarme ?",options:["Oui dès J1","Oui après 4 semaines","Non, non systématique < 4 semaines","Oui, la radiographie uniquement"],answer:2,expl:"L'imagerie n'est pas systématique dans la lombalgie aiguë sans signe d'alarme (< 4 semaines)."}
    ]
  },
  {
    id: "has-coiffe-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Épaule douloureuse non traumatique et tendinopathies de la coiffe — HAS 2023",
    pathology: "Épaule / Coiffe des rotateurs", category: "Bonne pratique",
    publicationDate: "2023-09-01", updatedAt: "2023-09-01",
    url: "https://www.has-sante.fr/jcms/p_3458063/fr/recommandation-conduite-diagnostique-devant-une-epaule-douloureuse-non-traumatique-de-l-adulte-et-prise-en-charge-des-tendinopathies-de-la-coiffe-des-rotateurs",
    summary: "Recommandations HAS 2023 pour l'épaule douloureuse. Diagnostic clinique, échographie en 1re intention, kinésithérapie, place de la chirurgie.",
    keyPoints: ["Échographie en 1re intention (pas IRM d'emblée)","Kinésithérapie analytique — traitement de première ligne","Infiltration sous-acromiale guidée si douleurs sévères","Chirurgie après 6 mois d'échec conservateur","Rupture transfixiante : indication opératoire à discuter rapidement"],
    quiz: [
      {type:"mcq",q:"Quel examen est recommandé en 1re intention pour la coiffe des rotateurs ?",options:["IRM","Arthro-IRM","Échographie","Scanner"],answer:2,expl:"L'échographie est l'examen de 1re intention, moins coûteuse et très fiable pour les ruptures."}
    ]
  },
  {
    id: "has-canal-carpien-2013",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Syndrome du canal carpien — guide HAS",
    pathology: "Canal carpien", category: "Diagnostic",
    publicationDate: "2013-06-01", updatedAt: "2013-06-01",
    url: "https://www.has-sante.fr/jcms/c_1365548/fr/syndrome-du-canal-carpien-optimiser-la-pertinence-du-parcours-patient",
    summary: "Guide HAS pour le syndrome du canal carpien. Diagnostic clinique + EMG, orthèse nocturne, infiltration, chirurgie selon sévérité.",
    keyPoints: ["Diagnostic clinique (Tinel, Phalen) + EMG de confirmation","Orthèse nocturne en 1re intention formes légères","Infiltration de corticoïdes : soulagement transitoire","Chirurgie (libération du nerf médian) si EMG sévère ou échec","Délai opératoire à réduire si déficit sensitif ou moteur"],
    quiz: [
      {type:"mcq",q:"Traitement de 1re intention dans le SCC léger à modéré ?",options:["Chirurgie","Infiltration","Orthèse nocturne","AINS oraux"],answer:2,expl:"L'orthèse nocturne est recommandée en première intention dans les formes légères à modérées."}
    ]
  },
  {
    id: "has-osteoporose-2023",
    society: "HAS", societyColor: "#2dc4b5",
    title: "Médicaments de l'ostéoporose — fiche de bon usage HAS 2023",
    pathology: "Ostéoporose", category: "Bon usage",
    publicationDate: "2023-01-01", updatedAt: "2023-01-01",
    url: "https://www.has-sante.fr/jcms/c_2968249/fr/fiche-bum-les-medicaments-de-l-osteoporose-mise-a-jour-janvier-2023",
    summary: "Fiche HAS 2023 sur le bon usage des médicaments de l'ostéoporose. Indications, séquences thérapeutiques, surveillance.",
    keyPoints: ["Évaluation du risque fracturaire : FRAX + DMO","Bisphosphonates oraux en 1re ligne","Dénosumab si intolérance/contre-indication aux bisphosphonates","Romosozumab pour les formes sévères (T-score < -3)","Relais bisphosphonate obligatoire à l'arrêt du dénosumab"],
    quiz: [
      {type:"tf",q:"Le FRAX est l'outil recommandé par la HAS pour le risque fracturaire.",answer:true,expl:"Le FRAX est l'outil validé pour estimer le risque de fracture à 10 ans."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // ACR — American College of Rheumatology
  // ════════════════════════════════════════════════════════════════

  {
    id: "acr-ra-2021",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Polyarthrite rhumatoïde — ACR Guidelines 2021",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2021-06-01", updatedAt: "2021-06-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24596",
    summary: "Recommandations ACR 2021 pour la PR. Algorithmes détaillés, prudence JAKi en contexte CV.",
    keyPoints: ["Treat-to-target systématique","MTX en 1re intention","Prudence JAKi si risque CV élevé ou > 65 ans","Vaccination complète avant immunosuppression","Suivi DAS28 ou CDAI régulier"],
    quiz: [
      {type:"tf",q:"L'ACR recommande la mise à jour vaccinale avant toute biothérapie.",answer:true,expl:"Vaccination complète recommandée avant tout immunosuppresseur."}
    ]
  },
  {
    id: "acr-psa-2018",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Rhumatisme psoriasique — ACR/NPF Guidelines 2018",
    pathology: "Rhumatisme psoriasique", category: "Traitement",
    publicationDate: "2018-12-01", updatedAt: "2018-12-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.23789",
    summary: "Recommandations ACR/NPF 2018 pour le rhumatisme psoriasique. Algorithme selon manifestations dominantes.",
    keyPoints: ["Anti-TNF en 1re biothérapie pour l'atteinte articulaire","Anti-IL-17 si atteinte cutanée prédominante","MTX pour les formes légères avec atteinte articulaire","Apremilast pour les formes légères à modérées","Évaluation enthèses, dactylites, atteinte rachidienne"],
    quiz: [
      {type:"mcq",q:"Selon l'ACR, quel traitement est privilégié si atteinte cutanée prédominante dans le PsA ?",options:["Anti-TNF","Anti-IL-17 (ixékizumab, sécukinumab)","Méthotrexate","JAKi"],answer:1,expl:"Les anti-IL-17 sont privilégiés pour leur efficacité supérieure sur le psoriasis cutané."}
    ]
  },
  {
    id: "acr-goutte-2020",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Goutte — ACR Guideline 2020",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2020-10-01", updatedAt: "2020-10-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24180",
    summary: "Recommandations ACR 2020 pour la goutte. Traitement hypouricémiant précoce, cibles uricémiques, prophylaxie des accès.",
    keyPoints: ["Initier traitement hypouricémiant dès le 2e accès (ou 1er si tophus)","Allopurinol : démarrage 50–100 mg/j puis titration","Cible uricémique < 6 mg/dL (< 360 µmol/L)","Prophylaxie par colchicine faible dose ≥ 6 mois","Febuxostat si intolérance à l'allopurinol"],
    quiz: [
      {type:"tf",q:"L'ACR recommande de débuter le traitement hypouricémiant dès le premier accès.",answer:false,expl:"ACR recommande après le 2e accès (ou dès le 1er si tophus, lithiases uratées ou lésions radiographiques)."}
    ]
  },
  {
    id: "acr-vasculites-2021",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Vascularites ANCA et artérite à cellules géantes — ACR/Vasculitis Foundation 2021",
    pathology: "Vascularites", category: "Traitement",
    publicationDate: "2021-08-01", updatedAt: "2021-08-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/art.41773",
    summary: "Recommandations ACR/Vasculitis Foundation 2021 pour les vascularites ANCA (GPA, PAM) et l'artérite à cellules géantes.",
    keyPoints: ["Rituximab ou cyclophosphamide en induction","Rituximab préféré pour les rechutes","Avacopan comme épargne cortisonique (GPA/PAM)","Tocilizumab pour la maladie de Horton (épargne cortisonique)","Rituximab en entretien toutes les 6 mois"],
    quiz: [
      {type:"mcq",q:"Quel traitement est recommandé pour la maladie de Horton comme épargne cortisonique ?",options:["Rituximab","Cyclophosphamide","Tocilizumab","Méthotrexate"],answer:2,expl:"Le tocilizumab SC est recommandé dans la maladie de Horton pour réduire la dose cumulée de corticoïdes."}
    ]
  },
  {
    id: "acr-arthrose-2019",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Arthrose main, hanche et genou — ACR Guideline 2019",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2019-11-01", updatedAt: "2019-11-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/art.41142",
    summary: "Recommandations ACR 2019 pour l'arthrose de la main, la hanche et le genou.",
    keyPoints: ["Exercice physique adapté — fortement recommandé pour tous","Perte de poids si surpoids (hanche/genou)","AINS topiques avant AINS systémiques (genou)","Infiltrations de corticoïdes en adjuvant","Acide hyaluronique : conditionnellement recommandé pour le genou uniquement"],
    quiz: [
      {type:"tf",q:"L'ACR recommande les infiltrations d'acide hyaluronique en routine pour l'arthrose de hanche.",answer:false,expl:"L'AH est conditionnellement recommandé uniquement pour le genou, et n'est pas recommandé pour la hanche."}
    ]
  },
  {
    id: "acr-vaccination-2022",
    society: "ACR", societyColor: "#1a5fa8",
    title: "Vaccination des patients rhumatismaux — ACR Guideline 2022",
    pathology: "Transversal", category: "Prévention",
    publicationDate: "2022-08-01", updatedAt: "2022-08-01",
    url: "https://acrjournals.onlinelibrary.wiley.com/doi/abs/10.1002/acr.25045",
    summary: "Recommandations ACR 2022 pour la vaccination des patients atteints de maladies rhumatismales inflammatoires sous traitements immunomodulateurs.",
    keyPoints: ["Grippe inactivé : annuel, tous patients","Pneumocoque PCV20 ou PCV13 + PPSV23 selon profil","Zona : Shingrix (2 doses) > 50 ans ou immunosuppression","COVID-19 : vaccination et rappels recommandés","Moment optimal : avant initiation immunosuppresseurs si possible"],
    quiz: [
      {type:"tf",q:"Le vaccin Shingrix (zona recombinant) peut être administré sous biothérapie.",answer:true,expl:"Shingrix est un vaccin inactivé — il peut être administré sous biothérapies, contrairement à Zostavax (vivant)."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // NICE — UK Guidelines
  // ════════════════════════════════════════════════════════════════

  {
    id: "nice-ra-ng100",
    society: "NICE", societyColor: "#005eb8",
    title: "Rheumatoid Arthritis in Adults — NICE NG100",
    pathology: "Polyarthrite rhumatoïde", category: "Traitement",
    publicationDate: "2018-07-01", updatedAt: "2020-10-01",
    url: "https://www.nice.org.uk/guidance/ng100",
    summary: "Guideline NICE pour la prise en charge de la polyarthrite rhumatoïde chez l'adulte. Diagnostic précoce, MTX, biothérapies selon réponse.",
    keyPoints: ["Référence rhumatologique urgente si suspicion PR","MTX en 1re intention (+ HCQ ou SSZ si activité élevée)","DAS28 pour le suivi — objectif < 3,2","Anti-TNF si 2 csDMARDs échec","Évaluation T2T à 3 mois, adaptation à 6 mois"],
    quiz: [
      {type:"mcq",q:"Selon NICE, quel est le délai de réévaluation de l'efficacité du traitement dans la PR ?",options:["1 mois","3 mois","6 mois","12 mois"],answer:1,expl:"NICE recommande une réévaluation à 3 mois et une adaptation du traitement à 6 mois si objectif non atteint."}
    ]
  },
  {
    id: "nice-arthrose-ng226",
    society: "NICE", societyColor: "#005eb8",
    title: "Osteoarthritis in over 16s — NICE NG226",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2022-10-01", updatedAt: "2022-10-01",
    url: "https://www.nice.org.uk/guidance/ng226",
    summary: "Guideline NICE 2022 sur l'arthrose. Exercice, perte de poids, AINS topiques, pas d'acide hyaluronique.",
    keyPoints: ["Exercice physique personnalisé — fortement recommandé","Perte de poids si surpoids","AINS topiques ou oraux selon profil de risque","Pas d'acide hyaluronique intra-articulaire recommandé","Paracétamol : efficacité limitée, usage prudent"],
    quiz: [
      {type:"tf",q:"NICE recommande les injections d'acide hyaluronique pour l'arthrose du genou.",answer:false,expl:"NICE 2022 ne recommande pas l'AH intra-articulaire — données insuffisantes d'efficacité clinique."}
    ]
  },
  {
    id: "nice-goutte-ng219",
    society: "NICE", societyColor: "#005eb8",
    title: "Gout — NICE NG219",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2022-06-01", updatedAt: "2022-06-01",
    url: "https://www.nice.org.uk/guidance/ng219",
    summary: "Guideline NICE 2022 pour la goutte. Traitement des crises, initiation de l'allopurinol, cibles uricémiques.",
    keyPoints: ["Colchicine ou AINS pour les crises aiguës","Allopurinol en 1re intention — titration depuis 50–100 mg/j","Cible uricémie < 360 µmol/L (6 mg/dL)","Prophylaxie systématique à l'initiation du traitement hypouricémiant","Éducation patient sur régime et facteurs déclenchants"],
    quiz: [
      {type:"mcq",q:"Quelle cible d'uricémie NICE recommande dans la goutte ?",options:["< 480 µmol/L","< 420 µmol/L","< 360 µmol/L","< 300 µmol/L"],answer:2,expl:"NICE recommande une cible < 360 µmol/L (6 mg/dL) pour la goutte."}
    ]
  },
  {
    id: "nice-lombalgie-ng59",
    society: "NICE", societyColor: "#005eb8",
    title: "Low Back Pain and Sciatica — NICE NG59",
    pathology: "Lombalgie", category: "Bonne pratique",
    publicationDate: "2016-11-01", updatedAt: "2020-09-01",
    url: "https://www.nice.org.uk/guidance/ng59",
    summary: "Guideline NICE pour la lombalgie et la sciatique. Exercice en 1re ligne, AINS, place des opioïdes et de la chirurgie.",
    keyPoints: ["Programme d'exercice supervisé en 1re ligne","AINS oraux (courte durée) si exercice insuffisant","Pas de paracétamol seul en 1re intention","Opioïdes à éviter dans la lombalgie chronique non spécifique","Chirurgie uniquement si compression nerveuse confirmée"],
    quiz: [
      {type:"tf",q:"Les opioïdes sont recommandés en 1re intention dans la lombalgie chronique selon NICE.",answer:false,expl:"NICE déconseille les opioïdes dans la lombalgie chronique non spécifique — effets indésirables supérieurs au bénéfice."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // OARSI / ESCEO / GRIO
  // ════════════════════════════════════════════════════════════════

  {
    id: "oarsi-arthrose-2019",
    society: "OARSI", societyColor: "#e53e3e",
    title: "Non-Surgical Management of Knee, Hip and Polyarticular OA — OARSI 2019",
    pathology: "Arthrose", category: "Traitement",
    publicationDate: "2019-09-01", updatedAt: "2019-09-01",
    url: "https://doi.org/10.1016/j.joca.2019.06.011",
    summary: "Recommandations OARSI 2019 pour la prise en charge non chirurgicale de l'arthrose. Hiérarchie des interventions selon profils de patients.",
    keyPoints: ["Exercice physique — recommandation forte pour tous","Perte de poids si surpoids","AINS topiques pour arthrose du genou","Biomécanique et orthèses selon atteinte","Acide hyaluronique — non recommandé en routine"],
    quiz: [
      {type:"tf",q:"L'OARSI recommande les injections d'AH en routine pour l'arthrose du genou.",answer:false,expl:"OARSI ne recommande pas l'AH en routine — bénéfice clinique modeste et controversé."}
    ]
  },
  {
    id: "esceo-iof-osteoporose-2019",
    society: "ESCEO", societyColor: "#6b46c1",
    title: "Ostéoporose post-ménopausique — algorithme ESCEO/IOF 2019",
    pathology: "Ostéoporose", category: "Traitement",
    publicationDate: "2019-01-01", updatedAt: "2019-01-01",
    url: "https://doi.org/10.1007/s00198-018-4704-5",
    summary: "Algorithme ESCEO/IOF pour l'ostéoporose post-ménopausique. Séquences thérapeutiques, agents anabolisants et antiresorptifs.",
    keyPoints: ["Bisphosphonates génériques en 1re ligne","Dénosumab si intolérance bisphosphonates ou DFG < 35","Romosozumab ou tériparatide pour formes sévères en 1re intention","Séquence anabolisant → antiresorptif recommandée","Réévaluation à 3–5 ans"],
    quiz: [
      {type:"mcq",q:"Quelle séquence ESCEO recommande pour l'ostéoporose sévère ?",options:["Antiresorptif → anabolisant","Anabolisant → antiresorptif","Anabolisant seul à vie","Antiresorptif 10 ans"],answer:1,expl:"ESCEO recommande de commencer par un anabolisant (romosozumab/tériparatide) puis de consolider par un antiresorptif."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // EULAR — Goutte 2016 (pas de mise à jour 2022)
  // ════════════════════════════════════════════════════════════════

  {
    id: "eular-goutte-2016",
    society: "EULAR", societyColor: "#d4a017",
    title: "Goutte — recommandations EULAR 2016",
    pathology: "Goutte", category: "Traitement",
    publicationDate: "2016-09-01", updatedAt: "2016-09-01",
    url: "https://ard.bmj.com/content/76/1/29",
    summary: "Recommandations EULAR 2016 pour la goutte. Cibles uricémiques, allopurinol en 1re intention, prophylaxie. Dernière mise à jour EULAR disponible (pas de version 2022).",
    keyPoints: ["Cible uricémie < 360 µmol/L","< 300 µmol/L si tophus présents","Allopurinol en 1re intention (titration depuis 100 mg/j)","Colchicine ou AINS pour les accès aigus","Prophylaxie 6 mois à l'initiation du traitement hypouricémiant"],
    quiz: [
      {type:"mcq",q:"Cible d'uricémie EULAR en présence de tophus ?",options:["< 420 µmol/L","< 360 µmol/L","< 300 µmol/L","< 240 µmol/L"],answer:2,expl:"En présence de tophus la cible est < 300 µmol/L (360 µmol/L sans tophus)."},
      {type:"tf",q:"L'allopurinol doit être démarré pendant un accès aigu de goutte.",answer:false,expl:"Initié à distance de l'accès, avec prophylaxie par colchicine à l'initiation."}
    ]
  },

  // ════════════════════════════════════════════════════════════════
  // EULAR — PMR/Horton (T2T 2023)
  // ════════════════════════════════════════════════════════════════

  {
    id: "eular-acr-t2t-pmr-2023",
    society: "EULAR", societyColor: "#d4a017",
    title: "Treat-to-Target dans la maladie de Horton et la PPR — EULAR/ACR 2023",
    pathology: "Polymyalgia rheumatica", category: "Traitement",
    publicationDate: "2023-12-01", updatedAt: "2023-12-01",
    url: "https://ard.bmj.com/content/83/1/48",
    summary: "Recommandations EULAR/ACR 2023 sur la stratégie treat-to-target dans la maladie de Horton et la PPR. Définition des cibles, suivi et décisions thérapeutiques.",
    keyPoints: ["Cible : rémission clinique et biologique (CRP normalisée)","Évaluation régulière avec outil validé (DAS-PPR)","Décroissance guidée par l'activité de la maladie","Prise en compte des comorbidités liées aux corticoïdes","Épargne cortisonique si cible non atteinte à la dose minimale"],
    quiz: [
      {type:"mcq",q:"Quelle est la cible thérapeutique dans la PPR selon le concept T2T ?",options:["Normalisation de la VS seule","Rémission clinique + CRP normalisée","Absence de rechute sous corticoïdes","DAS-PPR < 7"],answer:1,expl:"La cible est la rémission clinique (absence de douleurs) + normalisation biologique (CRP), avec sevrage cortisonique."}
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
