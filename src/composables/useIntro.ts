import { ref } from 'vue'

/**
 * Shared intro state. The Preloader flips `introDone` to true once it has
 * finished, which lets the Hero play its entrance timeline in sync.
 */
export const introDone = ref(false)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
