<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = 'contact.antonin.pamart@gmail.fr'
const ctaRef = ref<HTMLAnchorElement | null>(null)
const copied = ref(false)

const move = (e: MouseEvent) => {
  const el = ctaRef.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const dx = e.clientX - (r.left + r.width / 2)
  const dy = e.clientY - (r.top + r.height / 2)
  const dist = Math.hypot(dx, dy)
  if (dist < 180) {
    const k = (1 - dist / 180) * 0.35
    el.style.transform = `translate(${dx * k}px, ${dy * k}px)`
  } else {
    el.style.transform = ''
  }
}
const leave = () => {
  if (ctaRef.value) ctaRef.value.style.transform = ''
}

onMounted(() => {
  window.addEventListener('mousemove', move)
  ctaRef.value?.addEventListener('mouseleave', leave)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', move)
  ctaRef.value?.removeEventListener('mouseleave', leave)
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
    class="reveal grid-container pt-[clamp(100px,18vh,200px)] pb-16 text-left"
  >
    <div class="font-jet text-[11px] uppercase tracking-wider text-muted mb-6">
      {{ $t('contact.sectionNum') }}
    </div>

    <h2 class="contact-title font-geist font-medium m-0 mb-12 text-balance" v-html="$t('contact.title')" />

    <a
      ref="ctaRef"
      :href="`mailto:${email}`"
      class="text-paper cta inline-flex items-center gap-3.5 px-7 py-4.5 rounded-full
             bg-fg font-jet text-[13px] uppercase tracking-widest
             cursor-pointer transition-[background,transform] hover:bg-accent will-change-transform"
      @click="copy"
    >
      <span>{{ copied ? t('contact.copied') : email }}</span>
      <span class="arrow transition-transform duration-200">↗</span>
    </a>

    <div class="flex flex-wrap gap-8 mt-16 font-jet text-[12px] uppercase tracking-wider text-muted">
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
