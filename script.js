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
const MODE_EDITION = true;

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

  short: `Modernisation de six processus SIG afin de remplacer progressivement les anciens traitements par une organisation fondée sur QGIS, PostGIS et Lizmap.`,

  context: `Le stage de fin d’études mené au SDIS de Maine-et-Loire porte sur la modernisation de six processus SIG auparavant réalisés principalement avec GeoConcept. L’objectif consiste à construire une organisation plus homogène, automatisée et durable autour de QGIS, PostGIS et Lizmap. Les plans muraux et les atlas restent des productions imprimées ou PDF, tandis que la sectorisation, les analyses spatiales, les isochrones et les données sur les engins peuvent être consultés dans le WebSIG.`,

  impact: `La mission a conduit à la conception d’un fond de carte vectoriel mutualisé, à l’automatisation de la production des atlas et à la structuration de plusieurs référentiels opérationnels. Cette organisation réduit les opérations manuelles, centralise les données et facilite l’actualisation ainsi que la diffusion des productions cartographiques.`,

  stats: [],

  tags: [
    {
      c: 'Logiciels',
      t: ['QGIS', 'Lizmap', 'GeoConcept']
    },
    {
      c: 'Bases de données',
      t: ['PostgreSQL', 'PostGIS']
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
        'Analyse spatiale',
        'WebSIG'
      ]
    }
  ],
  imgs: [
    'Fond de carte et plans muraux',
    'Atlas opérationnels automatisés',
    'Sectorisation opérationnelle',
    'Analyses spatiales',
    'Isochrones et accessibilité',
    'Engins et WebSIG Lizmap',
    'Rapport de stage'
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

    period: '2025–2026',

    short: `Étude exploratoire visant à identifier comment l’IA agentique peut automatiser certaines tâches géomarketing tout en maintenant le contrôle et l’expertise humaine.`,

    context: `Le projet réalisé avec Publicis Connected Media porte sur l’intégration de l’IA agentique dans les processus géomarketing. L’étude s’appuie sur l’analyse du fonctionnement du pôle, de ses principales étapes de production et des difficultés rencontrées dans le traitement des données, l’expertise marché et les études clients.`,

    impact: `L’étude a permis d’identifier les tâches pouvant être automatisées ou assistées, de comparer plusieurs solutions techniques et de proposer une architecture combinant orchestration, préparation des données et agents spécialisés. Une expérimentation a également permis d’évaluer l’utilisation d’un agent de traitement de données dans BigQuery. Le résultat constitue une feuille de route méthodologique, et non encore un système déployé en production.`,

    stats: [],

    tags: [
      {
        c: 'Méthodes',
        t: [
          'Analyse des besoins',
          'Benchmark',
          'Grille multicritère',
          'Analyse SWOT'
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
          'Automatisation',
          'Ingénierie des données'
        ]
      }
    ],
    imgs: [
      'Grille de décision des solutions agentiques',
      'Expérimentation BigQuery'
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
        t: ['Waze for Cities', 'JSON', 'BAAC']
      }
    ],
    imgs: [
      'Analyse territoriale des données Waze'
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
        t: ['R', 'QGIS', 'Flourish', 'Google Forms']
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
        t: ['QGIS', 'R', 'SQL', 'Canva', 'Flourish']
      },
      {
        c: 'Méthodes',
        t: [
          'Open data',
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
function mediaItem(title, description, role, result, tools = []) {
  return { title, description, role, result, tools };
}

function placeholderMedia(projectTitle, count = 3) {
  return Array.from({ length: count }, (_, index) => mediaItem(
    `${projectTitle} — livrable ${index + 1}`,
    '[Décris ce que montre cette carte, cette vidéo ou ce PDF.]',
    '[Décrire précisément la méthode et la réalisation.]',
    '[Indique le résultat obtenu et l’intérêt du livrable.]',
    ['À compléter']
  ));
}

const MEDIA_DETAILS = {
 sdis: [
  mediaItem(
    'Fond de carte vectoriel et plans muraux',

    `Création d’un fond de carte vectoriel commun destiné à servir de base aux plans muraux et aux atlas opérationnels. Le fond rassemble les principales informations nécessaires à la lecture du territoire : routes, communes, bâtiments, hydrographie, végétation, voies ferrées et données métiers.`,

    `La réalisation repose sur la sélection et l’organisation des couches, la définition de leur ordre d’affichage, la création de la symbologie, le travail des étiquettes et l’adaptation du niveau de détail aux différentes échelles cartographiques.`,

    `Le SDIS dispose d’une base cartographique homogène, réutilisable et plus facile à actualiser pour produire de nouveaux plans muraux et de nouveaux atlas.`,

    [
      'QGIS',
      'BD TOPO',
      'Symbologie',
      'Étiquetage',
      'Mise en page'
    ]
  ),

  mediaItem(
    'Automatisation des atlas opérationnels',

    `La conception des atlas était auparavant réalisée dans GeoConcept avec plusieurs opérations manuelles. Le projet consiste à migrer cette production vers QGIS et à automatiser les traitements nécessaires à la génération des atlas communaux.`,

    `La chaîne de production comprend la conception des mises en page, la préparation des expressions de l’atlas et l’automatisation des filtres, des emprises, des numéros de pages, des informations communales, des exports et de l’assemblage des PDF.`,

    `La nouvelle chaîne permet de produire des atlas plus homogènes et reproductibles tout en limitant les modifications manuelles pour chaque commune.`,

    [
      'QGIS',
      'Atlas QGIS',
      'Model Builder',
      'Python',
      'PyPDF'
    ]
  ),

  mediaItem(
    'Centralisation de la sectorisation opérationnelle',

    `Ce processus vise à regrouper les informations permettant de connaître le découpage opérationnel du territoire et le rattachement des secteurs aux différents centres d’incendie et de secours.`,

    `La réalisation repose sur la structuration des couches de sectorisation et l’organisation des informations nécessaires à leur consultation ainsi qu’à leur mise à jour.`,

    `La centralisation permet de disposer d’une référence unique pour comprendre les différents découpages territoriaux et limiter la dispersion des informations.`,

    [
      'QGIS',
      'PostGIS',
      'Structuration des données',
      'Sectorisation'
    ]
  ),

  mediaItem(
    'Analyses spatiales d’aide à la décision',

    `Réalisation de traitements cartographiques permettant d’analyser des phénomènes territoriaux et opérationnels à partir de plusieurs sources de données.`,

    `La méthode associe préparation des données, traitements spatiaux et conception de représentations adaptées, notamment des analyses multicritères, des cartes de densité et des cartes thématiques.`,

    `Ces analyses transforment des données complexes en informations cartographiques plus lisibles et exploitables pour accompagner la réflexion du service.`,

    [
      'QGIS',
      'Analyse multicritère',
      'Cartographie thématique',
      'Analyse spatiale'
    ]
  ),

  mediaItem(
    'Calcul et représentation des isochrones',

    `Les isochrones permettent de représenter les zones accessibles depuis un point de départ selon un temps ou une distance donnée. Elles peuvent notamment servir à étudier la couverture et l’accessibilité du territoire.`,

    `La méthode comprend la préparation des points de départ, le paramétrage des calculs et la représentation cartographique des différentes zones d’accessibilité.`,

    `Le résultat permet de comparer visuellement les territoires couverts et d’identifier les secteurs présentant des différences d’accessibilité.`,

    [
      'QGIS',
      'Analyse de réseau',
      'Isochrones',
      'Analyse territoriale'
    ]
  ),

  mediaItem(
    'Centralisation des engins et diffusion dans Lizmap',

    `Ce volet vise à centraliser les informations relatives aux engins et à rendre consultables dans une même interface les principales données SIG utiles aux utilisateurs. La sectorisation, les analyses spatiales, les isochrones et les données sur les engins peuvent ainsi être diffusées dans le WebSIG Lizmap.`,

    `La diffusion repose sur la préparation des projets QGIS, l’organisation des groupes de couches, la structuration des informations affichées et le paramétrage de leur publication dans Lizmap.`,

    `Les utilisateurs peuvent consulter les données depuis un navigateur, sans avoir à ouvrir directement QGIS ni à rechercher les informations dans plusieurs fichiers différents.`,

    [
      'QGIS',
      'Lizmap',
      'PostGIS',
      'WebSIG',
      'Centralisation des données'
    ]
  )
  ,
  mediaItem(
    'Rapport de stage — modernisation des processus SIG',

    `Ce rapport présente le contexte de la mission, les besoins identifiés, la démarche de modernisation et les résultats obtenus pour les six processus SIG étudiés au SDIS de Maine-et-Loire.`,

    `Le document structure les différentes étapes du projet : analyse de l’existant, organisation des données, conception du fond cartographique, automatisation des atlas, préparation des projets WebSIG et formalisation des méthodes.`,

    `Le rapport fournit une synthèse complète de la mission, des choix techniques et des livrables réalisés. Une version publique peut être utilisée afin de préserver les informations internes ou sensibles.`,

    [
      'Rapport de stage',
      'Méthodologie',
      'QGIS',
      'PostGIS',
      'Lizmap',
      'Python'
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
        'Diagnostic territorial',
        'Analyse multitemporelle',
        'Planification stratégique',
        'Cartographie de synthèse'
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
        'Diagnostic territorial',
        'Cartographie des équipements',
        'Analyse urbaine'
      ]
    )
  ],

  publicis: [
    mediaItem(
      'Grille de décision des solutions agentiques',

      `Cette grille compare plusieurs solutions susceptibles d’être intégrées aux processus géomarketing : plateformes de données, outils d’orchestration, frameworks agentiques et solutions de développement sur mesure.`,

      `Les solutions ont été évaluées selon des critères techniques et organisationnels : performance, connectivité, facilité de déploiement, sécurité, gouvernance, capacité d’automatisation et maintien du contrôle humain. Une pondération permet de comparer objectivement les différentes options.`,

      `L’analyse montre qu’aucune solution unique ne couvre l’ensemble des besoins. L’architecture la plus pertinente repose sur une combinaison de technologies spécialisées, articulant traitement des données, orchestration et agents métiers.`,

      [
        'Analyse multicritère',
        'Grille de décision',
        'Benchmark',
        'SWOT',
        'BigQuery',
        'n8n',
        'LangGraph'
      ]
    ),

    mediaItem(
      'Expérimentation d’un agent de traitement de données dans BigQuery',

      `Cette expérimentation évalue la capacité d’un agent intégré à BigQuery à analyser la structure d’un jeu de données, à identifier certaines anomalies et à proposer des contrôles adaptés.`,

      `Le test repose sur l’importation d’un jeu de données, l’examen de son schéma, la formulation de requêtes et la comparaison entre les résultats produits automatiquement et les vérifications attendues.`,

      `L’expérimentation confirme l’intérêt de l’assistance agentique pour accélérer l’exploration et le contrôle initial des données. Elle montre également la nécessité de conserver une validation humaine pour garantir la fiabilité des traitements et des interprétations.`,

      [
        'BigQuery',
        'IA agentique',
        'Data quality',
        'Expérimentation',
        'Contrôle des données'
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
        'JSON',
        'Leaflet',
        'Chart.js',
        'Webmapping'
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
        'ACM',
        'CAH',
        'Analyse multicritère',
        'Prospective territoriale'
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
        'SQL',
        'Open data',
        'Cartographie thématique',
        'Datavisualisation',
        'Reproductibilité'
      ]
    )
  ],

  realisations: [
    mediaItem(
      'Tramway de Bordeaux : quelles stations concentrent le plus d’équipements ?',

      `Cette carte analyse l’accessibilité des équipements autour des stations du tramway de Bordeaux Métropole. Elle croise le réseau de transport, la fréquentation des arrêts et les équipements accessibles dans un rayon de 500 mètres afin d’identifier les stations occupant une place centrale dans la vie urbaine.`,

      `La réalisation associe la préparation des données du réseau et des équipements, des traitements de proximité et une représentation combinant carte, graphiques, chiffres clés et hiérarchisation des stations.`,

      `La réalisation permet de comparer les lignes et de repérer les stations disposant de la plus forte concentration d’équipements, notamment Gambetta, Grand Théâtre et Sainte-Catherine.`,

      ['QGIS', 'Données GTFS', 'Analyse de proximité', 'Cartographie des transports', 'Datavisualisation']
    ),

    mediaItem(
      'Émissions résidentielles et densité de population en Nouvelle-Aquitaine',

      `Cette analyse bivariée croise les émissions résidentielles de gaz à effet de serre par habitant avec la densité de population des communes de Nouvelle-Aquitaine. Elle cherche à déterminer si les territoires les plus densément peuplés sont également les plus émetteurs.`,

      `La méthode repose sur la jointure des données de l’ADEME et de l’INSEE aux communes, la discrétisation des deux indicateurs en trois classes et la construction d’une légende bivariée comportant neuf combinaisons.`,

      `La carte révèle des situations territoriales contrastées. Certains espaces cumulent densité et émissions élevées, tandis que Bordeaux présente une forte densité mais des émissions résidentielles relativement modérées.`,

      ['QGIS', 'Cartographie bivariée', 'Analyse environnementale', 'ADEME', 'INSEE']
    ),

    mediaItem(
      'Couverture numérique : un script reproductible pour tous les départements',

      `Cette réalisation repose sur un script Python paramétrable permettant d’étudier la couverture numérique d’un département. Il produit une carte de la part des locaux raccordables à la fibre optique, une carte de la couverture territoriale en 5G et une synthèse bivariée croisant les deux indicateurs.`,

      `La chaîne de traitement Python couvre l’importation des données, la sélection du département, la gestion des projections, la classification des indicateurs, la création des palettes, la génération des cartes simples et la construction de la carte bivariée.`,

      `La méthode n’est pas limitée à l’Isère. En modifiant le paramètre du département, le même traitement peut être relancé pour produire automatiquement les cartes FTTH et 5G de tout département disposant des données nécessaires.`,

      ['Python', 'GeoPandas', 'Matplotlib', 'Contextily', 'Automatisation', 'Cartographie reproductible']
    ),

    mediaItem(
      'Boulodromes, gymnases et profils d’âge : une lecture par cartogrammes',

      `Cette étude confronte la répartition des boulodromes et des salles multisports avec celle des jeunes de 15 à 29 ans et des personnes âgées de 60 à 74 ans. Elle combine une représentation bivariée des profils démographiques avec une déformation des EPCI selon leur niveau d’équipement.`,

      `La méthode comprend la préparation des données, la classification des variables, la création de neuf catégories bivariées et la réalisation de cartogrammes représentant l’offre d’équipements sportifs.`,

      `L’analyse permet de dépasser certains clichés sur les pratiques sportives. Elle fait notamment ressortir une présence relative importante des boulodromes dans plusieurs territoires peu peuplés, au-delà des grandes métropoles généralement associées à cette pratique.`,

      ['QGIS', 'Cartogramme', 'Cartographie bivariée', 'Quantiles', 'Analyse démographique']
    ),

    mediaItem(
      'Évolution du taux de chômage en France par EPCI, de 2006 à 2021',

      `Cette série cartographique présente l’évolution annuelle du taux de chômage à l’échelle des intercommunalités françaises entre 2006 et 2021.`,

      `La série repose sur la préparation des données, la définition d’une classification commune et la production automatisée des seize cartes nécessaires à la comparaison temporelle.`,

      `La représentation en petits multiples permet de suivre rapidement les périodes de hausse et de diminution du chômage, tout en observant les contrastes territoriaux persistants entre les EPCI.`,

      ['R', 'Cartographie temporelle', 'Petits multiples', 'Analyse statistique', 'INSEE']
    ),

    mediaItem(
      'Où vont travailler les habitants des Pays de la Loire ?',

      `Cette carte représente les déplacements domicile-travail entre les communes des Pays de la Loire. L’épaisseur des lignes indique l’intensité des flux, tandis que les cercles représentent le nombre d’entreprises actives dans chaque commune.`,

      `La réalisation repose sur la préparation de la matrice origine-destination, la génération des liaisons entre les communes et la hiérarchisation visuelle des flux, des pôles d’emploi et des principaux indicateurs.`,

      `La carte met en évidence le rôle structurant de Nantes, Angers et Le Mans ainsi que l’organisation multipolaire des déplacements professionnels dans la région.`,

      ['QGIS', 'Carte de flux', 'Matrice origine-destination', 'Analyse des mobilités', 'INSEE']
    ),

    mediaItem(
      'Urbanisation et recul des milieux naturels dans les Niayes entre 1984 et 2024',

      `Cette étude de télédétection analyse l’évolution de la zone humide des Niayes sur une période de quarante ans à partir d’images satellitaires Landsat. Elle associe les indices NDVI et NDWI, une classification de l’occupation du sol et une détection des changements.`,

      `La méthode comprend le traitement des images satellitaires de 1984 et 2024, le calcul des indices de végétation et d’humidité, la classification de l’occupation du sol et la comparaison des deux périodes.`,

      `Les résultats montrent une diminution de la couverture végétale, une progression des espaces urbanisés, une fragmentation des zones agricoles et des transformations importantes dans une grande partie de la zone humide.`,

      ['QGIS', 'Télédétection', 'Landsat', 'NDVI', 'NDWI', 'Classification']
    ),

    mediaItem(
      'Nantes à l’échelle du bâtiment : densité de population et revenus des ménages',

      `Cette réalisation affine la lecture des données démographiques en répartissant la population à l’échelle des bâtiments résidentiels. Une seconde carte croise cette estimation avec les revenus des ménages afin de faire apparaître les contrastes internes à la ville de Nantes.`,

      `La réalisation repose sur la préparation des données de l’INSEE et de la BD TOPO, la sélection des bâtiments résidentiels, la ventilation spatiale de la population et la conception des deux représentations finales.`,

      `La méthode permet de dépasser les limites des statistiques agrégées à des mailles trop larges et de visualiser plus précisément les secteurs denses ainsi que les différences de revenus à l’intérieur de la ville.`,

      ['QGIS', 'Ventilation spatiale', 'BD TOPO', 'INSEE', 'Analyse démographique']
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
    ['À compléter']
  );
}


// ═══ INTRO ═══
function dispatch(){
  enter();
}

function enter(){
  document.getElementById('intro').classList.add('gone');
  initMap();
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

// Images intégrées directement dans DATA avec imgSrc.
Object.entries(DATA).forEach(([id, d]) => {
  if (!Array.isArray(d.imgSrc)) return;

  d.imgSrc.forEach((src, i) => {
    if (!src) return;

    mediaCache[id + '_' + i] = {
      type: 'image',
      src,
      name: getMediaInfo(id, i).title || d.imgs?.[i] || 'Image'
    };
  });
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
          preload="auto"
          onloadedmetadata="prepareVideoPreview(this)"
        ></video>
        <button class="gslot-media-click" type="button" aria-label="Lire ${safeTitle}" onclick="openMedia('${id}',${i})"></button>
        <div class="gslot-play">▶</div>
        <div class="gslot-type-badge">VIDÉO</div>
        <div class="gslot-badge">${safeTitle}</div>
        <button class="gslot-zoom" type="button" onclick="event.stopPropagation();openMedia('${id}',${i})">Lire</button>
        ${deleteButton}
      `;
    } else if (media?.type === 'pdf') {
      content = `
        <iframe
          class="gslot-pdf-preview"
          src="${media.src}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0"
          title="Aperçu de ${safeTitle}"
          tabindex="-1"
        ></iframe>
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

  const description = document.createElement('aside');
  description.id = 'lb-description';
  description.innerHTML = `
    <div class="lb-description-scroll">
      <div id="lb-media-type" class="lb-media-type">Livrable</div>
      <h2 id="lb-media-title" class="lb-media-title">Titre du livrable</h2>
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

      <section class="lb-info-section">
        <span class="lb-info-label">Outils utilisés</span>
        <div id="lb-media-tools" class="lb-media-tools"></div>
      </section>
    </div>
  `;

  stage.parentNode.insertBefore(layout, stage);
  layout.appendChild(stage);
  layout.appendChild(description);
  description.querySelector('.lb-description-scroll').appendChild(openNew);

  const style = document.createElement('style');
  style.id = 'media-description-styles';
  style.textContent = `
    #lb-layout {
      width: min(1380px, 94vw);
      height: min(790px, 84vh);
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
      gap: 1px;
      background: var(--line);
      border: 1px solid var(--line);
    }

    #lb-layout #lb-stage {
      width: 100%;
      height: 100%;
      min-width: 0;
      background: #0e0f10;
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
      padding: 2rem 1.5rem;
    }

    .lb-description-scroll::-webkit-scrollbar { width: 6px; }
    .lb-description-scroll::-webkit-scrollbar-thumb { background: var(--ink3); }

    .lb-media-type,
    .lb-info-label {
      display: block;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.52rem;
      color: var(--red);
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .lb-media-title {
      margin: 0.55rem 0 0.4rem;
      font-family: 'IBM Plex Serif', serif;
      font-size: 1.55rem;
      font-style: italic;
      line-height: 1.2;
      color: var(--white);
    }

    .lb-media-file {
      padding-bottom: 1.1rem;
      border-bottom: 1px solid var(--line);
      font-family: 'IBM Plex Mono', monospace;
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

    .lb-media-tools {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin-top: 0.65rem;
    }

    .lb-media-tool {
      padding: 0.25rem 0.55rem;
      border: 1px solid var(--ink3);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.52rem;
      color: var(--white);
    }

    #lb-description #lb-open-new {
      width: 100%;
      margin-top: 1.25rem;
      text-align: center;
      box-sizing: border-box;
    }

    @media (max-width: 900px) {
      #lb-layout {
        width: 96vw;
        height: 88vh;
        grid-template-columns: 1fr;
        grid-template-rows: minmax(300px, 58%) minmax(0, 42%);
      }

      #lb-description { border-top: 1px solid var(--line); }
      .lb-description-scroll { padding: 1.25rem; }
      .lb-media-title { font-size: 1.25rem; }
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

  document.getElementById('lb-media-type').textContent =
    typeLabels[media.type] || 'Livrable';

  document.getElementById('lb-media-title').textContent =
    info.title || media.name || 'Livrable';

  document.getElementById('lb-media-file').textContent =
    media.name && media.name !== info.title ? `Fichier : ${media.name}` : '';

  document.getElementById('lb-media-description').textContent =
    info.description || 'Description à compléter.';

  document.getElementById('lb-media-role').textContent =
    info.role || 'Méthode et réalisation à compléter.';

  document.getElementById('lb-media-result').textContent =
    info.result || 'Résultat à compléter.';

  const tools = Array.isArray(info.tools) && info.tools.length
    ? info.tools
    : ['À compléter'];

  document.getElementById('lb-media-tools').innerHTML = tools
    .map(tool => `<span class="lb-media-tool">${escapeHtml(tool)}</span>`)
    .join('');
}

function openMedia(id, i) {
  const media = getMedia(id, i);
  if (!media) return;

  ensureMediaDescriptionUI();

  const lightbox = document.getElementById('lightbox');
  const image = document.getElementById('lb-img');
  const video = document.getElementById('lb-video');
  const pdf = document.getElementById('lb-pdf');
  const openNew = document.getElementById('lb-open-new');

  resetMediaViewer();
  fillMediaDescription(id, i, media);
  lightbox.classList.add('open');

  if (media.type === 'image') {
    image.src = media.src;
    image.alt = getMediaInfo(id, i).title || media.name || 'Image du projet';
    image.style.display = 'block';
    return;
  }

  if (media.type === 'video') {
    video.src = media.src;
    video.style.display = 'block';
    video.play().catch(() => {
      // Certains navigateurs bloquent la lecture automatique.
    });
    return;
  }

  if (media.type === 'pdf') {
    pdf.src = media.src + '#toolbar=1etnavpanes=0etscrollbar=1';
    pdf.style.display = 'block';
    openNew.href = media.src;
    openNew.style.display = 'inline-block';
  }
}

function closeMedia() {
  document.getElementById('lightbox').classList.remove('open');
  resetMediaViewer();
}

function initializePortfolioUI() {
  normalizeRealisationsMenu();
  ensureRealisationsGalleryStyle();
  ensureMediaDescriptionUI();
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