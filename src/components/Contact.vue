<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import { useSectionFx, splitLines, fadeUp } from '@/composables/useSectionFx'

const { t } = useI18n()

const email = 'contact.antonin.pamart@gmail.fr'
const root = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLAnchorElement | null>(null)
const copied = ref(false)

// --- Magnetic CTA (desktop, motion-allowed only), driven by gsap.quickTo ---
let xTo: ((v: number) => void) | null = null
let yTo: ((v: number) => void) | null = null
let magnetMM: ReturnType<typeof gsap.matchMedia> | null = null

const move = (e: MouseEvent) => {
  const el = ctaRef.value
  if (!el || !xTo || !yTo) return
  const r = el.getBoundingClientRect()
  const dx = e.clientX - (r.left + r.width / 2)
  const dy = e.clientY - (r.top + r.height / 2)
  const dist = Math.hypot(dx, dy)
  if (dist < 180) {
    const k = (1 - dist / 180) * 0.35
    xTo(dx * k)
    yTo(dy * k)
  } else {
    xTo(0)
    yTo(0)
  }
}
const leave = () => {
  xTo?.(0)
  yTo?.(0)
}

onMounted(() => {
  magnetMM = gsap.matchMedia()
  magnetMM.add('(min-width: 880px) and (prefers-reduced-motion: no-preference)', () => {
    const el = ctaRef.value
    if (!el) return
    xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' })
    yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' })
    window.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      xTo = yTo = null
    }
  })
})
onBeforeUnmount(() => {
  magnetMM?.revert()
})

// --- Scroll reveals (title split, CTA pop, links) ---
useSectionFx(root, (scope) => {
  const title = scope.querySelector('.contact-title')
  const num = scope.querySelector('.contact-num')
  const cta = scope.querySelector('.cta')
  const linksEl = scope.querySelector('.contact-links')
  splitLines(title, title)
  fadeUp(num, num, { y: 16, duration: 0.7 })
  fadeUp(cta, cta, { y: 0, scale: 0.9, duration: 0.7, ease: 'back.out(1.6)' })
  fadeUp(scope.querySelectorAll('.contact-links > a'), linksEl, { stagger: 0.1, y: 16, duration: 0.6 })
})

const copy = async (e: MouseEvent) => {
  e.preventDefault()
  try {
    await navigator.clipboard?.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    /* ignore */
  }
}

const links = [
  { href: 'https://github.com/CallMeTrinity', text: 'GitHub' },
  { href: '/cv_pamart.pdf', text: 'Read.cv', download: 'cv_pamart.pdf' },
  { href: 'https://www.linkedin.com/in/antoninpamart/', text: 'LinkedIn' },
]
</script>

<template>
  <section
    id="contact"
    ref="root"
    class="grid-container pt-[clamp(100px,18vh,200px)] pb-16 text-left"
  >
    <div class="contact-num font-jet text-[11px] uppercase tracking-wider text-muted mb-6">
      {{ $t('contact.sectionNum') }}
    </div>

    <h2 class="contact-title font-geist font-medium m-0 mb-12" v-html="$t('contact.title')" />

    <a
      ref="ctaRef"
      :href="`mailto:${email}`"
      class="text-paper cta inline-flex items-center gap-3.5 px-7 py-4.5 rounded-full
             bg-fg font-jet text-[13px] uppercase tracking-widest
             cursor-pointer transition-colors hover:bg-accent will-change-transform
             max-[680px]:w-full max-[680px]:justify-center max-[680px]:text-[11px] max-[680px]:tracking-wider"
      @click="copy"
    >
      <span>{{ copied ? t('contact.copied') : email }}</span>
      <span class="arrow transition-transform duration-200">↗</span>
    </a>

    <div class="contact-links flex flex-wrap gap-8 mt-16 font-jet text-[12px] uppercase tracking-wider text-muted">
      <a
        v-for="l in links"
        :key="l.text"
        :href="l.href"
        :download="l.href.includes('cv') ? 'cv_pamart.pdf' : undefined"
        target="_blank"
        class="inline-flex items-center gap-2 transition-colors hover:text-fg after:content-['↗'] after:opacity-50"
      >
        {{ l.text }}
      </a>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.contact-title {
  font-size: clamp(40px, 7vw, 96px);
  letter-spacing: -0.04em;
  line-height: 0.95;
}
.contact-title :deep(em),
.contact-title em {
  @apply font-instrument italic font-normal text-accent;
}

.cta { padding: 18px 28px; }
.cta:hover .arrow { transform: translate(4px, -4px); }
</style>
