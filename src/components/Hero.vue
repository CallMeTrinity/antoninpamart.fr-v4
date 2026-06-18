<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { useLiveTime } from '@/composables/useLiveTime'
import { introDone } from '@/composables/useIntro'

const name = 'Antonin Pamart.'
const letters = computed(() => Array.from(name))

const { time } = useLiveTime({
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const root = ref<HTMLElement | null>(null)
const animating = ref(false)
let ctx: gsap.Context | null = null
let heroTl: gsap.core.Timeline | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        paused: true,
        onStart: () => (animating.value = true),
        onComplete: () => (animating.value = false),
      })
      animating.value = true
      tl.from('.hero-meta > div', { y: 20, autoAlpha: 0, stagger: 0.08, duration: 0.7 })
        .from(
          '.ch',
          {
            yPercent: 110,
            autoAlpha: 0,
            stagger: { each: 0.03, from: 'start' },
            duration: 0.9,
            ease: 'power4.out',
            clearProps: 'transform',
          },
          '-=0.25',
        )
        .from('.hero-lede p', { y: 24, autoAlpha: 0, stagger: 0.12, duration: 0.8 }, '-=0.55')
        .from('.hero-foot > *', { y: 16, autoAlpha: 0, stagger: 0.1, duration: 0.6 }, '-=0.45')
      heroTl = tl
      if (introDone.value) tl.play()
      return () => {
        heroTl = null
      }
    })
  }, root)

  watch(introDone, (v) => {
    if (v) heroTl?.play()
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    id="top"
    ref="root"
    class="hero grid-container flex flex-col justify-between min-h-screen pt-24 pb-8 relative"
  >
    <div
      class="hero-meta grid grid-cols-3 max-[880px]:grid-cols-2 gap-4 pt-6
             font-jet text-[11px] uppercase tracking-wider text-muted"
    >
      <div>
        <div class="text-faint mb-1.5">{{ $t('hero.portfolio') }}</div>
        <div class="text-fg">{{ $t('hero.volume') }}</div>
      </div>
      <div>
        <div class="text-faint mb-1.5">{{ $t('hero.nowLabel') }}</div>
        <div class="text-fg flex items-center gap-2">
          <span class="live-dot" />
          Grenoble · {{ time }}
        </div>
      </div>
      <div class="text-right max-[880px]:hidden">
        <div class="text-faint mb-1.5">{{ $t('hero.indexLabel') }}</div>
        <div class="text-fg">{{ $t('hero.indexRange') }}</div>
      </div>
    </div>

    <div>
      <h1
        class="hero-name font-geist font-medium m-0 flex flex-nowrap"
        :class="{ animating }"
        :aria-label="name"
      >
        <span
          v-for="(c, i) in letters"
          :key="i"
          class="ch inline-block"
          :class="{ space: c === ' ' }"
        >{{ c === ' ' ? ' ' : c }}</span>
      </h1>

      <div class="hero-lede grid grid-cols-2 max-[880px]:grid-cols-1 items-end gap-[clamp(24px,6vw,96px)] mt-[clamp(32px,6vh,64px)]">
        <p v-html="$t('hero.lede1')" />
        <p class="justify-self-end max-[880px]:justify-self-start text-left" v-html="$t('hero.lede2')" />
      </div>
    </div>

    <div class="hero-foot flex justify-between items-end font-jet text-[11px] uppercase tracking-wider text-muted">
      <div class="flex items-center gap-2.5">
        <span class="scroll-line inline-block w-8 h-px bg-fg animate-scroll-line" />
        <span>{{ $t('hero.scroll') }}</span>
      </div>
      <div>{{ $t('hero.indexCount') }}</div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.hero-name {
  font-size: min(13vw, 152px);
  line-height: 0.92;
  letter-spacing: -0.04em;
}
.hero-name .ch {
  transition: transform .5s cubic-bezier(.2,.7,.3,1), color .35s;
  will-change: transform;
}
.hero-name.animating .ch {
  transition: none;
}
.hero-name .ch.space { width: 0.32em; }
.hero-name:hover .ch { @apply text-faint; }
.hero-name .ch:hover { @apply text-fg; transform: translateY(-8px); }

.hero-lede p {
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.4;
  max-width: 36ch;
  margin: 0;
  text-wrap: pretty;
}
.hero-lede em {
  @apply font-instrument italic font-normal text-accent;
  padding: 0 2px;
}
</style>
