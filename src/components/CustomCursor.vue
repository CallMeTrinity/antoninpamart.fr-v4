<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
let mm: ReturnType<typeof gsap.matchMedia> | null = null

// Elements that make the cursor "engage" (ring grows, dot hides).
const INTERACTIVE = 'a, button, .work-row, .cta, .ch, [data-cursor]'

onMounted(() => {
  mm = gsap.matchMedia()
  mm.add(
    '(pointer: fine) and (min-width: 880px) and (prefers-reduced-motion: no-preference)',
    () => {
      const d = dot.value
      const r = ring.value
      if (!d || !r) return

      gsap.set([d, r], { xPercent: -50, yPercent: -50 })

      // Dot snaps; ring trails with more lag for the "magnetic" feel.
      const dx = gsap.quickTo(d, 'x', { duration: 0.12, ease: 'power3' })
      const dy = gsap.quickTo(d, 'y', { duration: 0.12, ease: 'power3' })
      const rx = gsap.quickTo(r, 'x', { duration: 0.45, ease: 'power3' })
      const ry = gsap.quickTo(r, 'y', { duration: 0.45, ease: 'power3' })

      let shown = false
      const move = (e: PointerEvent) => {
        if (!shown) {
          shown = true
          gsap.to([d, r], { autoAlpha: 1, duration: 0.3 })
        }
        dx(e.clientX)
        dy(e.clientY)
        rx(e.clientX)
        ry(e.clientY)
      }

      const over = (e: PointerEvent) => {
        const engaged = !!(e.target as Element).closest?.(INTERACTIVE)
        gsap.to(r, { scale: engaged ? 1.9 : 1, duration: 0.3, ease: 'power3' })
        gsap.to(d, { scale: engaged ? 0 : 1, duration: 0.3, ease: 'power3' })
      }

      const leaveWindow = () => gsap.to([d, r], { autoAlpha: 0, duration: 0.2 })
      const enterWindow = () => gsap.to([d, r], { autoAlpha: 1, duration: 0.2 })

      document.body.classList.add('cursor-none')
      window.addEventListener('pointermove', move)
      document.addEventListener('pointerover', over)
      document.addEventListener('pointerdown', () => gsap.to(r, { scale: 0.8, duration: 0.2 }))
      document.addEventListener('pointerup', over)
      document.addEventListener('mouseleave', leaveWindow)
      document.addEventListener('mouseenter', enterWindow)

      return () => {
        window.removeEventListener('pointermove', move)
        document.removeEventListener('pointerover', over)
        document.removeEventListener('pointerup', over)
        document.removeEventListener('mouseleave', leaveWindow)
        document.removeEventListener('mouseenter', enterWindow)
        document.body.classList.remove('cursor-none')
      }
    },
  )
})

onBeforeUnmount(() => {
  mm?.revert()
})
</script>

<template>
  <div ref="ring" class="cursor-ring" aria-hidden="true" />
  <div ref="dot" class="cursor-dot" aria-hidden="true" />
</template>

<style scoped>
.cursor-ring,
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
  pointer-events: none;
  border-radius: 9999px;
  opacity: 0;
  visibility: hidden;
  mix-blend-mode: difference;
  will-change: transform;
}
.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid #fff;
}
.cursor-dot {
  width: 6px;
  height: 6px;
  background: #fff;
}
</style>
