<script setup lang="ts">
import { useLiveTime } from '@/composables/useLiveTime'

const { time } = useLiveTime({ hour: '2-digit', minute: '2-digit', hour12: false })

const nav: { href: string; text: string }[] = [
  { href: '#work', text: 'Travaux' },
  { href: '#about', text: 'À propos' },
  { href: '#now', text: 'En ce moment' },
  { href: '#contact', text: 'Contact' },
]
</script>

<template>
  <nav
    class="
      fixed inset-x-0 top-0 z-40
      grid items-center gap-6
      grid-cols-[1fr_auto_1fr] max-[880px]:grid-cols-[1fr_auto]
      py-4 px-[var(--pad-x)]
      font-jet text-[11px] uppercase tracking-wider
      bg-[linear-gradient(to_bottom,var(--color-paper)_60%,transparent)]
    "
  >
    <div class="flex items-center gap-2.5 text-fg">
      <span class="dot" />
      <span>Antonin Pamart · Développeur</span>
    </div>

    <div class="text-muted text-center max-[880px]:hidden">
      {{ time }} GMT · Disponible Q3 2026
    </div>

    <div class="flex justify-end gap-[22px]">
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="text-muted transition-colors hover:text-fg"
      >
        {{ item.text }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.dot {
  @apply w-2 h-2 rounded-full bg-accent animate-dot-pulse;
  box-shadow: 0 0 12px var(--color-accent);
}
</style>
