import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

let smoother: ScrollSmoother | null = null
let mm: ReturnType<typeof gsap.matchMedia> | null = null

/**
 * Create the ScrollSmoother instance, but only on desktop pointers that do not
 * ask for reduced motion. On mobile / touch / reduced-motion the page keeps its
 * native scroll, and `scrollToTarget` falls back to a plain animated scroll.
 */
export function initSmoothScroll() {
  mm = gsap.matchMedia()
  mm.add('(min-width: 880px) and (prefers-reduced-motion: no-preference)', () => {
    smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true, // enables data-speed / data-lag parallax
      normalizeScroll: true,
    })
    return () => {
      smoother?.kill()
      smoother = null
    }
  })
}

export function destroySmoothScroll() {
  mm?.revert()
  mm = null
}

/** Header offset so anchored sections aren't hidden behind the fixed nav. */
const NAV_OFFSET = 80

/** Scroll to an anchor, routed through ScrollSmoother when it is active. */
export function scrollToTarget(target: string) {
  if (smoother) {
    smoother.scrollTo(target, true, `top ${NAV_OFFSET}px`)
  } else {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: NAV_OFFSET },
      ease: 'power2.inOut',
    })
  }
}
