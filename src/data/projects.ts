export interface Project {
  id: 'pid' | 'workflow' | 'bingo' | 'slyVerse' | 'fitsass'
  year: string
  stack: string[]
  hue: number
  link: string
}

export const PROJECTS: Project[] = [
  {
    id: 'pid',
    year: '2026',
    stack: ['Python', 'Streamlit', 'lifelines'],
    hue: 200,
    link: 'https://github.com/CallMeTrinity/pid',
  },
  {
    id: 'workflow',
    year: '2026',
    stack: ['Java 25', 'JavaFX', 'SQLite'],
    hue: 30,
    link: 'https://github.com/CallMeTrinity/ilog-projet',
  },
  {
    id: 'bingo',
    year: '2026',
    stack: ['Symfony 8', 'Stimulus', 'MariaDB'],
    hue: 285,
    link: 'https://github.com/CallMeTrinity/bingo',
  },
  {
    id: 'slyVerse',
    year: '2026',
    stack: ['Craft CMS', 'Twig', 'PHP'],
    hue: 340,
    link: 'https://github.com/CallMeTrinity/sly-verse-site',
  },
  {
    id: 'fitsass',
    year: '2025',
    stack: ['Java', 'JavaFX'],
    hue: 140,
    link: 'https://github.com/CallMeTrinity/FitSass',
  },
]

export const TECH = [
  'Symfony', 'Craft CMS', 'Tailwind CSS', 'TypeScript', 'Vue', 'Python', 'Java',
]
