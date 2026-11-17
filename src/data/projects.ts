import type { ImageMetadata } from 'astro';
import dames from '../assets/images/dames.jpeg';
import dataikos from '../assets/images/dataikos.png';
import dataikosLogo from '../assets/images/dataikos-logo.png';
import formation from '../assets/images/formation.png';
import interface2 from '../assets/images/interface2.png';
import learn from '../assets/images/learn.png';
import magnific from '../assets/images/magnific.png';
import mail from '../assets/images/mail.png';
import maternel from '../assets/images/maternel.png';
import maternelleConnect from '../assets/images/maternelle-connect.png';
import portfolio from '../assets/images/portfolio.png';
import predict from '../assets/images/predict.png';
import socadel from '../assets/images/socadel.png';
import socoopka from '../assets/images/socoopka.png';

export type Category = 'ai' | 'web' | 'desktop' | 'embedded' | 'tools';

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'ai', label: 'Data & IA' },
  { id: 'web', label: 'Web & APIs' },
  { id: 'desktop', label: 'Desktop & Automatisation' },
  { id: 'embedded', label: 'Embarqué' },
  { id: 'tools', label: 'Outils' },
];

export interface Project {
  /** Icône Font Awesome, ex. "fas fa-gamepad" */
  icon: string;
  title: string;
  category: Category;
  tags: string[];
  thumb: ImageMetadata;
  desc: string;
  /** Nom du dépôt GitHub (sous github.com/aatndongodavid) */
  repo?: string;
  /** URL de la démo en ligne */
  live?: string;
}

export const projects: Project[] = [
  { icon: 'fas fa-gamepad', title: 'dames_game_rl', category: 'ai', tags: ['Reinforcement Learning', 'Python'], thumb: dames, desc: 'Agent RL pour le jeu de dames. Voir le dépôt pour instructions.', repo: 'dames_game_rl' },
  { icon: 'fas fa-database', title: 'dataikos', category: 'web', tags: ['Data', 'Backend'], thumb: dataikos, desc: 'Présentation Dataikos et services.', repo: 'dataikos', live: 'https://dataikos.netlify.app' },
  { icon: 'fas fa-rocket', title: 'DATAIKOSLEARN', category: 'web', tags: ['Web', 'Vercel', 'Learning'], thumb: learn, desc: 'Outil d’analyse stratégique pour ingénieurs, chercheurs, consultants et incubateurs.', repo: 'DATAIKOSLEARN', live: 'https://dataikoslearn.vercel.app' },
  { icon: 'fas fa-chart-line', title: 'DATAIKOS_ATLAS', category: 'ai', tags: ['ARIMA', 'CRM', 'Prévisions'], thumb: interface2, desc: 'Atlas de DATAIKÔS pour CRM et prévisions (voir dépôt).', repo: 'DATAIKOS_ATLAS' },
  { icon: 'fas fa-envelope-open-text', title: 'Dataikos_Mailer', category: 'web', tags: ['Email', 'Automation'], thumb: mail, desc: 'Plateforme d’envoi d’e-mails personnalisés à grande échelle.', repo: 'Dataikos_Mailer', live: 'https://dataikos-mailer-2.onrender.com/' },
  { icon: 'fas fa-project-diagram', title: 'flux_forcast', category: 'ai', tags: ['Stochastic', 'Simulator'], thumb: dataikosLogo, desc: 'Flux Forecast - simulateur de flux d’appels et métriques.', repo: 'flux_forcast' },
  { icon: 'fas fa-chalkboard-teacher', title: 'FORMATION-DATAIKOS', category: 'web', tags: ['Web', 'Vercel', 'Training'], thumb: formation, desc: 'Site de formation Excel et Prompt avec entraînement.', repo: 'FORMATION-DATAIKOS', live: 'https://formation-dataikos.vercel.app' },
  { icon: 'fas fa-gas-pump', title: 'Fuel_Saver', category: 'embedded', tags: ['IoT', 'Efficiency'], thumb: dataikosLogo, desc: 'Jeu se servant de HJB et Dijkstra.', repo: 'Fuel_Saver' },
  { icon: 'fas fa-comments', title: 'GOOD-DEAL-CHAT', category: 'web', tags: ['Chat', 'Realtime'], thumb: magnific, desc: 'Interface de chat IA en lien avec la formation Excel et Prompt.', repo: 'GOOD-DEAL-CHAT', live: 'https://good-deal-chat.onrender.com/' },
  { icon: 'fas fa-school', title: 'maternelle-connect', category: 'ai', tags: ['Backend', 'Database'], thumb: maternelleConnect, desc: 'Connectivité et outils pour maternelles.', repo: 'maternelle-connect' },
  { icon: 'fas fa-exchange-alt', title: 'maternelle-proxy', category: 'web', tags: ['Web', 'Vercel', 'Proxy'], thumb: maternel, desc: 'Proxy / interface pour maternelle - déployé.', repo: 'maternelle-proxy', live: 'https://maternelle-proxy.vercel.app' },
  { icon: 'fas fa-database', title: 'N-BASE', category: 'tools', tags: ['DB', 'Storage'], thumb: dataikosLogo, desc: 'Projet N-BASE - stockage / traces.', repo: 'N-BASE' },
  { icon: 'fas fa-plug', title: 'projet_ENEO', category: 'embedded', tags: ['Hardware', 'Integration'], thumb: socadel, desc: 'Projet lié à ENEO - intégration systèmes.', repo: 'projet_ENEO', live: 'https://projeteneointerface.netlify.app/' },
  { icon: 'fas fa-lock', title: 'SecEff', category: 'tools', tags: ['Security', 'Research'], thumb: dataikosLogo, desc: 'Projets de sécurité informatique et efficacité.', repo: 'SecEff' },
  { icon: 'fas fa-handshake', title: 'SOCOOPCA', category: 'web', tags: ['Coop', 'Management'], thumb: socoopka, desc: 'Solution pour coopératives (SOCOOPCA).', repo: 'SOCOOPCA', live: 'https://socoopca.netlify.app/' },
  { icon: 'fas fa-user-graduate', title: 'student-prediction-interface', category: 'ai', tags: ['ML', 'FastAPI', 'Web'], thumb: predict, desc: 'Interface web pour prédiction de réussite étudiante.', repo: 'student-prediction-interface', live: 'https://student-prediction-interface.onrender.com/' },
  { icon: 'fas fa-flask', title: 'Tatiana_IA', category: 'ai', tags: ['NLP', 'Assistant'], thumb: dataikosLogo, desc: 'Assistant intelligent (NLP) - Tatiana IA.', repo: 'Tatiana_IA' },
  { icon: 'fas fa-globe', title: 'website', category: 'web', tags: ['Web', 'Showcase'], thumb: portfolio, desc: 'Site web / démonstration.', repo: 'website', live: 'https://davidaatportfolio.netlify.app/' },
  { icon: 'fas fa-portrait', title: 'davidaat (Portfolio)', category: 'web', tags: ['Web', 'Portfolio', 'Astro'], thumb: portfolio, desc: 'Site personnel (ce portfolio), construit avec Astro - dépôt source.', repo: 'davidaat', live: 'https://davidportfolio.gemula.org/' },
];
