import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Reveals every `.reveal` element on scroll, batched so elements entering the
 * viewport together animate in one staggered group. Replaces the previous
 * IntersectionObserver implementation. Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.reveal', { autoAlpha: 1, y: 0 })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('.reveal', { autoAlpha: 0, y: 28 })
        ScrollTrigger.batch('.reveal', {
          start: 'top 85%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.8,
              ease: 'power3.out',
              overwrite: true,
            }),
        })
      })
    })
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
