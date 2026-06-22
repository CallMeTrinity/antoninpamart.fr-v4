export interface Project {
  id: 'pid' | 'workflow' | 'bingo' | 'slyVerse' | 'tempo' | 'formations'
  year: string
  stack: string[]
  hue: number
  url: string
  github: string
}

export const PROJECTS: Project[] = [
  {
    id: 'pid',
    year: '2026',
    stack: ['Python', 'Streamlit', 'lifelines'],
    hue: 200,
    url: "",
    github: 'https://github.com/CallMeTrinity/pid',
  },
  {
    id: 'workflow',
    year: '2026',
    stack: ['Java 25', 'JavaFX', 'SQLite'],
    hue: 30,
    url: "",
    github: 'https://github.com/CallMeTrinity/ilog-projet',
  },
  {
    id: 'bingo',
    year: '2026',
    stack: ['Symfony 8', 'Stimulus', 'MariaDB'],
    hue: 285,
    url: "https://bingo.antoninpamart.fr/",
    github: 'https://github.com/CallMeTrinity/bingo',
  },
  {
    id: 'slyVerse',
    year: '2026',
    stack: ['Craft CMS', 'Twig', 'PHP'],
    hue: 340,
    url: "https://slywrestlinguniverse.fr/",
    github: 'https://github.com/CallMeTrinity/sly-verse-site',
  },
  {
    id: 'tempo',
    year: '2026',
    stack: ['Symfony 8', 'Turbo', 'MariaDB'],
    hue: 140,
    url: "https://tempo.antoninpamart.fr/",
    github: 'https://github.com/CallMeTrinity/tempo',
  },
  {
    id: 'formations',
    year: '2026',
    stack: ['Symfony 8', 'GSAP', 'MariaDB'],
    hue: 220,
    url: "https://formations.antoninpamart.fr/",
    github: 'https://github.com/CallMeTrinity/formations',
  },
]

export const TECH = [
  'Symfony', 'Craft CMS', 'Tailwind CSS', 'TypeScript', 'Vue', 'Python', 'Java', 'GSAP'
]
