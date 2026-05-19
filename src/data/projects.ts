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
    name: 'Halcyon',
    year: '2025',
    role: 'Projet solo',
    stack: ['TypeScript', 'Rust', 'WebGPU'],
    blurb:
      "Un éditeur de code natif qui traite votre projet comme un graphe plutôt qu'un arbre. Saut vers n'importe où, multi-curseur entre fichiers, et une couche d'inférence qui nomme les variables avant vous.",
    hue: 18,
    link: '#',
  },
  {
    name: 'Field Notes',
    year: '2024',
    role: 'Co-fondateur',
    stack: ['Swift', 'CRDT', 'Local-first'],
    blurb:
      "Un outil d'écriture offline-first synchronisé via de petits fragments CRDT. Toute l'archive vit sur votre appareil ; le cloud n'est qu'un facteur.",
    hue: 140,
    link: '#',
  },
  {
    name: 'Polysynth',
    year: '2024',
    role: 'Ingénieur audio',
    stack: ['C++', 'JUCE', 'WebAudio'],
    blurb:
      "Un synthétiseur polyphonique qui tourne en natif et dans le navigateur depuis le même cœur DSP. Compile vers WASM sans allocation dans le thread audio.",
    hue: 285,
    link: '#',
  },
  {
    name: 'Quietmail',
    year: '2023',
    role: 'Design + ing.',
    stack: ['Go', 'SQLite', 'HTMX'],
    blurb:
      "Triage d'email pour ceux qui détestent l'email. Trois touches pour vider une boîte — les heuristiques sont volontairement bêtes pour que vous gardiez la main.",
    hue: 220,
    link: '#',
  },
  {
    name: 'Atlas',
    year: '2023',
    role: 'Projet annexe',
    stack: ['Python', 'Postgres', 'D3'],
    blurb:
      "Un entrepôt de données personnel pour les chiffres ennuyeux — sommeil, courses, livres, cafés. Un tuyau entrant, un dashboard sortant, pas de SaaS analytics.",
    hue: 50,
    link: '#',
  },
]

export const TECH = [
  'Symfony', 'Craft CMS', 'Tailwind CSS', 'TypeScript', 'Vue', 'Python', 'Java'
]
