/* ═══════════════════════════════════════════════════════════
   ⚙️  INTERRUPTEUR PRINCIPAL
   ───────────────────────────────────────────────────────────
   MODE_EDITION = true   →  Tu remplis ton portfolio.
                            Les boutons ＋ (ajouter) et ✕ (supprimer)
                            sont ACTIFS. Pratique pour toi.

   MODE_EDITION = false  →  Version PUBLIÉE (GitHub, hébergement).
                            Les boutons ＋ et ✕ DISPARAISSENT.
                            Personne ne peut modifier tes images.
                            Seul le zoom 🔍 reste, pour les visiteurs.

   👉 Quand ton portfolio est prêt : passe à  false  avant de publier.
   ═══════════════════════════════════════════════════════════ */
const MODE_EDITION = false;

// ═══ VIGNETTES PDF AUTOMATIQUES (PDF.js) ═══
// Génère une image d'aperçu de la 1ʳᵉ page de chaque PDF, directement
// dans le navigateur — pas besoin de faire de capture d'écran toi-même.
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ═══ DONNÉES ═══
const DATA = {
  // 1 · EXPÉRIENCES PRO
  sdis: {
    grp: 'exp',
    color: 'red',
    icon: '🚒',
    lat: 47.47423,
    lng: -0.61439,
    zoom: 15,

    cat: 'Stage de fin d’études · Géomaticienne',

    title: 'Modernisation des processus SIG — SDIS 49',

    period: '2026 · Angers · Stage de fin d’études',

    short: `Modernisation de plusieurs processus SIG afin de remplacer progressivement les anciens traitements par une organisation fondée sur QGIS, Python et Lizmap.`,

    context: `Le stage de fin d’études mené au SDIS de Maine-et-Loire porte sur la modernisation de plusieurs processus SIG auparavant réalisés principalement avec GeoConcept. L’objectif consiste à construire une organisation plus homogène, automatisée et durable autour de QGIS, Python et Lizmap. Les plans muraux et les atlas restent des productions imprimées ou PDF, tandis que la sectorisation, les isochrones et les données sur les engins peuvent être consultés dans le WebSIG.`,

    impact: `La mission a conduit à la conception d’un fond de carte vectoriel mutualisé, à l’automatisation de la production des atlas et à la structuration de plusieurs référentiels opérationnels. Cette organisation réduit les opérations manuelles, centralise les données et facilite l’actualisation ainsi que la diffusion des productions cartographiques.`,

    stats: [],

    tags: [
      {
        c: 'Logiciels',
        t: ['QGIS', 'Lizmap', 'GeoConcept']
      },
      {
        c: 'Développement',
        t: ['Python', 'Model Builder']
      },
      {
        c: 'Méthodes',
        t: [
          'Automatisation',
          'Structuration des données',
          'Analyse de réseau',
          'WebSIG'
        ]
      }
    ],

    imgs: [
      'Fond de carte vectoriel et plans muraux',
      'Atlas opérationnels automatisés',
      'Model Builder et script d’assemblage',
      'Sectorisation opérationnelle',
      'Isochrones et accessibilité',
      'Engins et WebSIG Lizmap'
    ],

    media: [
      {
        type: 'video',
        src: 'assets/videos/fond-vectoriel.mp4',
        name: 'Fond de carte vectoriel et plans muraux'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Atlas.pdf',
        thumb: 'assets/images/Atlas.jpg',
        name: 'Atlas opérationnels automatisés'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Modeleur Qgis_Script.pdf',
        thumb: 'assets/images/Modeleur Qgis_Script.jpg',
        name: 'Model Builder et script d’assemblage'
      },
      {
        type: 'video',
        src: 'assets/videos/sectorisation.mp4',
        name: 'Sectorisation opérationnelle'
      },
      {
        type: 'video',
        src: 'assets/videos/isochrones.mp4',
        name: 'Isochrones et accessibilité'
      },
      {
        type: 'video',
        src: 'assets/videos/representations-localisation-engins.mp4',
        name: 'Engins et WebSIG Lizmap'
      }
    ]
  },

  sebikotane: {
  grp: 'exp',
  color: 'red',
  icon: '🏛️',
  lat: 14.74285,
  lng: -17.14213,
  zoom: 15,

  cat: 'Diagnostic et planification territoriale',

  title: 'Commune de Sébikotane — Diagnostic et planification',

  period: '2021 · Sébikotane',

  short: `Réalisation d’un diagnostic territorial participatif, suivi de la définition d’orientations stratégiques et de projets de développement adaptés aux enjeux de la commune.`,

  context: `La mission réalisée au sein de la commune de Sébikotane a porté sur la production d’un diagnostic et d’un document de planification territoriale. La démarche associait recherches documentaires, entretiens avec les acteurs locaux, enquêtes auprès des ménages, observations de terrain, géolocalisation et analyse de données.`,

  impact: `Le diagnostic a permis d’étudier l’organisation spatiale, les équipements, l’habitat, les dynamiques économiques, l’environnement et la gouvernance municipale. L’analyse a notamment mis en évidence une urbanisation rapide, une pression croissante sur les espaces agricoles et naturels ainsi que des difficultés d’accès à certains services. Ces constats ont été traduits en axes stratégiques, en programmation d’actions et en propositions de projets de développement.`,

  stats: [],

  tags: [
    {
      c: 'Logiciels',
      t: ['QGIS', 'KoboCollect']
    },
    {
      c: 'Méthodes',
      t: [
        'Enquêtes de terrain',
        'Analyse multitemporelle',
        'Diagnostic FFOM',
        'Planification territoriale'
      ]
    },
    {
      c: 'Production',
      t: [
        'Cartographie thématique',
        'Programmation',
        'Cadre logique'
      ]
    }
  ],
  imgs: [
    'Diagnostic et planification territoriale de Sébikotane'
  ],

  media: [
    {
      type: 'pdf',
      src: 'assets/pdf/Sebikotane.pdf',
      thumb: 'assets/images/Sebikotane.jpg',
      name: 'Diagnostic et planification territoriale de Sébikotane'
    }
  ]
},

  hlm: {
  grp: 'exp',
  color: 'red',
  icon: '🏛️',
  lat: 14.70490,
  lng: -17.44350,
  zoom: 15,

  cat: 'Diagnostic territorial',

  title: 'Commune des HLM — Diagnostic territorial',

  period: '2020 · Dakar · 45 jours',

  short: `Diagnostic territorial participatif associant collecte de terrain, géolocalisation des équipements, cartographie et analyse des dynamiques urbaines, économiques et institutionnelles.`,

  context: `La mission menée au sein de la commune des HLM a consisté à produire un diagnostic territorial dans le contexte de la Covid-19. L’étude reposait sur des recherches documentaires, des entretiens avec les acteurs locaux, des enquêtes socio-économiques et la géolocalisation des équipements présents dans la commune.`,

  impact: `Le travail a permis de produire un état des lieux spatial, socio-économique et institutionnel de la commune. Les cartes et analyses ont mis en évidence la forte urbanisation du territoire, la diversité de ses équipements et de ses activités économiques, mais également des difficultés liées à la sécurité, à la santé, aux infrastructures et au fonctionnement municipal. Des recommandations sectorielles ont ensuite été formulées pour accompagner la planification locale.`,

  stats: [],

  tags: [
    {
      c: 'Logiciels',
      t: ['QGIS', 'KoboCollect']
    },
    {
      c: 'Méthodes',
      t: [
        'Collecte de terrain',
        'Géolocalisation',
        'Diagnostic territorial',
        'Analyse FFOM'
      ]
    },
    {
      c: 'Domaines',
      t: [
        'Aménagement',
        'Économie locale',
        'Gouvernance territoriale'
      ]
    }
  ],
  imgs: [
    'Diagnostic territorial de la commune des HLM'
  ],

  media: [
    {
      type: 'pdf',
      src: 'assets/pdf/HLM.pdf',
      thumb: 'assets/images/HLM.jpg',
      name: 'Diagnostic territorial de la commune des HLM'
    }
  ]
},
  // 2 · PROJETS UNIVERSITAIRES (commandes)
  publicis: {
    grp: 'univ',
    color: 'u',
    icon: '📣',
    lat: 48.10310,
    lng: -1.67720,
    zoom: 16,

    cat: 'Projet réalisé en partenariat avec Publicis Connected Media',

    title: 'IA agentique appliquée aux processus géomarketing',

    period: '2025–2026 · Rennes',

    short: `Étude exploratoire visant à identifier comment l’IA agentique peut automatiser certaines tâches géomarketing tout en maintenant le contrôle et l’expertise humaine.`,

    context: `Le projet réalisé avec Publicis Connected Media porte sur l’intégration de l’IA agentique dans les processus géomarketing. L’étude s’appuie sur l’analyse du fonctionnement du pôle, la comparaison de plusieurs solutions techniques et une expérimentation menée dans BigQuery.`,

    impact: `L’étude a permis d’identifier les tâches pouvant être automatisées ou assistées, de comparer plusieurs architectures et d’évaluer la capacité d’un agent à explorer et contrôler un jeu de données dans BigQuery. Le résultat constitue une feuille de route méthodologique associant automatisation, gouvernance des données et validation humaine.`,

    stats: [],

    tags: [
      {
        c: 'Méthodes',
        t: [
          'Analyse des besoins',
          'Benchmark',
          'Grille multicritère',
          'Expérimentation'
        ]
      },
      {
        c: 'Technologies étudiées',
        t: [
          'BigQuery',
          'n8n',
          'LangGraph',
          'Python',
          'Claude Code'
        ]
      },
      {
        c: 'Domaines',
        t: [
          'IA agentique',
          'Géomarketing',
          'Ingénierie des données'
        ]
      }
    ],

    imgs: [
      'Synthèse du projet et expérimentation BigQuery'
    ],

    media: [
      {
        type: 'video',
        src: 'assets/videos/publicis.mp4',
        name: 'Synthèse du projet et expérimentation BigQuery'
      }
    ]
  },


  adeupa: {
    grp: 'univ',
    color: 'u',
    icon: '🗺️',
    lat: 48.39176,
    lng: -4.48373,
    zoom: 16,

    cat: 'Projet réalisé en partenariat avec l’ADEUPa',

    title: 'Exploitation des données Waze pour l’analyse territoriale',

    period: '2025–2026 · Ouest breton',

    short: `Conception d’une méthode reproductible de collecte, d’analyse et de visualisation des données Waze au service des politiques publiques de mobilité.`,

    context: `Le projet mené avec l’Agence d’urbanisme de Brest-Bretagne et Morlaix Communauté constitue une étude exploratoire sur l’utilisation des données Waze for Cities. L’objectif était de déterminer comment ces données collaboratives et produites en temps réel pouvaient compléter les sources traditionnelles utilisées par les collectivités.`,

    impact: `Le projet a permis de proposer une chaîne complète allant de la collecte automatisée des données à leur visualisation dans une interface web. Plusieurs analyses spatiales ont été expérimentées afin d’identifier les axes perturbés, les zones de congestion et les relations possibles avec les ronds-points, les accidents routiers ou les sites touristiques. Le prototype constitue une base reproductible pouvant être étendue à d’autres territoires.`,

    stats: [],

    tags: [
      {
        c: 'Logiciels',
        t: ['QGIS', 'R', 'Python']
      },
      {
        c: 'Développement web',
        t: [
          'HTML',
          'CSS',
          'JavaScript',
          'Leaflet',
          'Chart.js'
        ]
      },
      {
        c: 'Méthodes',
        t: [
          'Collecte automatisée',
          'Analyse de trafic',
          'Analyse temporelle',
          'Datavisualisation'
        ]
      },
      {
        c: 'Données',
        t: ['Waze for Cities', 'BAAC']
      }
    ],
    imgs: [
      'Analyse territoriale des données Waze'
    ],

    media: [
      {
        type: 'pdf',
        src: 'assets/pdf/Adeupa.pdf',
        thumb: 'assets/images/Adeupa.jpg',
        name: 'Analyse territoriale des données Waze'
      }
    ]
  },

  sncf: {
    grp: 'univ',
    color: 'u',
    icon: '🚆',
    lat: 47.21473,
    lng: -1.53804,
    zoom: 16,

    cat: 'Projet réalisé en partenariat avec SNCF Réseau',

    title: 'Prospective territoriale et futurs usagers du train',

    period: '2025–2026 · Bretagne et Loire-Atlantique',

    short: `Étude prospective croisant enquête, analyse statistique et cartographie multicritère afin d’identifier les aspirations territoriales et les mobilités des futurs actifs.`,

    context: `Le projet réalisé avec SNCF Réseau repose sur une étude prospective du cadre de vie souhaité à l’horizon 2045–2050 dans le périmètre du projet LNOBPL. La démarche associait une recherche documentaire, une enquête auprès des 18–25 ans, une analyse statistique des réponses et une étude multicritère des territoires.`,

    impact: `L’étude a permis d’identifier quatre profils de futurs actifs selon leurs attentes en matière de logement, de services, d’environnement et de mobilité. Ces préférences ont ensuite été croisées avec des indicateurs géographiques afin de cartographier les territoires présentant le plus fort potentiel d’attractivité pour chaque profil. Les résultats apportent également des éléments sur les conditions susceptibles d’encourager davantage l’usage du train.`,

    stats: [],

    tags: [
      {
        c: 'Logiciels',
        t: ['R', 'QGIS', 'Google Forms']
      },
      {
        c: 'Analyse statistique',
        t: [
          'Analyse descriptive',
          'ACM',
          'CAH',
          'Classification'
        ]
      },
      {
        c: 'Analyse territoriale',
        t: [
          'Analyse multicritère',
          'Indicateurs composites',
          'Prospective',
          'Mobilités'
        ]
      }
    ],
    imgs: [
      'Étude prospective — profils et attractivité territoriale'
    ],

    media: [
      {
        type: 'pdf',
        src: 'assets/pdf/SNCF.pdf',
        thumb: 'assets/images/SNCF.jpg',
        name: 'Étude prospective — profils et attractivité territoriale'
      }
    ]
  },

  gend: {
    grp: 'univ',
    color: 'u',
    icon: '🛡️',
    lat: 48.81481,
    lng: 2.26987,
    zoom: 16,

    cat: 'Projet réalisé pour la Gendarmerie nationale',

    title: 'Atlas départementaux d’appropriation territoriale',

    period: '2024–2025 · France métropolitaine',

    short: `Conception d’atlas cartographiques permettant aux commandants de groupement de comprendre rapidement les caractéristiques et les enjeux d’un nouveau département.`,

    context: `La commande du Département de Géo-Exploitation Opérationnelle de la Gendarmerie nationale porte sur la conception d’atlas départementaux destinés aux commandants de groupement. Trois départements tests présentant des contextes territoriaux différents ont été étudiés : le Var, le Doubs et la Sarthe.`,

    impact: `Le projet a permis de structurer des portraits territoriaux associant cartes, graphiques et indicateurs sur l’environnement, les infrastructures, la population et l’économie. Les données et traitements ont été documentés afin de rendre les planches reproductibles et de préparer leur future automatisation pour l’ensemble des départements métropolitains.`,

    stats: [],

    tags: [
      {
        c: 'Logiciels',
        t: ['QGIS', 'R', 'SQL']
      },
      {
        c: 'Méthodes',
        t: [
          'Traitement de données',
          'Cartographie thématique',
          'Datavisualisation'
        ]
      },
      {
        c: 'Production',
        t: [
          'Atlas départemental',
          'Référentiel commun',
          'Documentation technique',
          'Reproductibilité'
        ]
      }
    ],
    imgs: [
      'Atlas départementaux — sélection de planches'
    ],

    media: [
      {
        type: 'pdf',
        src: 'assets/pdf/Gendarmerie.pdf',
        thumb: 'assets/images/Gendarmerie.jpg',
        name: 'Atlas départementaux — sélection de planches'
      }
    ]
  },

  // ═════════════════════════════════════════════════════════
  // 3 · GALERIE DES RÉALISATIONS CARTOGRAPHIQUES
  // ═════════════════════════════════════════════════════════

  realisations: {
    grp: 'autre',
    color: 'g',
    icon: '🗂️',
    lat: 48.11730,
    lng: -1.67780,
    zoom: 12,

    cat: 'Galerie de productions cartographiques',

    title: 'Réalisations cartographiques',

    period: '2024–2026 · Projets universitaires et personnels',

    short: `Une sélection de productions illustrant différentes méthodes de traitement, d’analyse et de représentation des données géographiques.`,

    context: `Cette galerie rassemble des réalisations produites dans le cadre d’une formation en géomatique. Elles portent sur des problématiques de mobilité, d’accessibilité, d’environnement, de démographie, de couverture numérique et d’aménagement du territoire.`,

    impact: `Ces travaux illustrent la maîtrise du choix des méthodes cartographiques, de la préparation et de l’analyse des données, ainsi que de leur transformation en représentations lisibles et accessibles. La galerie met également en valeur la diversité des outils et méthodes mobilisés : QGIS, R, Python, télédétection, cartographie bivariée, cartogrammes, cartes de flux et ventilation spatiale.`,

    stats: [],

    tags: [
      {
        c: 'Logiciels',
        t: ['QGIS', 'R', 'Python']
      },
      {
        c: 'Méthodes',
        t: [
          'Cartographie bivariée',
          'Cartogramme',
          'Carte de flux',
          'Ventilation spatiale',
          'Télédétection'
        ]
      },
      {
        c: 'Domaines',
        t: [
          'Mobilités',
          'Environnement',
          'Démographie',
          'Numérique',
          'Analyse territoriale'
        ]
      }
    ],

    imgs: [
      'Tramway et accessibilité urbaine',
      'GES et densité de population',
      'FTTH et 5G reproductibles',
      'Équipements sportifs et profils d’âge',
      'Évolution du chômage',
      'Flux domicile–travail',
      'Télédétection des Niayes',
      'Population et revenus à Nantes'
    ],

    media: [
      {
        type: 'pdf',
        src: 'assets/pdf/GTFS.pdf',
        thumb: 'assets/images/GTFS.png',
        name: 'Tramway et accessibilité urbaine'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Bivariée.pdf',
        thumb: 'assets/images/Bivariée.jpg',
        name: 'GES et densité de population'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Cartes_python.pdf',
        thumb: 'assets/images/Cartes_python.jpg',
        name: 'FTTH et 5G reproductibles'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Déformations en fonction du nombre de boulodromes par EPCI.pdf',
        thumb: 'assets/images/Déformations en fonction du nombre de boulodromes par EPCI.jpg',
        name: 'Équipements sportifs et profils d’âge'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Atlas cartographique.pdf',
        thumb: 'assets/images/Atlas cartographique.jpg',
        name: 'Évolution du chômage'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/flux.pdf',
        thumb: 'assets/images/flux.jpg',
        name: 'Flux domicile-travail'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/niayes.pdf',
        thumb: 'assets/images/niayes.jpg',
        name: 'Télédétection des Niayes'
      },
      {
        type: 'pdf',
        src: 'assets/pdf/Ventilation_DEMBA_Diariétou_22210680.pdf',
        thumb: 'assets/images/Ventilation_DEMBA_Diariétou_22210680.jpg',
        name: 'Population et revenus à Nantes'
      }
    ]
  }
};

const grpLabel = { exp:'Expériences pro', univ:'Projets universitaires', autre:'Réalisations cartographiques' };

function normalizeRealisationsMenu() {
  const oldIds = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8'];

  const oldItems = [...document.querySelectorAll('.lp-item')].filter(item => {
    const action = item.getAttribute('onclick') || '';
    return oldIds.some(id => action.includes(`'${id}'`) || action.includes(`"${id}"`));
  });

  if (!oldItems.length) return;

  const mainItem = oldItems[0];
  mainItem.setAttribute('onclick', "show('realisations', this)");

  const label = mainItem.querySelector('.lp-label');
  const sub = mainItem.querySelector('.lp-sub');

  if (label) label.textContent = 'Réalisations cartographiques';
  if (sub) sub.textContent = '8 productions · méthodes variées';

  oldItems.slice(1).forEach(item => item.remove());
}


// ═══════════════════════════════════════════════════════════
// DESCRIPTIONS DES CARTES, PDF ET VIDÉOS
// C'est principalement ici que tu modifies les explications.
// L'ordre doit correspondre à la liste « imgs » de chaque projet.
// ═══════════════════════════════════════════════════════════
function mediaItem(
  title,
  description,
  role,
  result,
  tools = [],
  methods = [],
  data = []
) {
  return {
    title,
    description,
    role,
    result,
    tools,
    methods,
    data
  };
}

function placeholderMedia(projectTitle, count = 3) {
  return Array.from(
    { length: count },
    (_, index) => mediaItem(
      `${projectTitle} — livrable ${index + 1}`,
      '[Décrire ce que montre ce livrable.]',
      '[Décrire précisément la méthode et la réalisation.]',
      '[Indiquer le résultat obtenu et l’intérêt du livrable.]',
      ['À compléter'],
      ['À compléter'],
      []
    )
  );
}

const MEDIA_DETAILS = {
 sdis: [
  mediaItem(
    'Fond de carte vectoriel et plans muraux',

    `Cette démonstration présente le fond cartographique commun conçu pour les plans muraux et les atlas opérationnels. Il rassemble les principales informations nécessaires à la lecture du territoire : routes, communes, bâtiments, hydrographie, végétation, voies ferrées et données métiers.`,

    `La réalisation repose sur la sélection et l’organisation des couches, la définition de leur ordre d’affichage, la création de la symbologie, le travail des étiquettes et l’adaptation du niveau de détail aux différentes échelles cartographiques.`,

    `Le SDIS dispose d’une base cartographique homogène, réutilisable et plus facile à actualiser pour produire de nouveaux plans muraux ainsi que de nouveaux atlas.`,

    [
      'QGIS'
    ],

    [
      'Construction d’un fond vectoriel',
      'Hiérarchie visuelle',
      'Symbologie',
      'Étiquetage multi-échelle'
    ],

    [
      'BD TOPO',
      'Données métiers du SDIS'
    ]
  ),

  mediaItem(
    'Atlas opérationnels automatisés',

    `Ce document présente le résultat final de la migration des atlas opérationnels vers QGIS. Il réunit les pages de couverture, les pages de repérage, les planches cartographiques et les éléments d’indexation nécessaires à la consultation par commune.`,

    `La chaîne de production s’appuie sur les atlas QGIS, des expressions dynamiques, des filtres liés à la commune, des emprises automatiques et une organisation commune des mises en page.`,

    `La production obtenue est plus homogène et reproductible. Une modification du référentiel ou de la mise en page peut être répercutée sans reprendre manuellement chaque commune.`,

    [
      'QGIS'
    ],

    [
      'Atlas QGIS',
      'Expressions dynamiques',
      'Filtres par commune',
      'Mises en page automatisées',
      'Export PDF'
    ],

    [
      'Communes',
      'Grille de mise en page',
      'Référentiel cartographique'
    ]
  ),

  mediaItem(
    'Automatisation avec Model Builder et script Python d’assemblage',

    `Ce livrable présente le modèle graphique QGIS utilisé pour organiser les traitements de préparation ainsi qu’un extrait du script Python chargé d’exporter et d’assembler les différentes parties de l’atlas dans un document final.`,

    `Le Model Builder enchaîne les opérations de sélection, de filtrage et de préparation des données. Le script Python pilote ensuite les mises en page, récupère les exports nécessaires et assemble automatiquement les PDF dans le bon ordre.`,

    `Cette automatisation évite le recours à un tableau Excel intermédiaire et limite les opérations manuelles. La production devient plus rapide, plus fiable et plus facilement reproductible pour les différentes communes.`,

    [
      'QGIS Model Builder',
      'Python',
      'PyQGIS',
      'PyPDF'
    ],

    [
      'Chaîne de traitements',
      'Export automatisé',
      'Assemblage de PDF',
      'Suppression des étapes manuelles sous Excel'
    ],

    []
  ),

  mediaItem(
    'Centralisation de la sectorisation opérationnelle',

    `Cette démonstration présente l’organisation des informations permettant de connaître le découpage opérationnel du territoire et le rattachement des secteurs aux différents centres d’incendie et de secours.`,

    `La réalisation repose sur la structuration des couches de sectorisation, l’harmonisation de leur représentation et l’organisation des informations nécessaires à leur consultation ainsi qu’à leur mise à jour.`,

    `La centralisation fournit une référence unique pour comprendre les différents découpages territoriaux et limite la dispersion des informations entre plusieurs supports.`,

    [
      'QGIS',
      'Lizmap'
    ],

    [
      'Structuration des couches',
      'Symbologie catégorisée',
      'Diffusion WebSIG'
    ],

    [
      'Secteurs opérationnels',
      'Centres de secours'
    ]
  ),

  mediaItem(
    'Calcul et représentation des isochrones',

    `Cette démonstration présente des isochrones calculés à partir de la couche des centres de secours. Les zones représentent les secteurs accessibles selon plusieurs temps de parcours et permettent de comparer la couverture du territoire.`,

    `Les isochrones sont générés dans QGIS avec l’extension ORS Tools, à partir des points correspondant aux centres de secours. Les résultats sont ensuite classés, mis en forme puis publiés dans Lizmap pour une consultation interactive.`,

    `La visualisation dans Lizmap facilite la lecture des temps d’accès, la comparaison des zones couvertes par les centres de secours et le repérage des secteurs moins rapidement accessibles.`,

    [
      'QGIS',
      'ORS Tools',
      'Lizmap'
    ],

    [
      'Analyse de réseau',
      'Calcul des temps de parcours',
      'Classification des isochrones',
      'Publication WebSIG'
    ],

    [
      'Couche des centres de secours',
      'Réseau routier OpenRouteService'
    ]
  ),

  mediaItem(
    'Localisation des engins et diffusion dans Lizmap',

    `Cette démonstration permet de visualiser la localisation et la répartition des engins, c’est-à-dire les véhicules et moyens mobilisés lors des interventions. La représentation permet de comprendre quels types d’engins sont présents dans les différents centres de secours.`,

    `Le référentiel des engins est organisé dans QGIS, puis représenté par catégories à l’aide de symboles adaptés aux différents véhicules. Les informations sont ensuite publiées dans Lizmap avec des fenêtres d’information permettant de consulter les caractéristiques associées.`,

    `La carte fournit une lecture rapide de la localisation des moyens opérationnels, de leur répartition entre les centres de secours et de la diversité des véhicules disponibles sur le territoire.`,

    [
      'QGIS',
      'Lizmap'
    ],

    [
      'Structuration attributaire',
      'Symbologie catégorisée',
      'Webmapping',
      'Fenêtres d’information'
    ],

    [
      'Référentiel des engins',
      'Centres de secours'
    ]
  )
],

  sebikotane: [
    mediaItem(
    'Diagnostic et planification territoriale de Sébikotane',

    `Cette présentation synthétise les principaux résultats du diagnostic territorial et du document de planification de la commune de Sébikotane. Elle réunit une sélection de cartes, de constats et de propositions permettant de comprendre les dynamiques du territoire.`,

    `Le livrable rassemble les éléments les plus visuels : évolution de l’occupation du sol, organisation des équipements et des réseaux, principaux enjeux territoriaux, orientations stratégiques et projets prioritaires.`,

    `La sélection met en évidence la progression du bâti, la pression exercée sur les espaces agricoles et naturels, les besoins en équipements ainsi que les actions proposées pour accompagner le développement communal.`,

    [
      'QGIS',
      'KoboCollect',
      'PowerPoint'
    ],

    [
      'Enquêtes de terrain',
      'Diagnostic territorial',
      'Analyse FFOM',
      'Cartographie thématique'
    ],

    [
      'Données d’enquête',
      'Équipements géolocalisés',
      'Occupation du sol'
    ]
  )
  ],

  hlm: [
    mediaItem(
    'Diagnostic territorial de la commune des HLM',

    `Cette présentation propose une sélection synthétique des éléments les plus lisibles du diagnostic territorial de la commune des HLM. Elle présente l’organisation urbaine, les équipements, les activités économiques et les principaux enjeux identifiés.`,

    `Le document regroupe les cartes et graphiques les plus pertinents, complétés par une synthèse visuelle des constats portant sur les services à la population, la santé, l’éducation, la sécurité, les infrastructures et la gouvernance locale.`,

    `La sélection permet de comprendre rapidement les caractéristiques du territoire, ses principaux points d’appui et les domaines d’intervention prioritaires, sans reprendre l’intégralité du rapport initial.`,

    [
      'QGIS',
      'KoboCollect',
      'PowerPoint'
    ],

    [
      'Collecte de terrain',
      'Diagnostic territorial',
      'Analyse FFOM',
      'Cartographie des équipements'
    ],

    [
      'Données d’enquête',
      'Équipements géolocalisés'
    ]
  )
  ],

  publicis: [
    mediaItem(
    'Synthèse du projet et expérimentation BigQuery',

    `Cette vidéo présente l’ensemble de l’étude consacrée à l’intégration de l’IA agentique dans les processus géomarketing. Elle réunit le diagnostic des besoins, la comparaison des solutions, la grille de décision et l’expérimentation menée dans BigQuery.`,

    `Les solutions ont été comparées selon des critères techniques et organisationnels : connectivité, facilité de déploiement, sécurité, gouvernance, capacité d’automatisation et maintien du contrôle humain. Une expérimentation a ensuite permis d’observer le comportement d’un agent lors de l’exploration et du contrôle d’un jeu de données.`,

    `La synthèse met en évidence l’intérêt d’une architecture combinant plusieurs technologies spécialisées. Elle confirme également que l’assistance agentique peut accélérer l’analyse initiale des données, sous réserve d’une validation humaine des traitements et des interprétations.`,

    [
      'BigQuery'
    ],

    [
      'Analyse des besoins',
      'Benchmark',
      'Grille multicritère',
      'Expérimentation agentique'
    ],

    [
      'Jeu de données test'
    ]
  )
  ],

  adeupa: [
    mediaItem(
    'Analyse territoriale des données Waze',

    `Ce livrable présente une chaîne complète d’exploitation des données Waze for Cities, depuis leur récupération jusqu’à leur analyse et leur visualisation. Il regroupe les principaux résultats dans un document unique et cohérent.`,

    `La présentation réunit la méthode de collecte automatisée des fichiers JSON, leur structuration, les analyses spatiales et temporelles du trafic ainsi que des captures du tableau de bord cartographique développé avec Leaflet et Chart.js.`,

    `L’ensemble montre comment les données Waze peuvent compléter les sources traditionnelles pour identifier les axes perturbés, analyser les congestions et rendre les résultats accessibles dans une interface interactive reproductible sur d’autres territoires.`,

    [
      'Python',
      'QGIS',
      'R',
      'Leaflet',
      'Chart.js'
    ],

    [
      'Collecte automatisée',
      'Analyse spatiale',
      'Analyse temporelle',
      'Webmapping'
    ],

    [
      'Waze for Cities',
      'BAAC'
    ]
  )
  ],

  sncf: [
    mediaItem(
    'Étude prospective — profils et attractivité territoriale',

    `Ce livrable rassemble les principaux résultats de l’étude prospective menée sur le cadre de vie souhaité à l’horizon 2045–2050 dans le périmètre du projet LNOBPL. Il associe profils statistiques, graphiques de synthèse et cartographies territoriales.`,

    `La présentation décrit les quatre profils de futurs actifs issus de l’analyse statistique, puis traduit leurs préférences en indicateurs normalisés, pondérés et combinés afin de cartographier le potentiel d’attractivité des territoires.`,

    `Le document met en évidence des aspirations résidentielles et des pratiques de mobilité contrastées. Il permet également d’identifier les territoires les plus adaptés à chaque profil et les conditions favorables à un usage accru du train.`,

    [
      'R',
      'QGIS',
      'Google Forms'
    ],

    [
      'Analyse descriptive',
      'ACM',
      'CAH',
      'Analyse multicritère',
      'Pondération'
    ],

    [
      'Réponses au questionnaire',
      'Indicateurs territoriaux'
    ]
  )
  ],

  gend: [
    mediaItem(
    'Atlas départementaux — sélection de planches',

    `Ce document réunit une sélection de planches issues des atlas départementaux réalisés pour le Var, le Doubs et la Sarthe. Les cartes, graphiques et chiffres clés proposent une lecture synthétique des caractéristiques et des enjeux de chaque territoire.`,

    `La sélection couvre les principales dimensions physiques, environnementales, démographiques, économiques et infrastructurelles. Les indicateurs reposent sur un référentiel commun et une charte graphique homogène afin de faciliter la comparaison entre départements.`,

    `Le livrable permet de comprendre rapidement les dynamiques territoriales utiles à l’appropriation d’un nouveau département, tout en illustrant une méthode reproductible pouvant être étendue à d’autres territoires.`,

    [
      'QGIS',
      'R',
      'SQL'
    ],

    [
      'Cartographie thématique',
      'Datavisualisation',
      'Standardisation des planches',
      'Reproductibilité'
    ],

    [
      'Données ouvertes nationales'
    ]
  )
  ],

  realisations: [
    mediaItem(
    'Tramway de Bordeaux : quelles stations concentrent le plus d’équipements ?',

    `Cette carte analyse l’accessibilité des équipements autour des stations du tramway de Bordeaux Métropole. Elle croise le réseau de transport, la fréquentation des arrêts et les équipements accessibles dans un rayon de 500 mètres afin d’identifier les stations occupant une place centrale dans la vie urbaine.`,

    `La réalisation associe la préparation des données du réseau et des équipements, des traitements de proximité et une représentation combinant carte, graphiques, chiffres clés et hiérarchisation des stations.`,

    `La réalisation permet de comparer les lignes et de repérer les stations disposant de la plus forte concentration d’équipements, notamment Gambetta, Grand Théâtre et Sainte-Catherine.`,

    [
      'QGIS'
    ],

    [
      'Analyse de proximité',
      'Cartographie des transports',
      'Datavisualisation'
    ],

    [
      'GTFS',
      'Équipements urbains'
    ]
  ),

    mediaItem(
    'Émissions résidentielles et densité de population en Nouvelle-Aquitaine',

    `Cette analyse bivariée croise les émissions résidentielles de gaz à effet de serre par habitant avec la densité de population des communes de Nouvelle-Aquitaine. Elle cherche à déterminer si les territoires les plus densément peuplés sont également les plus émetteurs.`,

    `La méthode repose sur la jointure des données de l’ADEME et de l’INSEE aux communes, la discrétisation des deux indicateurs en trois classes et la construction d’une légende bivariée comportant neuf combinaisons.`,

    `La carte révèle des situations territoriales contrastées. Certains espaces cumulent densité et émissions élevées, tandis que Bordeaux présente une forte densité mais des émissions résidentielles relativement modérées.`,

    [
      'QGIS'
    ],

    [
      'Cartographie bivariée',
      'Discrétisation par quantiles',
      'Analyse environnementale'
    ],

    [
      'ADEME',
      'INSEE'
    ]
  ),

    mediaItem(
    'Couverture numérique : un script reproductible pour tous les départements',

    `Cette réalisation repose sur un script Python paramétrable permettant d’étudier la couverture numérique d’un département. Il produit une carte de la part des locaux raccordables à la fibre optique, une carte de la couverture territoriale en 5G et une synthèse bivariée croisant les deux indicateurs.`,

    `La chaîne de traitement Python couvre l’importation des données, la sélection du département, la gestion des projections, la classification des indicateurs, la création des palettes, la génération des cartes simples et la construction de la carte bivariée.`,

    `La méthode n’est pas limitée à l’Isère. En modifiant le paramètre du département, le même traitement peut être relancé pour produire automatiquement les cartes FTTH et 5G de tout département disposant des données nécessaires.`,

    [
      'Python',
      'GeoPandas',
      'Matplotlib',
      'Contextily'
    ],

    [
      'Script paramétrable',
      'Classification',
      'Cartographie bivariée',
      'Export automatisé'
    ],

    [
      'Données FTTH',
      'Données 5G',
      'Limites administratives'
    ]
  ),

    mediaItem(
    'Boulodromes, gymnases et profils d’âge : une lecture par cartogrammes',

    `Cette étude confronte la répartition des boulodromes et des salles multisports avec celle des jeunes de 15 à 29 ans et des personnes âgées de 60 à 74 ans. Elle combine une représentation bivariée des profils démographiques avec une déformation des EPCI selon leur niveau d’équipement.`,

    `La méthode comprend la préparation des données, la classification des variables, la création de neuf catégories bivariées et la réalisation de cartogrammes représentant l’offre d’équipements sportifs.`,

    `L’analyse permet de dépasser certains clichés sur les pratiques sportives. Elle fait notamment ressortir une présence relative importante des boulodromes dans plusieurs territoires peu peuplés, au-delà des grandes métropoles généralement associées à cette pratique.`,

    [
      'QGIS'
    ],

    [
      'Cartogramme',
      'Cartographie bivariée',
      'Quantiles',
      'Analyse démographique'
    ],

    [
      'INSEE',
      'Base des équipements sportifs'
    ]
  ),

    mediaItem(
    'Évolution du taux de chômage en France par EPCI, de 2006 à 2021',

    `Cette série cartographique présente l’évolution annuelle du taux de chômage à l’échelle des intercommunalités françaises entre 2006 et 2021.`,

    `La série repose sur la préparation des données, la définition d’une classification commune et la production automatisée des seize cartes nécessaires à la comparaison temporelle.`,

    `La représentation en petits multiples permet de suivre rapidement les périodes de hausse et de diminution du chômage, tout en observant les contrastes territoriaux persistants entre les EPCI.`,

    [
      'R'
    ],

    [
      'Série temporelle',
      'Petits multiples',
      'Classification commune'
    ],

    [
      'INSEE'
    ]
  ),

    mediaItem(
    'Où vont travailler les habitants des Pays de la Loire ?',

    `Cette carte représente les déplacements domicile-travail entre les communes des Pays de la Loire. L’épaisseur des lignes indique l’intensité des flux, tandis que les cercles représentent le nombre d’entreprises actives dans chaque commune.`,

    `La réalisation repose sur la préparation de la matrice origine-destination, la génération des liaisons entre les communes et la hiérarchisation visuelle des flux, des pôles d’emploi et des principaux indicateurs.`,

    `La carte met en évidence le rôle structurant de Nantes, Angers et Le Mans ainsi que l’organisation multipolaire des déplacements professionnels dans la région.`,

    [
      'QGIS'
    ],

    [
      'Matrice origine-destination',
      'Carte de flux',
      'Hiérarchisation visuelle'
    ],

    [
      'INSEE — mobilités professionnelles',
      'Entreprises actives'
    ]
  ),

    mediaItem(
    'Urbanisation et recul des milieux naturels dans les Niayes entre 1984 et 2024',

    `Cette étude de télédétection analyse l’évolution de la zone humide des Niayes sur une période de quarante ans à partir d’images satellitaires Landsat. Elle associe les indices NDVI et NDWI, une classification de l’occupation du sol et une détection des changements.`,

    `La méthode comprend le traitement des images satellitaires de 1984 et 2024, le calcul des indices de végétation et d’humidité, la classification de l’occupation du sol et la comparaison des deux périodes.`,

    `Les résultats montrent une diminution de la couverture végétale, une progression des espaces urbanisés, une fragmentation des zones agricoles et des transformations importantes dans une grande partie de la zone humide.`,

    [
      'QGIS'
    ],

    [
      'Télédétection',
      'NDVI',
      'NDWI',
      'Classification de l’occupation du sol',
      'Détection des changements'
    ],

    [
      'Landsat 4–5',
      'Landsat 9'
    ]
  ),

    mediaItem(
    'Nantes à l’échelle du bâtiment : densité de population et revenus des ménages',

    `Cette réalisation affine la lecture des données démographiques en répartissant la population à l’échelle des bâtiments résidentiels. Une seconde carte croise cette estimation avec les revenus des ménages afin de faire apparaître les contrastes internes à la ville de Nantes.`,

    `La réalisation repose sur la préparation des données de l’INSEE et de la BD TOPO, la sélection des bâtiments résidentiels, la ventilation spatiale de la population et la conception des deux représentations finales.`,

    `La méthode permet de dépasser les limites des statistiques agrégées à des mailles trop larges et de visualiser plus précisément les secteurs denses ainsi que les différences de revenus à l’intérieur de la ville.`,

    [
      'QGIS'
    ],

    [
      'Ventilation spatiale',
      'Croisement de données',
      'Cartographie à l’échelle du bâtiment'
    ],

    [
      'INSEE',
      'BD TOPO'
    ]
  )
  ]
};

function getMediaInfo(id, index) {
  const fallbackTitle = DATA[id]?.imgs?.[index] || `Livrable ${index + 1}`;

  return MEDIA_DETAILS[id]?.[index] || mediaItem(
    fallbackTitle,
    '[Description à compléter.]',
    '[Méthode et réalisation à compléter.]',
    '[Résultat à compléter.]',
    ['À compléter'],
    ['À compléter'],
    []
  );
}


// ═══ INTRO ═══
function dispatch(){
  enter();
}

function enter(){
  document.getElementById('intro').classList.add('gone');
  initMap();

  const lpanel = document.getElementById('lpanel');
  if (lpanel) {
    setTimeout(() => lpanel.classList.add('intro-hint'), 700);
    setTimeout(dismissLpanelHint, 12000);
  }
}

function dismissLpanelHint(){
  const lpanel = document.getElementById('lpanel');
  const hint = document.getElementById('lpanel-hint');
  if (lpanel) lpanel.classList.remove('intro-hint');
  if (hint) hint.classList.add('hide');
}

// ═══ MAP ═══
let map, markers={};
function initMap(){
  if(map) return;
  map=L.map('map',{center:[46.6,0],zoom:5,zoomControl:false,attributionControl:false,worldCopyJump:true});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19}).addTo(map);
  map.on('mousemove',e=>{
    const la=e.latlng.lat.toFixed(3),ln=e.latlng.lng.toFixed(3);
    document.getElementById('hud-lat').textContent=(la>0?la+'°N':Math.abs(la)+'°S');
    document.getElementById('hud-lng').textContent=(ln>0?ln+'°E':Math.abs(ln)+'°W');
    document.getElementById('coords-live').textContent=(la>0?la+'°N':Math.abs(la)+'°S')+' '+(ln>0?ln+'°E':Math.abs(ln)+'°W');
  });
  placeMarkers();
}

const markerColors = {
  red: '#b41f3a',
  u: '#6754b8',
  g: '#267a65'
};

function ensureProjectMarkerStyle() {
  if (document.getElementById('project-marker-style')) return;

  const style = document.createElement('style');
  style.id = 'project-marker-style';
  style.textContent = `
    .project-marker-wrapper {
      background: transparent;
      border: none;
    }

    .project-marker {
      position: relative;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 3px solid #ffffff;
      border-radius: 50% 50% 50% 0;
      background: var(--marker-color);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
      transform: rotate(-45deg);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .project-marker-symbol {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      font-size: 20px;
      line-height: 1;
      transform: rotate(45deg);
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.18));
    }

    .project-marker-wrapper:hover .project-marker {
      transform: rotate(-45deg) scale(1.14);
      box-shadow: 0 7px 18px rgba(0, 0, 0, 0.35);
    }
  `;

  document.head.appendChild(style);
}

function placeMarkers() {
  ensureProjectMarkerStyle();

  Object.entries(DATA).forEach(([id, d]) => {
    const symbol = d.icon || '📍';
    const markerColor = markerColors[d.color] || markerColors.g;

    const icon = L.divIcon({
      html: `
        <div
          class="project-marker"
          style="--marker-color: ${markerColor};"
        >
          <span class="project-marker-symbol" aria-hidden="true">
            ${symbol}
          </span>
        </div>
      `,
      className: 'project-marker-wrapper',
      iconSize: [42, 42],
      iconAnchor: [21, 42]
    });

    const marker = L.marker([d.lat, d.lng], { icon }).addTo(map);

    marker.on('mouseover', event => showPreview(event, id, d));
    marker.on('mousemove', movePreview);
    marker.on('mouseout', hidePreview);
    marker.on('click', () => show(id));

    markers[id] = marker;
  });
}

// ═══ APERÇU SURVOL ═══
const pv=document.getElementById('preview');
function showPreview(e, id, d) {
  document.getElementById('pv-cat').textContent = grpLabel[d.grp];
  document.getElementById('pv-title').textContent = d.title;
  document.getElementById('pv-desc').textContent = d.short;

  pv.classList.add('on');
  movePreview(e);
}
function movePreview(e){
  const x=e.originalEvent.clientX, y=e.originalEvent.clientY;
  let px=x+18, py=y-10;
  if(px+240>window.innerWidth) px=x-248;
  if(py+160>window.innerHeight) py=window.innerHeight-170;
  pv.style.left=px+'px'; pv.style.top=py+'px';
}
function hidePreview(){ pv.classList.remove('on'); }

// ═══ PANNEAU DÉTAIL ═══
const mediaCache = {};

// ═══════════════════════════════════════════════════════════
// CHARGEMENT PERMANENT DES IMAGES, PDF ET VIDÉOS
// ═══════════════════════════════════════════════════════════

function detectMediaType(src = '') {
  const cleanSrc = src
    .split('?')[0]
    .split('#')[0]
    .toLowerCase();

  if (cleanSrc.endsWith('.pdf')) {
    return 'pdf';
  }

  if (
    cleanSrc.endsWith('.mp4') ||
    cleanSrc.endsWith('.webm') ||
    cleanSrc.endsWith('.mov')
  ) {
    return 'video';
  }

  return 'image';
}


Object.entries(DATA).forEach(([id, data]) => {
  if (Array.isArray(data.media)) {
    data.media.forEach((item, index) => {
      if (!item || !item.src) {
        return;
      }

      mediaCache[id + '_' + index] = {
        type:
          item.type ||
          detectMediaType(item.src),

        src: item.src,

        name:
          item.name ||
          getMediaInfo(id, index).title ||
          data.imgs?.[index] ||
          'Livrable',

        objectUrl: false
      };
    });
  }

  // Compatibilité avec d’anciennes images définies avec imgSrc.
  if (Array.isArray(data.imgSrc)) {
    data.imgSrc.forEach((src, index) => {
      if (!src || mediaCache[id + '_' + index]) {
        return;
      }

      mediaCache[id + '_' + index] = {
        type: detectMediaType(src),
        src,
        name:
          getMediaInfo(id, index).title ||
          data.imgs?.[index] ||
          'Livrable',
        objectUrl: false
      };
    });
  }
});

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getMedia(id, i) {
  return mediaCache[id + '_' + i] || null;
}


function prepareVideoPreview(video) {
  if (!video) return;

  const seekTo = Number.isFinite(video.duration) && video.duration > 0
    ? Math.min(0.8, Math.max(0.05, video.duration * 0.03))
    : 0.1;

  try {
    video.currentTime = seekTo;
  } catch (error) {
    // Certains formats ne permettent pas de choisir l'image immédiatement.
  }

  video.pause();
}


function ensureRealisationsGalleryStyle() {
  if (document.getElementById('portfolio-gallery-style')) return;

  const style = document.createElement('style');
  style.id = 'portfolio-gallery-style';
  style.textContent = `
    .rp-gal {
      display: grid;
      gap: 1rem;
    }

    .rp-gal-one {
      grid-template-columns: 1fr;
    }

    .rp-gal-two,
    .rp-gal-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .rp-gal-one .gslot {
      min-height: 360px;
    }

    .rp-gal-two .gslot {
      min-height: 300px;
    }

    .rp-gal-grid .gslot {
      min-height: 250px;
    }

    .gslot-badge {
      max-width: calc(100% - 1.5rem);
      white-space: normal;
      line-height: 1.4;
    }

    .gslot-video-fallback {
      position: absolute;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.45rem;
      padding: 2rem;
      background:
        linear-gradient(
          135deg,
          rgba(17, 19, 21, 0.96),
          rgba(37, 41, 45, 0.94)
        );
      color: var(--white);
      text-align: center;
      pointer-events: none;
    }

    .gslot-video-fallback strong {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      color: var(--red);
    }

    .gslot-video-fallback span {
      max-width: 220px;
      font-size: 0.72rem;
      line-height: 1.5;
      color: var(--mist);
    }

    .gslot.video-load-error .gslot-video-preview {
      display: none;
    }

    .gslot.video-load-error .gslot-video-fallback {
      display: flex;
    }

    .gslot-pdf-placeholder {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      background:
        linear-gradient(
          135deg,
          rgba(17, 19, 21, 0.96),
          rgba(37, 41, 45, 0.94)
        );
      color: var(--white);
      text-align: center;
      pointer-events: none;
    }

    .gslot-pdf-fallback {
      display: none;
    }

    .gslot-pdf-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: var(--white);
    }

    .gslot-pdf-canvas.ready ~ .gslot-pdf-fallback {
      display: none;
    }

    .gslot.pdf-thumb-error .gslot-pdf-fallback {
      display: flex;
    }

    .gslot.pdf-thumb-error .gslot-image-preview,
    .gslot.pdf-thumb-error .gslot-pdf-canvas {
      display: none;
    }

    .gslot-pdf-icon {
      font-size: 2.4rem;
      line-height: 1;
    }

    .gslot-pdf-hint {
      font-family: 'IBM Plex Mono', monospace;
      max-width: 200px;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      color: var(--mist);
    }

    @media (max-width: 760px) {
      .rp-gal-one,
      .rp-gal-two,
      .rp-gal-grid {
        grid-template-columns: 1fr;
      }

      .rp-gal-one .gslot,
      .rp-gal-two .gslot,
      .rp-gal-grid .gslot {
        min-height: 240px;
      }
    }
  `;

  document.head.appendChild(style);
}

// ═══ Génération des vignettes PDF (1ʳᵉ page → image), une par une ═══
const PDF_THUMB_STORAGE_PREFIX = 'pdfThumb::v2::';
const pdfThumbMemoryCache = new Map();
let pdfThumbQueue = Promise.resolve();

function getCachedPdfThumb(src) {
  if (pdfThumbMemoryCache.has(src)) return pdfThumbMemoryCache.get(src);

  try {
    const cached = localStorage.getItem(PDF_THUMB_STORAGE_PREFIX + src);
    if (cached) {
      pdfThumbMemoryCache.set(src, cached);
      return cached;
    }
  } catch (e) {
    // stockage indisponible (navigation privée, etc.) : pas grave
  }

  return null;
}

function setCachedPdfThumb(src, dataUrl) {
  pdfThumbMemoryCache.set(src, dataUrl);
  try {
    localStorage.setItem(PDF_THUMB_STORAGE_PREFIX + src, dataUrl);
  } catch (e) {
    // stockage plein ou indisponible : la vignette reste en mémoire pour cette visite
  }
}

function renderPdfThumbnail(canvas, src) {
  pdfThumbQueue = pdfThumbQueue.then(() => new Promise(resolve => {
    const cached = getCachedPdfThumb(src);

    if (cached) {
      const img = new Image();
      img.className = 'gslot-image-preview';
      img.onload = () => canvas.replaceWith(img);
      img.onerror = () => canvas.closest('.gslot')?.classList.add('pdf-thumb-error');
      img.src = cached;
      resolve();
      return;
    }

    if (typeof pdfjsLib === 'undefined') {
      resolve();
      return;
    }

    pdfjsLib.getDocument(src).promise
      .then(pdf => pdf.getPage(1))
      .then(page => {
        const baseViewport = page.getViewport({ scale: 1 });
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const targetWidth = Math.min(1000, 480 * dpr);
        const scale = targetWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        return page.render({
          canvasContext: canvas.getContext('2d'),
          viewport
        }).promise.then(() => {
          canvas.classList.add('ready');
          try {
            setCachedPdfThumb(src, canvas.toDataURL('image/jpeg', 0.85));
          } catch (e) {
            // export impossible sur certains navigateurs restrictifs : pas grave
          }
        });
      })
      .catch(() => {
        canvas.closest('.gslot')?.classList.add('pdf-thumb-error');
      })
      .finally(resolve);
  }));
}

function initPdfThumbnails(id, d) {
  if (!Array.isArray(d.imgs)) return;

  d.imgs.forEach((_, i) => {
    const media = getMedia(id, i);
    if (media?.type !== 'pdf' || media.thumb) return;

    const canvas = document.getElementById(`pdfc-${id}-${i}`);
    if (canvas) renderPdfThumbnail(canvas, media.src);
  });
}

function getGalleryClass(data) {
  const count = Array.isArray(data.imgs)
    ? data.imgs.length
    : 0;

  if (count === 1) {
    return 'rp-gal rp-gal-one';
  }

  if (count === 2) {
    return 'rp-gal rp-gal-two';
  }

  return 'rp-gal rp-gal-grid';
}

function renderGallery(id, d) {
  ensureRealisationsGalleryStyle();
  const galleryClass = getGalleryClass(d);

  return `<div class="${galleryClass}">${d.imgs.map((originalLabel, i) => {
    const info = getMediaInfo(id, i);
    const media = getMedia(id, i);
    const safeTitle = escapeHtml(info.title || originalLabel);
    const safeFileName = media ? escapeHtml(media.name || info.title) : safeTitle;

    const deleteButton = MODE_EDITION
      ? `<button class="gslot-del" type="button" onclick="event.stopPropagation();deleteMedia('${id}',${i})">✕</button>`
      : '';

    const fileInput = MODE_EDITION
      ? `<input type="file" class="ginput" accept="image/*,video/*,application/pdf" id="gi-${id}-${i}" onchange="uploadMedia(event,'${id}',${i})">`
      : '';

    let content = '';

    if (media?.type === 'image') {
      content = `
        <img class="gslot-image-preview" src="${media.src}" alt="${safeTitle}">
        <button class="gslot-media-click" type="button" aria-label="Voir ${safeTitle}" onclick="openMedia('${id}',${i})"></button>
        <div class="gslot-type-badge">IMAGE</div>
        <div class="gslot-badge">${safeTitle}</div>
        <button class="gslot-zoom" type="button" onclick="event.stopPropagation();openMedia('${id}',${i})">Voir</button>
        ${deleteButton}
      `;
    } else if (media?.type === 'video') {
      content = `
        <video
          class="gslot-video-preview"
          src="${media.src}"
          muted
          playsinline
          preload="metadata"
          onloadedmetadata="prepareVideoPreview(this)"
          onerror="this.closest('.gslot')?.classList.add('video-load-error')"
        ></video>
        <div class="gslot-video-fallback">
          <strong>VIDÉO</strong>
          <span>Cliquer pour ouvrir la démonstration</span>
        </div>
        <button class="gslot-media-click" type="button" aria-label="Lire ${safeTitle}" onclick="openMedia('${id}',${i})"></button>
        <div class="gslot-play">▶</div>
        <div class="gslot-type-badge">VIDÉO</div>
        <div class="gslot-badge">${safeTitle}</div>
        <button class="gslot-zoom" type="button" onclick="event.stopPropagation();openMedia('${id}',${i})">Lire</button>
        ${deleteButton}
      `;
    } else if (media?.type === 'pdf') {
      const previewNode = media.thumb
        ? `<img class="gslot-image-preview" src="${media.thumb}" alt="${safeTitle}" onerror="this.closest('.gslot')?.classList.add('pdf-thumb-error')">`
        : `<canvas class="gslot-pdf-canvas" id="pdfc-${id}-${i}"></canvas>`;

      content = `
        ${previewNode}
        <div class="gslot-pdf-placeholder gslot-pdf-fallback">
          <span class="gslot-pdf-icon">📄</span>
          <span class="gslot-pdf-hint">Cliquer pour ouvrir le PDF</span>
        </div>
        <button class="gslot-media-click" type="button" aria-label="Ouvrir ${safeTitle}" onclick="openMedia('${id}',${i})"></button>
        <div class="gslot-type-badge">PDF</div>
        <div class="gslot-badge">${safeTitle}</div>
        <button class="gslot-zoom" type="button" onclick="event.stopPropagation();openMedia('${id}',${i})">Ouvrir</button>
        ${deleteButton}
      `;
    } else {
      content = MODE_EDITION
        ? `
          <div class="gslot-plus" onclick="triggerMediaInput('${id}',${i})">＋</div>
          <div class="gslot-lbl" onclick="triggerMediaInput('${id}',${i})">${safeTitle}</div>
        `
        : `<div class="gslot-lbl">${safeTitle}</div>`;
    }

    return `
      <div class="gslot" id="gs-${id}-${i}" title="${safeFileName}">
        ${content}
        ${fileInput}
      </div>
    `;
  }).join('')}</div>`;
}

function show(id, element) {
  dismissLpanelHint();

  if (/^r[1-8]$/.test(id)) id = 'realisations';

  const d = DATA[id];
  if (!d) return;

  hidePreview();

  document.querySelector('.crumb').innerHTML = `
    <span>Portfolio</span>
    <span class="sep">/</span>
    <span>${grpLabel[d.grp]}</span>
    <span class="sep">/</span>
    <b>${d.title}</b>
  `;

  document.querySelectorAll('.lp-item').forEach(item => item.classList.remove('active'));

  if (element) {
    element.classList.add('active');
  } else {
    const item = [...document.querySelectorAll('.lp-item')]
      .find(node => node.getAttribute('onclick')?.includes(`'${id}'`));

    if (item) item.classList.add('active');
  }

  const stats = d.stats.length
    ? `<div class="rp-stats">${d.stats.map(([number, label]) => `
        <div class="rp-stat">
          <span class="rp-stat-n">${number}</span>
          <span class="rp-stat-l">${label}</span>
        </div>
      `).join('')}</div>`
    : '';

  const tags = `<div class="rp-tags">${d.tags.map(group => `
    <div class="rp-trow">
      <div class="rp-tcat">${group.c}</div>
      <div class="rp-tt">
        ${group.t.map(tag => `<span class="rp-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('')}</div>`;

  const impact = d.impact
    ? `<div class="rp-impact">
        <span class="rp-impact-lbl">◈ Résultat et impact</span>
        <p class="rp-impact-text">${d.impact}</p>
      </div>`
    : '';

  document.getElementById('rp-content').innerHTML = `
    <div class="rp-sheet">
      <div class="rp-num">RÉF. ${refNum(id)}</div>
      <div class="rp-status">
        <span class="d"></span>
        ${d.period.includes('[') ? 'EN COURS' : 'RÉALISÉ'}
      </div>
    </div>

    <div class="rp-cat">${d.cat}</div>
    <h2 class="rp-title">${d.title}</h2>
    <div class="rp-period">${d.period}</div>
    <div class="rp-hr"></div>

    ${stats}

    <span class="rp-lbl">Contexte et mission</span>
    <p class="rp-text">${d.context}</p>

    ${impact}

    <div class="rp-hr"></div>
    <span class="rp-lbl">Réalisations et livrables</span>
    ${renderGallery(id, d)}

    <div class="rp-hr"></div>
    <span class="rp-lbl">Outils et méthodes</span>
    ${tags}

    <a href="mailto:dembadiarietou@gmail.com" class="rp-btn">Contacter Diariétou →</a>
  `;

  document.getElementById('rpanel').classList.add('open');
  document.getElementById('frame-right').classList.add('on');

  initPdfThumbnails(id, d);

  if (map && d.lat) {
    map.flyTo([d.lat, d.lng], d.zoom || 8, { duration: 1.1 });
  }
}

function closeRp() {
  document.getElementById('rpanel').classList.remove('open');
  document.getElementById('frame-right').classList.remove('on');
  document.querySelectorAll('.lp-item').forEach(item => item.classList.remove('active'));
  document.querySelector('.crumb').innerHTML = `
    <span>Portfolio</span><span class="sep">/</span><b>Accueil</b>
  `;

  if (map) map.flyTo([46.6, 0], 5, { duration: 1 });
}

function refNum(id) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
  }

  return String(Math.abs(hash) % 9000 + 1000);
}

// ═══ AJOUT D'IMAGES, DE VIDÉOS ET DE PDF ═══
function triggerMediaInput(id, i) {
  document.getElementById(`gi-${id}-${i}`)?.click();
}

function uploadMedia(event, id, i) {
  const file = event.target.files?.[0];
  if (!file) return;

  let type = '';

  if (file.type.startsWith('image/')) {
    type = 'image';
  } else if (file.type.startsWith('video/')) {
    type = 'video';
  } else if (file.type === 'application/pdf') {
    type = 'pdf';
  } else {
    alert('Format non pris en charge. Choisis une image, une vidéo ou un PDF.');
    event.target.value = '';
    return;
  }

  const key = id + '_' + i;
  const oldMedia = mediaCache[key];

  if (oldMedia?.objectUrl) {
    URL.revokeObjectURL(oldMedia.src);
  }

  mediaCache[key] = {
    type,
    src: URL.createObjectURL(file),
    name: file.name,
    objectUrl: true
  };

  event.target.value = '';
  show(id);
}

function deleteMedia(id, i) {
  const key = id + '_' + i;
  const media = mediaCache[key];

  if (media?.objectUrl) {
    URL.revokeObjectURL(media.src);
  }

  delete mediaCache[key];
  closeMedia();
  show(id);
}

// ═══ VISIONNEUSE AVEC DESCRIPTION DU LIVRABLE ═══
function ensureMediaDescriptionUI() {
  if (document.getElementById('lb-description')) return;

  const lightbox = document.getElementById('lightbox');
  const stage = document.getElementById('lb-stage');
  const openNew = document.getElementById('lb-open-new');

  if (!lightbox || !stage || !openNew) return;

  const layout = document.createElement('div');
  layout.id = 'lb-layout';
  layout.addEventListener('click', event => event.stopPropagation());

  const resizeHandle = document.createElement('button');
  resizeHandle.id = 'lb-resize-handle';
  resizeHandle.type = 'button';
  resizeHandle.title = 'Tirer pour redimensionner le panneau';
  resizeHandle.setAttribute(
    'aria-label',
    'Redimensionner le panneau de description'
  );
  resizeHandle.innerHTML = '<span aria-hidden="true">⋮</span>';

  const description = document.createElement('aside');
  description.id = 'lb-description';
  description.innerHTML = `
    <div class="lb-description-scroll">
      <div class="lb-open-new-zone"></div>

      <div id="lb-media-type" class="lb-media-type">
        Livrable
      </div>

      <h2 id="lb-media-title" class="lb-media-title">
        Titre du livrable
      </h2>

      <div id="lb-media-file" class="lb-media-file"></div>

      <section class="lb-info-section">
        <span class="lb-info-label">Présentation</span>
        <p id="lb-media-description" class="lb-info-text"></p>
      </section>

      <section class="lb-info-section">
        <span class="lb-info-label">Méthode et réalisation</span>
        <p id="lb-media-role" class="lb-info-text"></p>
      </section>

      <section class="lb-info-section">
        <span class="lb-info-label">Résultat et apport</span>
        <p id="lb-media-result" class="lb-info-text"></p>
      </section>

      <section id="lb-tools-section" class="lb-info-section">
        <span class="lb-info-label">Outils mobilisés</span>
        <div id="lb-media-tools" class="lb-media-tags"></div>
      </section>

      <section id="lb-methods-section" class="lb-info-section">
        <span class="lb-info-label">Méthodes clés</span>
        <div id="lb-media-methods" class="lb-media-tags"></div>
      </section>

      <section id="lb-data-section" class="lb-info-section">
        <span class="lb-info-label">Données principales</span>
        <div id="lb-media-data" class="lb-media-tags"></div>
      </section>
    </div>
  `;

  stage.parentNode.insertBefore(layout, stage);
  layout.appendChild(stage);
  layout.appendChild(resizeHandle);
  layout.appendChild(description);

  const openNewZone =
    description.querySelector('.lb-open-new-zone');

  openNew.target = '_blank';
  openNew.rel = 'noopener noreferrer';
  openNewZone.appendChild(openNew);

  try {
    const storedWidth = Number(
      localStorage.getItem('portfolio-media-panel-width')
    );

    if (Number.isFinite(storedWidth) && storedWidth >= 280) {
      layout.style.setProperty(
        '--lb-info-width',
        `${storedWidth}px`
      );
    }
  } catch (error) {
    // Le stockage local peut être désactivé dans certains navigateurs.
  }

  let startX = 0;
  let startWidth = 0;
  let currentWidth = 360;

  function getPanelLimits() {
    const layoutWidth =
      layout.getBoundingClientRect().width;

    return {
      min: 280,
      max: Math.max(
        340,
        Math.min(
          700,
          Math.round(layoutWidth * 0.58)
        )
      )
    };
  }

  function resizeDescriptionPanel(event) {
    if (
      !resizeHandle.hasPointerCapture(event.pointerId)
    ) {
      return;
    }

    const limits = getPanelLimits();

    currentWidth = Math.min(
      limits.max,
      Math.max(
        limits.min,
        startWidth + (startX - event.clientX)
      )
    );

    layout.style.setProperty(
      '--lb-info-width',
      `${Math.round(currentWidth)}px`
    );
  }

  function stopDescriptionResize(event) {
    if (
      resizeHandle.hasPointerCapture(event.pointerId)
    ) {
      resizeHandle.releasePointerCapture(
        event.pointerId
      );
    }

    document.body.classList.remove(
      'lb-is-resizing'
    );

    try {
      localStorage.setItem(
        'portfolio-media-panel-width',
        String(Math.round(currentWidth))
      );
    } catch (error) {
      // Le stockage local peut être désactivé.
    }
  }

  resizeHandle.addEventListener(
    'pointerdown',
    event => {
      if (
        window.matchMedia(
          '(max-width: 900px)'
        ).matches
      ) {
        return;
      }

      event.preventDefault();

      startX = event.clientX;
      startWidth =
        description.getBoundingClientRect().width;
      currentWidth = startWidth;

      resizeHandle.setPointerCapture(
        event.pointerId
      );

      document.body.classList.add(
        'lb-is-resizing'
      );
    }
  );

  resizeHandle.addEventListener(
    'pointermove',
    resizeDescriptionPanel
  );

  resizeHandle.addEventListener(
    'pointerup',
    stopDescriptionResize
  );

  resizeHandle.addEventListener(
    'pointercancel',
    stopDescriptionResize
  );

  resizeHandle.addEventListener(
    'dblclick',
    () => {
      currentWidth = 360;

      layout.style.setProperty(
        '--lb-info-width',
        '360px'
      );

      try {
        localStorage.setItem(
          'portfolio-media-panel-width',
          '360'
        );
      } catch (error) {
        // Le stockage local peut être désactivé.
      }
    }
  );

  const style = document.createElement('style');
  style.id = 'media-description-styles';
  style.textContent = `
    #lightbox {
      box-sizing: border-box;
      padding-top: 64px;
    }

    #lightbox [onclick*="closeMedia"],
    #lightbox .lb-close,
    #lightbox .lightbox-close,
    #lightbox .close {
      position: fixed !important;
      top: 14px !important;
      right: 16px !important;
      z-index: 10050 !important;
      min-height: 40px;
      padding: 0.65rem 1rem !important;
      border: 1px solid var(--line) !important;
      background: #202326 !important;
      color: var(--white) !important;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    }

    #lightbox [onclick*="closeMedia"]:hover,
    #lightbox .lb-close:hover,
    #lightbox .lightbox-close:hover,
    #lightbox .close:hover {
      border-color: var(--red) !important;
      color: var(--red) !important;
    }

    #lb-layout {
      --lb-info-width: 360px;

      width: min(1480px, 96vw);
      height: min(820px, calc(100vh - 86px));
      display: grid;
      grid-template-columns:
        minmax(320px, 1fr)
        12px
        var(--lb-info-width);
      gap: 0;
      background: var(--line);
      border: 1px solid var(--line);
    }

    #lb-layout #lb-stage {
      width: 100%;
      height: 100%;
      min-width: 0;
      background: #0e0f10;
    }

    #lb-resize-handle {
      position: relative;
      z-index: 5;
      width: 12px;
      height: 100%;
      padding: 0;
      border: 0;
      border-left: 1px solid var(--line);
      border-right: 1px solid var(--line);
      background: #17191b;
      color: var(--mist);
      cursor: col-resize;
      touch-action: none;
    }

    #lb-resize-handle span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
      letter-spacing: -0.2em;
      color: var(--mist);
      transition:
        color 0.2s ease,
        transform 0.2s ease;
    }

    #lb-resize-handle:hover,
    body.lb-is-resizing #lb-resize-handle {
      background: #202326;
    }

    #lb-resize-handle:hover span,
    body.lb-is-resizing #lb-resize-handle span {
      color: var(--red);
      transform:
        translate(-50%, -50%)
        scale(1.2);
    }

    body.lb-is-resizing {
      cursor: col-resize !important;
      user-select: none !important;
    }

    body.lb-is-resizing #lb-stage iframe,
    body.lb-is-resizing #lb-stage video,
    body.lb-is-resizing #lb-stage img {
      pointer-events: none !important;
    }

    #lb-description {
      min-width: 0;
      height: 100%;
      overflow: hidden;
      background: var(--ink2);
      color: var(--white);
    }

    .lb-description-scroll {
      height: 100%;
      overflow-y: auto;
      padding: 1.35rem 1.5rem 2rem;
      box-sizing: border-box;
    }

    .lb-description-scroll::-webkit-scrollbar {
      width: 6px;
    }

    .lb-description-scroll::-webkit-scrollbar-thumb {
      background: var(--ink3);
    }

    .lb-open-new-zone {
      position: sticky;
      top: -1.35rem;
      z-index: 8;
      margin:
        -1.35rem
        -1.5rem
        1.35rem;
      padding:
        1rem
        1.5rem
        1.15rem;
      border-bottom: 1px solid var(--line);
      background:
        linear-gradient(
          180deg,
          #191b1e 0%,
          #191b1e 82%,
          rgba(25, 27, 30, 0.92) 100%
        );
      box-shadow:
        0 10px 22px
        rgba(0, 0, 0, 0.2);
    }

    #lb-description #lb-open-new {
      display: none;
      width: 100%;
      min-height: 62px;
      padding: 0.85rem 1rem;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      box-sizing: border-box;
      border: 1px solid #ff566f;
      border-radius: 4px;
      background: var(--red);
      color: #ffffff;
      text-align: left;
      text-decoration: none;
      box-shadow:
        0 8px 20px
        rgba(180, 31, 58, 0.32);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;
    }

    #lb-description #lb-open-new:hover {
      transform: translateY(-2px);
      background: #d52848;
      box-shadow:
        0 12px 26px
        rgba(180, 31, 58, 0.42);
    }

    .lb-open-new-copy {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .lb-open-new-main {
      font-family:
        'IBM Plex Mono',
        monospace;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .lb-open-new-sub {
      font-family:
        'IBM Plex Sans',
        sans-serif;
      font-size: 0.65rem;
      color: rgba(255, 255, 255, 0.82);
    }

    .lb-open-new-arrow {
      flex: 0 0 auto;
      font-size: 1.4rem;
      line-height: 1;
    }

    .lb-media-type,
    .lb-info-label {
      display: block;
      font-family:
        'IBM Plex Mono',
        monospace;
      font-size: 0.52rem;
      color: var(--red);
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .lb-media-title {
      margin: 0.55rem 0 0.4rem;
      font-family:
        'IBM Plex Serif',
        serif;
      font-size: 1.55rem;
      font-style: italic;
      line-height: 1.2;
      color: var(--white);
    }

    .lb-media-file {
      padding-bottom: 1.1rem;
      border-bottom: 1px solid var(--line);
      font-family:
        'IBM Plex Mono',
        monospace;
      font-size: 0.5rem;
      color: var(--mist);
      overflow-wrap: anywhere;
    }

    .lb-info-section {
      padding: 1.1rem 0;
      border-bottom: 1px solid var(--line);
    }

    .lb-info-text {
      margin-top: 0.55rem;
      font-size: 0.78rem;
      color: var(--mist);
      line-height: 1.75;
    }

    .lb-media-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin-top: 0.65rem;
    }

    .lb-media-tag {
      padding: 0.25rem 0.55rem;
      border: 1px solid var(--ink3);
      font-family:
        'IBM Plex Mono',
        monospace;
      font-size: 0.52rem;
      color: var(--white);
    }

    @media (max-width: 900px) {
      #lightbox {
        padding-top: 58px;
      }

      #lb-layout {
        width: 96vw;
        height: calc(100vh - 72px);
        grid-template-columns: 1fr;
        grid-template-rows:
          minmax(300px, 58%)
          minmax(0, 42%);
      }

      #lb-resize-handle {
        display: none;
      }

      #lb-description {
        border-top:
          1px solid var(--line);
      }

      .lb-description-scroll {
        padding: 1.15rem;
      }

      .lb-open-new-zone {
        top: -1.15rem;
        margin:
          -1.15rem
          -1.15rem
          1.15rem;
        padding:
          0.85rem
          1.15rem
          1rem;
      }

      .lb-media-title {
        font-size: 1.25rem;
      }
    }
  `;

  document.head.appendChild(style);
}

function resetMediaViewer() {
  ensureMediaDescriptionUI();

  const image = document.getElementById('lb-img');
  const video = document.getElementById('lb-video');
  const pdf = document.getElementById('lb-pdf');
  const openNew = document.getElementById('lb-open-new');

  image.style.display = 'none';
  image.removeAttribute('src');

  video.pause();
  video.style.display = 'none';
  video.removeAttribute('src');
  video.load();

  pdf.style.display = 'none';
  pdf.src = 'about:blank';

  openNew.style.display = 'none';
  openNew.href = '#';
}

function fillMediaDescription(id, index, media) {
  ensureMediaDescriptionUI();

  const info = getMediaInfo(id, index);

  const typeLabels = {
    image: 'Carte ou image',
    video: 'Vidéo',
    pdf: 'Document PDF'
  };

  document
    .getElementById('lb-media-type')
    .textContent =
      typeLabels[media.type] ||
      'Livrable';

  document
    .getElementById('lb-media-title')
    .textContent =
      info.title ||
      media.name ||
      'Livrable';

  document
    .getElementById('lb-media-file')
    .textContent =
      media.name &&
      media.name !== info.title
        ? `Fichier : ${media.name}`
        : '';

  document
    .getElementById('lb-media-description')
    .textContent =
      info.description ||
      'Description à compléter.';

  document
    .getElementById('lb-media-role')
    .textContent =
      info.role ||
      'Méthode et réalisation à compléter.';

  document
    .getElementById('lb-media-result')
    .textContent =
      info.result ||
      'Résultat à compléter.';

  function renderMediaTags(
    sectionId,
    containerId,
    values
  ) {
    const section =
      document.getElementById(sectionId);

    const container =
      document.getElementById(containerId);

    const cleanValues =
      Array.isArray(values)
        ? values.filter(Boolean)
        : [];

    section.style.display =
      cleanValues.length
        ? 'block'
        : 'none';

    container.innerHTML = cleanValues
      .map(value => `
        <span class="lb-media-tag">
          ${escapeHtml(value)}
        </span>
      `)
      .join('');
  }

  renderMediaTags(
    'lb-tools-section',
    'lb-media-tools',
    info.tools
  );

  renderMediaTags(
    'lb-methods-section',
    'lb-media-methods',
    info.methods
  );

  renderMediaTags(
    'lb-data-section',
    'lb-media-data',
    info.data
  );
}

function openMedia(id, i) {
  const media = getMedia(id, i);
  if (!media) return;

  ensureMediaDescriptionUI();

  const lightbox =
    document.getElementById('lightbox');
  const image =
    document.getElementById('lb-img');
  const video =
    document.getElementById('lb-video');
  const pdf =
    document.getElementById('lb-pdf');
  const openNew =
    document.getElementById('lb-open-new');

  resetMediaViewer();
  fillMediaDescription(id, i, media);

  lightbox.classList.add('open');

  const mediaLabel = {
    image: 'l’image',
    video: 'la vidéo',
    pdf: 'le PDF'
  }[media.type] || 'le livrable';

  openNew.href = media.src;
  openNew.target = '_blank';
  openNew.rel = 'noopener noreferrer';
  openNew.innerHTML = `
    <span class="lb-open-new-copy">
      <span class="lb-open-new-main">
        Ouvrir en grand
      </span>
      <span class="lb-open-new-sub">
        Afficher ${mediaLabel} dans un nouvel onglet
      </span>
    </span>

    <span
      class="lb-open-new-arrow"
      aria-hidden="true"
    >
      ↗
    </span>
  `;
  openNew.style.display = 'flex';

  if (media.type === 'image') {
    image.src = media.src;
    image.alt =
      getMediaInfo(id, i).title ||
      media.name ||
      'Image du projet';
    image.style.display = 'block';
    return;
  }

  if (media.type === 'video') {
    video.src = media.src;
    video.style.display = 'block';

    video.play().catch(() => {
      // Certains navigateurs bloquent
      // la lecture automatique.
    });

    return;
  }

  if (media.type === 'pdf') {
    pdf.src =
      media.src +
      '#toolbar=1&navpanes=0&scrollbar=1';

    pdf.style.display = 'block';
  }
}

function closeMedia() {
  document.getElementById('lightbox').classList.remove('open');
  resetMediaViewer();
}


// ═══════════════════════════════════════════════════════════
// PANNEAU DE PROJET REDIMENSIONNABLE
// Tirer le bord gauche du panneau pour l’agrandir ou le réduire.
// Un double-clic rétablit la largeur d’origine.
// ═══════════════════════════════════════════════════════════

function ensureResizableProjectPanel() {
  const panel = document.getElementById('rpanel');

  if (
    !panel ||
    document.getElementById('rp-resize-handle')
  ) {
    return;
  }

  const handle = document.createElement('button');

  handle.id = 'rp-resize-handle';
  handle.type = 'button';
  handle.title =
    'Tirer pour redimensionner le panneau';
  handle.setAttribute(
    'aria-label',
    'Redimensionner le panneau du projet'
  );

  handle.innerHTML = `
    <span aria-hidden="true">⋮</span>
  `;

  panel.appendChild(handle);

  const storageKey =
    'portfolio-project-panel-width';

  let startX = 0;
  let startWidth = 0;
  let currentWidth = 0;

  function getLimits() {
    const minWidth = 390;

    const maxWidth = Math.max(
      minWidth,
      Math.min(
        920,
        window.innerWidth - 430
      )
    );

    return {
      minWidth,
      maxWidth
    };
  }

  function applyWidth(width, save = false) {
    const limits = getLimits();

    currentWidth = Math.min(
      limits.maxWidth,
      Math.max(
        limits.minWidth,
        Math.round(width)
      )
    );

    panel.style.width =
      `${currentWidth}px`;

    panel.classList.add(
      'rp-user-resized'
    );

    if (save) {
      try {
        localStorage.setItem(
          storageKey,
          String(currentWidth)
        );
      } catch (error) {
        // Le stockage local peut être désactivé.
      }
    }

    if (map) {
      window.requestAnimationFrame(
        () => map.invalidateSize()
      );
    }
  }

  function restoreStoredWidth() {
    try {
      const storedWidth = Number(
        localStorage.getItem(storageKey)
      );

      if (
        Number.isFinite(storedWidth) &&
        storedWidth >= 390
      ) {
        applyWidth(storedWidth);
      }
    } catch (error) {
      // Le stockage local peut être désactivé.
    }
  }

  function resizePanel(event) {
    if (
      !handle.hasPointerCapture(
        event.pointerId
      )
    ) {
      return;
    }

    const width =
      startWidth +
      (startX - event.clientX);

    applyWidth(width);
  }

  function stopResize(event) {
    if (
      handle.hasPointerCapture(
        event.pointerId
      )
    ) {
      handle.releasePointerCapture(
        event.pointerId
      );
    }

    document.body.classList.remove(
      'rp-is-resizing'
    );

    applyWidth(currentWidth, true);
  }

  handle.addEventListener(
    'pointerdown',
    event => {
      if (
        window.matchMedia(
          '(max-width: 900px)'
        ).matches
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      startX = event.clientX;
      startWidth =
        panel.getBoundingClientRect().width;
      currentWidth = startWidth;

      handle.setPointerCapture(
        event.pointerId
      );

      document.body.classList.add(
        'rp-is-resizing'
      );
    }
  );

  handle.addEventListener(
    'pointermove',
    resizePanel
  );

  handle.addEventListener(
    'pointerup',
    stopResize
  );

  handle.addEventListener(
    'pointercancel',
    stopResize
  );

  handle.addEventListener(
    'click',
    event => {
      event.preventDefault();
      event.stopPropagation();
    }
  );

  handle.addEventListener(
    'dblclick',
    event => {
      event.preventDefault();
      event.stopPropagation();

      panel.style.removeProperty('width');
      panel.classList.remove(
        'rp-user-resized'
      );

      try {
        localStorage.removeItem(
          storageKey
        );
      } catch (error) {
        // Le stockage local peut être désactivé.
      }

      if (map) {
        window.requestAnimationFrame(
          () => map.invalidateSize()
        );
      }
    }
  );

  window.addEventListener(
    'resize',
    () => {
      if (
        panel.classList.contains(
          'rp-user-resized'
        )
      ) {
        applyWidth(currentWidth);
      }
    }
  );

  const style =
    document.createElement('style');

  style.id =
    'resizable-project-panel-style';

  style.textContent = `
    #rpanel {
      box-sizing: border-box;
    }

    #rp-resize-handle {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 80;
      width: 15px;
      height: 100%;
      padding: 0;
      border: 0;
      border-right:
        1px solid transparent;
      background: transparent;
      color: var(--mist);
      cursor: col-resize;
      touch-action: none;
      opacity: 0;
      pointer-events: none;
      transition:
        opacity 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
    }

    #rpanel.open #rp-resize-handle {
      opacity: 1;
      pointer-events: auto;
    }

    #rp-resize-handle::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: rgba(255, 255, 255, 0.08);
      transition: background 0.2s ease;
    }

    #rp-resize-handle span {
      position: absolute;
      top: 50%;
      left: 6px;
      transform:
        translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12px;
      height: 72px;
      border:
        1px solid var(--ink3);
      border-radius: 0 5px 5px 0;
      background: #202326;
      font-size: 1rem;
      line-height: 1;
      color: var(--mist);
      box-shadow:
        3px 0 12px
        rgba(0, 0, 0, 0.2);
      transition:
        color 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
    }

    #rp-resize-handle:hover,
    body.rp-is-resizing
    #rp-resize-handle {
      background:
        linear-gradient(
          90deg,
          rgba(180, 31, 58, 0.16),
          transparent
        );
      border-right-color:
        rgba(180, 31, 58, 0.35);
    }

    #rp-resize-handle:hover::before,
    body.rp-is-resizing
    #rp-resize-handle::before {
      background: var(--red);
    }

    #rp-resize-handle:hover span,
    body.rp-is-resizing
    #rp-resize-handle span {
      border-color: var(--red);
      background: #2b2023;
      color: var(--red);
    }

    body.rp-is-resizing {
      cursor: col-resize !important;
      user-select: none !important;
    }

    body.rp-is-resizing #map,
    body.rp-is-resizing iframe,
    body.rp-is-resizing video,
    body.rp-is-resizing img {
      pointer-events: none !important;
    }

    @media (max-width: 900px) {
      #rp-resize-handle {
        display: none;
      }

      #rpanel.rp-user-resized {
        width: auto !important;
      }
    }
  `;

  document.head.appendChild(style);

  restoreStoredWidth();
}

function initializePortfolioUI() {
  normalizeRealisationsMenu();
  ensureRealisationsGalleryStyle();
  ensureMediaDescriptionUI();
  ensureResizableProjectPanel();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolioUI);
} else {
  initializePortfolioUI();
}


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMedia();
    closeRp();
  }
});
