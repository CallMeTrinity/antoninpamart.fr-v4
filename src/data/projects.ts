export interface Project {
  name: string
  year: string
  role: string
  stack: string[]
  blurb: string
  hue: number
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'PID — Analyse de survie',
    year: '2026',
    role: 'Projet M1 MIAGE',
    stack: ['Python', 'Streamlit', 'lifelines'],
    blurb:
      "Application web interactive d'analyse de survie sur un jeu de 1000 patients. Estimations Kaplan-Meier, régression de Cox, comparaison de sous-populations — le tout pilotable depuis l'UI.",
    hue: 200,
    link: 'https://github.com/CallMeTrinity/pid',
  },
  {
    name: 'Workflow',
    year: '2026',
    role: 'Projet ILOG',
    stack: ['Java 25', 'JavaFX', 'SQLite'],
    blurb:
      "Application bureau de gestion de projet : Kanban en glisser-déposer, suivi des tâches et réservation de salles avec détection de conflits. Tests JUnit et couverture JaCoCo.",
    hue: 30,
    link: 'https://github.com/CallMeTrinity/ilog-projet',
  },
  {
    name: 'QuestLife',
    year: '2026',
    role: 'Projet solo',
    stack: ['Symfony', 'Vue 3', 'MariaDB'],
    blurb:
      "Une app web qui transforme les objectifs quotidiens en quêtes RPG. Auth JWT stateless via LexikJWT, API auto-générée par API Platform 4 à partir des entités Doctrine.",
    hue: 285,
    link: 'https://github.com/CallMeTrinity/QuestLife',
  },
  {
    name: 'Sly Verse',
    year: '2026',
    role: 'Design + ing.',
    stack: ['Craft CMS', 'Twig', 'PHP'],
    blurb:
      "Site fan dédié au Sly Wrestling Universe : back-office Craft CMS configuré sur-mesure pour gérer catalogues d'images, vidéos et contenus éditoriaux.",
    hue: 340,
    link: 'https://github.com/CallMeTrinity/sly-verse-site',
  },
  {
    name: 'FitSass',
    year: '2025',
    role: "Projet d'équipe",
    stack: ['Java', 'JavaFX'],
    blurb:
      "Générateur de plans d'entraînement basé sur les préférences utilisateur — niveau, objectifs, équipement disponible — pour produire des séances cohérentes.",
    hue: 140,
    link: 'https://github.com/CallMeTrinity/FitSass',
  },
]

export const TECH = [
  'Symfony', 'Craft CMS', 'Tailwind CSS', 'TypeScript', 'Vue', 'Python', 'Java'
]
