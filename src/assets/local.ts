import { createI18n } from 'vue-i18n'

export type Locale = 'fr' | 'en'

const STORAGE_KEY = 'portfolio-locale'

const detectLocale = (): Locale => {
  if (typeof window === 'undefined') return 'fr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'en') return stored
  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

const messages = {
  fr: {
    header: {
      developer: 'Développeur',
      available: 'Disponible',
      work: 'Travaux',
      about: 'À propos',
      now: 'En ce moment',
      contact: 'Contact',
    },
    hero: {
      portfolio: 'Portfolio · 2026 éd.',
      volume: 'vol. 04',
      nowLabel: 'Maintenant',
      indexLabel: 'Index',
      indexRange: '01 → 05',
      lede1:
        "Ouvert d'esprit et émotionnellement fermé, je construis des logiciels <em>petits et soignés</em> : outils, sites web, et l'occasionnel application dont j'ai besoin.",
      lede2:
        "Actuellement chez La Haute Société à Grenoble. J'ai pour objectif d'apprendre continuellement et de pouvoir partager mes connaissances à travers différents projets.",
      scroll: 'Défilez pour voir les travaux',
      indexCount: '01 — Index',
    },
    work: {
      sectionNum: '02 / Travaux',
      title: 'Des trucs que je fais, souvent sur <em>mon temps libre</em>.',
      overview: 'Aperçu',
      role: 'Rôle',
      year: 'Année',
      stack: 'Stack',
      viewProject: 'Voir le projet →',
      viewGithub: "Voir le code",
      projects: {
        pid: {
          name: 'PID — Analyse de survie',
          role: 'Projet M1 MIAGE',
          blurb:
            "Application web interactive d'analyse de survie sur un jeu de 1000 patients. Estimations Kaplan-Meier, régression de Cox, comparaison de sous-populations — le tout pilotable depuis l'UI.",
        },
        workflow: {
          name: 'Workflow',
          role: 'Projet ILOG',
          blurb:
            'Application bureau de gestion de projet : Kanban en glisser-déposer, suivi des tâches et réservation de salles avec détection de conflits. Tests JUnit et couverture JaCoCo.',
        },
        bingo: {
          name: 'Bingo',
          role: 'Projet solo',
          blurb:
            "Un carnet pastel qui transforme tes envies en grilles de défis. Toggle des cases en JSON via Stimulus (sans Turbo), détection des lignes côté serveur et mode PWA hors-ligne.",
        },
        slyVerse: {
          name: 'Sly Verse',
          role: 'Design + ing.',
          blurb:
            "Site fan dédié au Sly Wrestling Universe : back-office Craft CMS configuré sur-mesure pour gérer catalogues d'images, vidéos et contenus éditoriaux.",
        },
        tempo: {
          name: 'Tempo',
          role: 'Projet solo',
          blurb:
            "Gestionnaire de fiches horaires : saisie semaine par semaine, calcul auto des heures sup et workflow brouillon → soumis → approuvé. Côté admin : validation en bulk et modération des inscriptions.",
        },
        formations: {
          name: 'Formations',
          role: 'Projet solo',
          blurb:
            "Site de formation en ligne : fait entièrement en Symfony 8, basé sur un système de formations markdown faites par l'IA qui sont converties en formations accessibles sur le site.",
        },
        villardApi: {
          name: 'Villard API',
          role: 'Projet solo',
          blurb:
            "Application personnelle et auto-hébergée de gestion d'un appartement familial : planning d'occupation (qui occupe le logement et quand) et suivi d'inventaire (linge, vaisselle, équipement, courses récurrentes, état des lieux. Ce dépôt contient uniquement le backend API. La SPA Vue 3 vit dans un dépôt séparé (villard-front).",
        },
      },
    },
    about: {
      sectionNum: '03 / À propos',
      title: 'Adapter, Optimiser, <em>Produire</em>.',
      p1: "Je suis Antonin, dev junior à Grenoble. Principalement back-end, mais <em>full-stack</em> quand il faut. Actuellement en stage à La Haute Société, où j'ai été alternant l'an dernier, et où je devrais l'être à nouveau prochainement.",
      p2: "Ce qui me tient à cœur : <em>apprendre</em>, garder les choses simples, et résoudre les problèmes plutôt que les contourner. Quand un truc devient compliqué, c'est souvent le signe qu'il faut le repenser.",
      p3: "En dehors de l'écran : la <em>salle</em>, la course ou le vélo selon l'humeur. Trois disciplines pour la même excuse : rester en <s>bonne santé</s> vie.",
      cv : {
        link: '/cv_pamart.pdf',
        message: 'Télécharger mon CV (PDF)',
      },
      studies: 'Études',
      stack: 'Stack technique',
      experiences: 'Expériences',
      studiesList: {
        miage: 'Master MIAGE · Lyon',
        mmi: 'BUT MMI · Grenoble',
      },
      experiencesList: {
        lhsStage: 'La Haute Société · Stage',
        lhsAlt: 'La Haute Société · Alternance',
        mezcalito: 'Mezcalito · Stage Back-End',
      },
    },
    now: {
      sectionNum: '04 / En ce moment',
      title: 'Ce à quoi je pense <em>cette semaine</em>.',
      updated: 'Dernière mise à jour',
      updatedDate: '20 mai 2026',
      lines: {
        building: {
          when: 'Je construis',
          html: 'Des APIs avec Symfony, utilisables depuis son mobile',
        },
        reading: {
          when: 'Je lis',
          html: "<em>1984</em> (George Orwell) — Me suis dis que c'était le moment.",
        },
        listening: {
          when: "J'écoute",
          html: 'Techno qui fait pas réfléchir',
        },
      },
    },
    contact: {
      sectionNum: '05 / Contact',
      title: 'Des questions ? Des projets ? <em>Contactez-moi</em>.',
      copied: 'Copié dans le presse-papier',
    },
    footer: {
      updated: 'Dernière mise à jour',
    },
  },
  en: {
    header: {
      developer: 'Developer',
      available: 'Available',
      work: 'Work',
      about: 'About',
      now: 'Now',
      contact: 'Contact',
    },
    hero: {
      portfolio: 'Portfolio · 2026 ed.',
      volume: 'vol. 04',
      nowLabel: 'Now',
      indexLabel: 'Index',
      indexRange: '01 → 05',
      lede1:
        'Open-minded and emotionally closed, I build <em>small, polished</em> software: tools, websites, and the occasional app I happen to need.',
      lede2:
        'Currently at La Haute Société in Grenoble. My goal is to keep learning continuously and share what I know through varied projects.',
      scroll: 'Scroll to see the work',
      indexCount: '01 — Index',
    },
    work: {
      sectionNum: '02 / Work',
      title: 'Things I make, often on <em>my own time</em>.',
      overview: 'Overview',
      role: 'Role',
      year: 'Year',
      stack: 'Stack',
      viewProject: 'View project →',
      viewGithub: 'View code',
      projects: {
        pid: {
          name: 'PID — Survival analysis',
          role: 'M1 MIAGE project',
          blurb:
            'Interactive web app for survival analysis on a 1000-patient dataset. Kaplan-Meier estimates, Cox regression, sub-population comparison — all driven from the UI.',
        },
        workflow: {
          name: 'Workflow',
          role: 'ILOG project',
          blurb:
            'Desktop project-management app: drag-and-drop Kanban, task tracking, and room booking with conflict detection. JUnit tests and JaCoCo coverage.',
        },
        bingo: {
          name: 'Bingo',
          role: 'Solo project',
          blurb:
            'A pastel notebook that turns your wishes into challenge grids. JSON-toggled cells via Stimulus (no Turbo), server-side line detection, and offline PWA mode.',
        },
        slyVerse: {
          name: 'Sly Verse',
          role: 'Design + eng.',
          blurb:
            'Fan site dedicated to the Sly Wrestling Universe: tailor-made Craft CMS back office to manage image, video, and editorial content catalogues.',
        },
        tempo: {
          name: 'Tempo',
          role: 'Solo project',
          blurb:
            'Timesheet manager: week-by-week entry, automatic overtime calculation, and a draft → submitted → approved workflow. Admin side: bulk validation and signup moderation.',
        },
        formations: {
          name: 'Formations',
          role: 'Solo project',
          blurb:
            'Online training site: 100% Symfony 8, built on a markdown-based training system that is converted to accessible online courses.',
        },
        villardApi: {
          name: 'Villard API',
          role: 'Solo project',
          blurb:
            'Personal, self-hosted app for managing a family apartment: occupancy planning (who is staying and when) and inventory tracking (linen, dishes, equipment, recurring groceries, condition reports). This repo contains the backend API only. The Vue 3 SPA lives in a separate repo (villard-front).',
        },
      },
    },
    about: {
      sectionNum: '03 / About',
      title: 'Adapt, Optimise, <em>Ship</em>.',
      p1: "I'm Antonin, junior dev in Grenoble. Mostly back-end, but <em>full-stack</em> when needed. Currently interning at La Haute Société, where I was an apprentice last year, and where I should be again soon.",
      p2: 'What I care about: <em>learning</em>, keeping things simple, and solving problems rather than working around them. When something gets complicated, it usually means it should be rethought.',
      p3: 'Off-screen: the <em>gym</em>, running, or cycling depending on the mood. Three disciplines, same excuse: staying <s>healthy</s> alive.',
      cv : {
        link: '/cv_pamart.pdf',
        message: 'Download my CV (PDF)',
      },
      studies: 'Studies',
      stack: 'Tech stack',
      experiences: 'Experience',
      studiesList: {
        miage: 'MIAGE Master · Lyon',
        mmi: 'BUT MMI · Grenoble',
      },
      experiencesList: {
        lhsStage: 'La Haute Société · Internship',
        lhsAlt: 'La Haute Société · Apprenticeship',
        mezcalito: 'Mezcalito · Back-end internship',
      },
    },
    now: {
      sectionNum: '04 / Right now',
      title: "What I'm thinking about <em>this week</em>.",
      updated: 'Last update',
      updatedDate: 'May 20, 2026',
      lines: {
        building: {
          when: 'Building',
          html: 'Symfony APIs, usable from your phone',
        },
        reading: {
          when: 'Reading',
          html: "<em>1984</em> (George Orwell) — Figured it was the right time.",
        },
        listening: {
          when: 'Listening',
          html: "Techno that doesn't ask you to think",
        },
      },
    },
    contact: {
      sectionNum: '05 / Contact',
      title: 'Questions? Projects? <em>Get in touch</em>.',
      copied: 'Copied to clipboard',
    },
    footer: {
      updated: 'Last update',
    },
  },
} as const

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectLocale(),
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages,
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.global.locale.value
}

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }
}
