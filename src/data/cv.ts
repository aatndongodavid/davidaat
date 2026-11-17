// Contenu du portfolio, repris du CV « CV_AAT_NDONGO_David_Meilleur.pdf ».
// Pour mettre le site à jour, modifier ce fichier : toutes les sections s'en servent.
import type { ImageMetadata } from 'astro';
import mapebe from '../assets/gemula/mapebe.webp';
import atlas from '../assets/gemula/atlas-dashboard.webp';
import gemulaLearn from '../assets/gemula/gemula-learn.webp';
import gemulaMailer from '../assets/gemula/gemula-mailer.webp';
import socooca from '../assets/gemula/socooca-pk.webp';
import maternelle from '../assets/images/maternelle-connect.png';
import vibeshield from '../assets/images/vibeshield.png';
import dames from '../assets/images/dames.jpeg';
import goodDeal from '../assets/images/magnific.png';
import predict from '../assets/images/predict.png';

const GH = 'https://github.com/aatndongodavid';

export const identity = {
  firstName: 'David Meilleur',
  lastName: 'AAT NDONGO',
  fullName: 'AAT NDONGO David Meilleur',
  title: 'Data Scientist & AI Engineer',
  role: 'Fondateur de Gemula',
  location: 'Douala, Cameroun',
  email: 'meilleurd2001@gmail.com',
  phones: [
    { label: '+237 697 483 960', href: 'tel:+237697483960' },
    { label: '+237 682 375 573', href: 'tel:+237682375573' },
  ],
  linkedin: 'https://www.linkedin.com/in/david-meilleur-aat-ndongo',
  github: GH,
  gemula: 'https://gemula.org',
  cv: '/documents/CV_AAT_NDONGO_David_Meilleur.pdf',
  summary:
    "Élève-ingénieur en Master Recherche Science des Données & IA à l'ENSP de Douala, je conçois des solutions intelligentes de bout en bout : analyse du besoin, modélisation, développement et déploiement.",
  summaryMore:
    "J'allie un socle en génie électrique et informatique industrielle, une pratique avancée de Python et une expérience de terrain en relation client et en design.",
  seeking:
    'Je recherche un stage, une alternance ou un poste junior en Data Science, ingénierie IA ou ingénierie logicielle.',
};

export const stats = [
  { value: '8', label: 'talents actifs chez Gemula' },
  { value: '7', label: 'projets livrés' },
  { value: '11', label: 'personnes coordonnées' },
  { value: '12', label: 'projets techniques majeurs' },
];

export const gemula = {
  tagline: 'Là où le talent devient un impact.',
  intro:
    "Collectif d'élèves ingénieurs et de chercheurs basé à Douala, que j'ai fondé et que je dirige depuis avril 2026 (ex-DATAIKÔS).",
  domains: [
    'Data Science & IA',
    'Développement logiciel et web',
    'Ingénierie des données',
    'Design UI/UX',
    'Innovation et automatisation',
  ],
  highlights: [
    { icon: 'layers', title: 'Rebranding complet', text: 'DATAIKÔS devient Gemula : brand book en 12 sections, site gemula.org (Astro, Tailwind), calendrier éditorial sur 52 semaines.' },
    { icon: 'shield', title: 'Gouvernance', text: "Règlement intérieur adopté le 23/04/2026, contrats des membres opérationnels, contrat d'adhésion à Gemula Community." },
    { icon: 'users', title: 'Gemula Community', text: "Communauté ouverte d'apprentissage organisée en 4 espaces : Learn, Explore, Build, Connect." },
    { icon: 'chat', title: 'Avant-vente et clients', text: 'Cahiers des charges et devis (ex. PWA bilingue pour Exousia Web Radio), accompagnement de porteurs de projets externes.' },
  ],
};

export interface Experience {
  title: string;
  org: string;
  date: string;
  place: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Founder & Lead',
    org: 'Gemula (ex-DATAIKÔS)',
    date: 'Depuis avr. 2026',
    place: 'Douala, Cameroun · À distance',
    bullets: [
      "Création et direction d'un collectif d'élèves ingénieurs et de chercheurs couvrant 5 domaines.",
      "Pilotage de bout en bout de 7 projets (cadrage, modélisation, développement, livraison) et coordination d'une équipe pluridisciplinaire allant jusqu'à 11 personnes.",
      'Gouvernance, rebranding complet, avant-vente et lancement de Gemula Community.',
    ],
  },
  {
    title: 'Stagiaire Data Science / Software Engineering',
    org: 'WEAREITLOCK',
    date: 'Juil. 2026',
    place: 'Douala, Cameroun',
    bullets: [
      'Projet SafeKid (surveillance et contrôle parental) : conception du tableau de bord de supervision.',
      "Audit de sécurité de l'application et identification de vulnérabilités.",
      'Développement de fonctionnalités métier : codes promotionnels, messagerie instantanée parent-enfant.',
      "Contribution à l'identité visuelle de l'entreprise (logo, visuels).",
    ],
  },
  {
    title: 'Infographe & Community Manager',
    org: 'Fast Travel',
    date: 'Mars à août 2025',
    place: 'Douala, Cameroun · Temps plein',
    bullets: [
      "Conception de l'identité visuelle (logos) et des chartes graphiques ; supports de communication print et web.",
      "Montage vidéo et gestion des réseaux sociaux de l'agence.",
    ],
  },
  {
    title: 'Téléconseiller / Customer Relationship Specialist',
    org: 'Intelcia',
    date: 'Janv. à sept. 2024',
    place: 'Douala, Cameroun · Stage, CDD',
    bullets: [
      'Gestion de la relation client de haut niveau et assistance technique à distance.',
      'Traitement des requêtes dans le respect du RGPD et suivi des indicateurs de performance.',
      "Expérience terrain réinvestie dans un projet de Workforce Management : prévision des appels et dimensionnement des équipes.",
    ],
  },
  {
    title: 'Responsable informatique',
    org: 'Olympiades Lumières',
    date: '2022 à 2023',
    place: 'Edéa, Cameroun',
    bullets: ["Gestion des moyens informatiques et du support technique de l'événement."],
  },
  {
    title: 'Graphiste & Community Manager (stage)',
    org: 'Vista Language Center',
    date: 'Mai à juin 2023',
    place: 'Douala, Cameroun',
    bullets: ["Conception de l'identité visuelle et de la charte graphique ; animation des réseaux sociaux."],
  },
  {
    title: 'Stagiaire en maintenance informatique',
    org: "Village de l'Informatique",
    date: 'Janv. à avr. 2020',
    place: 'Yaoundé, Cameroun · Temps partiel',
    bullets: ['Diagnostic, dépannage et maintenance préventive et curative de parcs informatiques.'],
  },
];

export type Domain = 'ia' | 'logiciel' | 'iot';

export const domains: { id: Domain | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'ia', label: 'Data & IA' },
  { id: 'logiciel', label: 'Logiciel & SaaS' },
  { id: 'iot', label: 'IoT & embarqué' },
];

export interface Project {
  name: string;
  kind: string;
  domain: Domain;
  desc: string;
  stack: string[];
  image?: ImageMetadata;
  icon: string;
  repo?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'MAPEBE', kind: 'Gestion agro-industrielle', domain: 'logiciel', image: mapebe, icon: 'chart', featured: true,
    desc: "Application desktop de gestion intelligente des complexes agro-industriels (huile de palme et cacao) : stocks, facturation, RH, CRM, prévisions ARIMA/SARIMAX avec narration générée par IA, rapports PDF, packaging Windows. Version Universal spécifiée : multi-tenant, offline-first.",
    stack: ['Python', 'PyQt6', 'NumPy', 'Matplotlib', 'ReportLab', 'SQLite'],
  },
  {
    name: 'Gemula Atlas', kind: "Gestion d'entreprise", domain: 'logiciel', image: atlas, icon: 'database', featured: true, repo: `${GH}/DATAIKOS_ATLAS`,
    desc: 'Logiciel desktop 100 % local pour PME : stocks (FIFO), facturation, CRM, analytique prédictive ARIMA/SARIMAX, narration IA, rapports PDF. Projet phare de Gemula.',
    stack: ['Python', 'CustomTkinter', 'SQLite', 'Matplotlib', 'ReportLab'],
  },
  {
    name: 'Maternelle Connect', kind: 'Santé maternelle', domain: 'ia', image: maternelle, icon: 'shield', featured: true, repo: `${GH}/maternelle-connect`,
    desc: "Application mobile de triage obstétrical pour les zones rurales à faible connectivité : moteur local hors ligne, suivi du cycle, tableau de bord hôpital. Backend et dashboard admin déployés.",
    stack: ['Flutter', 'Riverpod', 'Hive', 'FastAPI', 'Supabase', 'Mistral AI'],
  },
  {
    name: 'VIBE SHIELD', kind: 'IoT et IA embarquée', domain: 'iot', image: vibeshield, icon: 'memory', featured: true,
    desc: "Dispositif IoT de prédiction des pannes moteur par inférence TinyML, avec plateforme d'appel à collaboration. Candidat à l'Orange Summer Challenge.",
    stack: ['ESP32', 'STM32', 'TinyML', 'TFLite'],
  },
  {
    name: 'Intelcia WFM & flux_forcast', kind: "Centres d'appels", domain: 'ia', icon: 'chart', repo: `${GH}/flux_forcast`,
    desc: "Prévision des flux d'appels et dimensionnement des équipes : pipeline hybride SARIMA + XGBoost, Erlang-C, simulateur de flux (Poisson, pas de 30 min). Jalon 1 livré avec 20 tests unitaires.",
    stack: ['Python', 'XGBoost', 'statsmodels', 'SQLAlchemy', 'Alembic'],
  },
  {
    name: 'Pineapple', kind: "SaaS pour l'enseignement supérieur", domain: 'logiciel', icon: 'school',
    desc: "Plateforme universitaire multi-établissements : moteur électoral sécurisé, certification d'identité, fil d'actualité local, rapports PDF. Monolithe modulaire, DDD léger ; conduite d'une équipe de 4.",
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    name: 'N-BASE', kind: 'Deep Learning', domain: 'ia', icon: 'brain', repo: `${GH}/N-BASE`,
    desc: "Classification d'images CIFAR-10 par CNN (précision ≥ 70 %) et prévision météo par LSTM, servies par une API web ; code modulaire (entraînement, évaluation, inférence).",
    stack: ['Python', 'CNN', 'LSTM', 'FastAPI'],
  },
  {
    name: 'sentiment-analysis', kind: 'MLOps', domain: 'ia', icon: 'bolt',
    desc: "Pipeline MLOps complet d'analyse de sentiments, entièrement sur des services gratuits.",
    stack: ['DistilBERT', 'GitHub Actions', 'Hugging Face', 'JavaScript'],
  },
  {
    name: "O'Ndjocka", kind: 'SaaS hôtellerie et événementiel', domain: 'logiciel', icon: 'layers',
    desc: "Plateforme multi-tenant pour snack-bars, restaurants et salles de fête, avec couche IA « MOUT » ; suite de spécifications UX/UI, base de données, IA, BI, DevOps.",
    stack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'GOOD-DEAL-CHAT & Lisa', kind: 'IA générative', domain: 'ia', image: goodDeal, icon: 'sparkles', repo: `${GH}/GOOD-DEAL-CHAT`, live: 'https://good-deal-chat.onrender.com/',
    desc: 'Chatbot RAG permettant aux apprenants de la formation GOOD-DEAL de réviser les notions clés (Excel, gestion de stock, calculs financiers, Pareto) ; chatbot Lisa sur Gemini.',
    stack: ['Gemini', 'RAG', 'HTML', 'CSS'],
  },
  {
    name: 'dames_game_rl', kind: 'Apprentissage par renforcement', domain: 'ia', image: dames, icon: 'brain', repo: `${GH}/dames_game_rl`,
    desc: 'Jeu de dames avec IA DQN, interface animée, apprentissage continu en ligne et sauvegarde automatique du modèle.',
    stack: ['Python', 'PyTorch', 'PyQt5', 'Pygame'],
  },
  {
    name: 'Fuel_Saver', kind: 'Contrôle optimal', domain: 'ia', icon: 'explore', repo: `${GH}/Fuel_Saver`,
    desc: "Jeu de stratégie et d'optimisation de trajectoires fondé sur l'équation de Hamilton-Jacobi-Bellman (HJB).",
    stack: ['Python'],
  },
];

export const otherWork = [
  { name: 'SecEff', text: 'Package R de calcul pour la physique nucléaire, co-développé avec Ngneumeu Yvan.', href: `${GH}/SecEff` },
  { name: 'Tatiana_IA', text: 'Assistant chimique intelligent (masses molaires, quantités de matière) avec IA légère.', href: `${GH}/Tatiana_IA` },
  { name: 'student-prediction-interface', text: "Interface de prédiction appuyée sur un modèle de machine learning.", href: 'https://student-prediction-interface.onrender.com/', image: predict },
  { name: 'Gemula Learn', text: 'Outil web pour structurer, chiffrer, simuler et exporter un projet en dossier professionnel.', href: 'https://dataikoslearn.vercel.app', image: gemulaLearn },
  { name: 'Dataikos Mailer', text: 'Envoi programmé et répété de messages personnalisés à plusieurs destinataires.', href: 'https://dataikos-mailer-2.onrender.com/', image: gemulaMailer },
  { name: 'SOCOOCA PK', text: 'Site de traçabilité huile de palme et cacao, Koukoué.', href: 'https://socoopca.netlify.app/', image: socooca },
  { name: 'FORMATION-DATAIKOS', text: 'Espace de formation Excel et prompt engineering avec entraînement.', href: 'https://formation-dataikos.vercel.app' },
  { name: 'gemula.org', text: 'Site du collectif Gemula, construit avec Astro et Tailwind.', href: 'https://gemula.org' },
];

export const skills = [
  { group: 'Data Science & statistiques', items: ['pandas', 'NumPy', 'SciPy', 'SymPy', 'Statistique bayésienne (PyMC)', 'Analyse exploratoire', 'Data mining', 'Matplotlib', 'Seaborn'] },
  { group: 'Machine Learning & modélisation', items: ['scikit-learn', 'XGBoost', 'LightGBM', 'ARIMA / SARIMAX', 'Classification', 'Régression', 'Algorithmes from scratch', 'Optimisation (Newton, BFGS)', 'Contrôle optimal (HJB)'] },
  { group: 'Deep Learning & IA', items: ['TensorFlow', 'Keras', 'PyTorch', 'CNN', 'LSTM', 'NLP (DistilBERT)', 'OpenCV', 'DQN'] },
  { group: 'IA générative & LLMs', items: ['RAG', 'Agents IA', 'Prompt engineering', 'API Gemini', 'API Mistral', 'Hugging Face'] },
  { group: 'MLOps & déploiement', items: ['GitHub Actions', 'Hugging Face Inference API', 'Docker', 'Mise en production via API'] },
  { group: 'IA embarquée & IoT', items: ['TinyML', 'TFLite', 'ESP32', 'STM32', 'Maintenance prédictive'] },
  { group: 'Backend & bases de données', items: ['FastAPI', 'Flask', 'API REST', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Supabase', 'Redis'] },
  { group: 'Frontend, mobile & desktop', items: ['React', 'Vite', 'Tailwind CSS', 'Astro', 'JavaScript', 'Flutter', 'PyQt6', 'CustomTkinter'] },
  { group: 'DevOps & cloud', items: ['Git', 'GitHub', 'Docker', 'Linux (Ubuntu)', 'Vercel', 'AWS (RDS, S3, CloudFront)', 'Playwright'] },
  { group: 'Langages', items: ['Python (avancé)', 'R', 'SQL', 'JavaScript', 'C', 'VBA'] },
  { group: 'Design, marketing & bureautique', items: ['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'CapCut', 'SolidWorks', 'Growth marketing', 'Storytelling', 'Excel avancé'] },
];

export const education = [
  {
    title: 'Master Recherche en Science des Données & IA (SDIA)', school: 'École Nationale Supérieure Polytechnique de Douala', date: 'Sept. 2026 à 2028', current: true,
    details: [
      'Enseignements : data mining, statistique bayésienne, optimisation, bases de données NoSQL, machine learning avancé.',
      'Thème de recherche proposé : enveloppes épicycloïdales et distributions circulaires ; parcimonie paramétrique, compromis biais-variance et réduction de complexité dans les modèles génératifs pour données angulaires.',
    ],
  },
  { title: "Licence en Sciences de l'Ingénieur, Science des Données & IA", school: 'École Nationale Supérieure Polytechnique de Douala', date: 'Oct. 2025 à juin 2026' },
  { title: 'Licence Technologique & DUT en Génie Électrique et Informatique Industrielle', school: 'Institut Universitaire de Technologie de Douala', date: 'Oct. 2020 à juil. 2023' },
  { title: 'Licence 1 en Informatique', school: 'Faculté des Sciences, Université de Yaoundé I', date: 'Oct. 2019 à juil. 2020' },
  { title: 'Baccalauréat TI', school: "Lycée Classique d'Edéa", date: '2019' },
];

export const certifications = [
  { title: "Bootcamp Entrepreneurs : l'idée d'entreprise et la validation du marché", org: 'Orange Digital Center', date: 'Juil. 2026' },
  { title: "Découvrir l'IA générative", org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: "Astuces nano pour tirer profit de l'IA agentique", org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: "Prendre des décisions stratégiques avec les outils BI augmentés par l'IA", org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: "Astuces nano pour structurer un projet étudiant avec l'IA", org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: 'Les fondements du growth marketing', org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: "Astuces nano pour maîtriser le storytelling d'entreprise", org: 'LinkedIn Learning', date: 'Juil. 2026' },
  { title: "L'IA : votre assistante commerciale pour chaque étape du processus de vente", org: 'LinkedIn Learning', date: 'Juin 2026' },
  { title: "Communication efficace et travail d'équipe (Erasmus+, 5 séances)", org: 'N-EU-SAIL', date: 'Mai 2026' },
];

export const engagement = [
  {
    icon: 'brain', title: 'Membre du Comité exécutif, Club IA', meta: 'ENSP Douala · Depuis 2026',
    bullets: [
      'Bras droit de la présidente, impliqué dans la création et la direction du club.',
      'Rédaction de la Vision Stratégique 2026-2028 : 7 commissions, 10 projets phares, calendrier sur 24 mois.',
      'Organisation de la saison 2026-2027 : 26 postes permanents sur 2 niveaux, fiches de poste et organigramme.',
      'Kit institutionnel et automatisation des adhésions (Google Forms, Sheets, Apps Script).',
      "Animation de « Micro IA », rendez-vous hebdomadaire de débat sur l'IA.",
    ],
  },
  {
    icon: 'school', title: 'Formateur et animateur technique', meta: 'Ateliers, bootcamps, vulgarisation',
    bullets: [
      "Atelier « IA : découvrir, expérimenter et créer », EK NumériK (31/10/2026) : initiation à l'IA pour des enfants de 6 à 16 ans.",
      'Programme « GitHub en équipe » : parcours de 42 h et version accélérée de 18 h.',
      'Gemula Internal Tech Bootcamp 2026 : Machine Learning No Code sous Orange Data Mining, 7 jours, 7 modèles, 7 jeux de données.',
      'Vulgarisation sur LinkedIn : carrousels techniques (Agile appliqué à la Data Science, architecture backend FastAPI).',
    ],
  },
  {
    icon: 'trophy', title: 'Concours et présentations', meta: '2026 - 2027',
    bullets: [
      'Orange Summer Challenge 2026 : candidature avec VIBE SHIELD, dispositif d\'IA embarquée.',
      'Présentation de Gemula Atlas et MAPEBE lors d\'une rencontre associative et culturelle (24/10/2026).',
      "POESAM 2027 (Prix Orange de l'Entrepreneur Social) : candidature en préparation.",
    ],
  },
];

export const strengths = [
  { icon: 'memory', title: 'Polyvalence de bout en bout', text: "Du capteur (ESP32, TinyML) au modèle, à l'API et à l'interface : je couvre toute la chaîne d'une solution data." },
  { icon: 'groups', title: 'Leadership et entrepreneuriat', text: "Fondation et pilotage d'un collectif de 8 talents actifs, gouvernance formalisée, relation avec des clients et des partenaires." },
  { icon: 'book', title: 'Pédagogie', text: 'Formations pour débutants comme pour enfants, documentation, spécifications et contenus de vulgarisation.' },
  { icon: 'chart', title: 'Rigueur scientifique', text: 'Socle mathématique (statistique, optimisation) appliqué à la modélisation et à un thème de recherche.' },
  { icon: 'palette', title: 'Sens produit et design', text: "Expérience de graphiste et de community manager, attention portée à l'expérience utilisateur." },
];

export const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Professionnel' },
];

export const interests = [
  { title: "Philosophie et éthique de l'IA", text: "Fondements épistémologiques et éthiques de l'intelligence artificielle." },
  { title: 'Recherche appliquée', text: 'Modèles génératifs, IA frugale et embarquée.' },
  { title: 'Transmission numérique', text: "Initiation des jeunes au numérique et à l'IA." },
  { title: 'Sport et voyages', text: 'Basketball, découverte de nouvelles cultures.' },
];
