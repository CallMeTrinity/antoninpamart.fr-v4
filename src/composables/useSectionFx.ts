import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

/**
 * Runs section-scoped GSAP animations on mount, inside a matchMedia branch that
 * only fires when the user does not prefer reduced motion. Everything is created
 * within a gsap.context scoped to the section root and reverted on unmount, so
 * inline styles are cleaned up and reduced-motion users keep elements at rest.
 */
export function useSectionFx(
  root: Ref<HTMLElement | null>,
  build: (scope: HTMLElement) => void,
) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const el = root.value
    if (!el) return
    ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        build(el)
      })
    }, el)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}

/** Line-mask reveal of a heading, tied to scroll. Returns the SplitText instance. */
export function splitLines(el: Element | null, trigger: Element | null) {
  if (!el || !trigger) return
  return SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit(self) {
      return gsap.from(self.lines, {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: { trigger, start: 'top 82%', once: true },
      })
    },
  })
}

/** Fade + rise a set of targets when `trigger` enters the viewport. */
export function fadeUp(
  targets: gsap.DOMTarget | null,
  trigger: Element | null,
  vars: gsap.TweenVars = {},
) {
  if (!targets || !trigger) return
  return gsap.from(targets, {
    autoAlpha: 0,
    y: 24,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 82%', once: true },
    ...vars,
  })
}
