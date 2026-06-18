<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { introDone, prefersReducedMotion } from '@/composables/useIntro'

const root = ref<HTMLElement | null>(null)
const count = ref(0)
const done = ref(false)

let ctx: gsap.Context | null = null

const finish = () => {
  done.value = true
  document.body.style.overflow = ''
  introDone.value = true
}

onMounted(() => {
  if (prefersReducedMotion()) {
    count.value = 100
    finish()
    return
  }

  document.body.style.overflow = 'hidden'

  ctx = gsap.context(() => {
    const counter = { v: 0 }
    const tl = gsap.timeline({ onComplete: finish })

    tl.to('.pl-line', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0)
      .to(
        counter,
        {
          v: 100,
          duration: 1.1,
          ease: 'power2.inOut',
          snap: { v: 1 },
          onUpdate: () => (count.value = Math.round(counter.v)),
        },
        0,
      )
      .to('.pl-inner', { autoAlpha: 0, duration: 0.4, ease: 'power2.out' }, '+=0.15')
      .to(root.value, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '<0.1')
  }, root)
})

onUnmounted(() => {
  ctx?.revert()
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-show="!done"
    ref="root"
    class="preloader fixed inset-0 z-50 bg-paper flex flex-col justify-end p-(--pad-x) pb-10"
    aria-hidden="true"
  >
    <div class="pl-inner flex items-end justify-between font-jet text-fg">
      <span class="text-[clamp(48px,10vw,120px)] font-medium leading-none tabular-nums">
        {{ String(count).padStart(3, '0') }}
      </span>
      <span class="text-[11px] uppercase tracking-wider text-muted mb-2">
        Antonin Pamart
      </span>
    </div>
    <div class="pl-line mt-6 h-px w-full bg-fg origin-left scale-x-0" />
  </div>
</template>
