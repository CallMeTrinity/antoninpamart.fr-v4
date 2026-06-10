<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLiveTime } from '@/composables/useLiveTime'
import { setLocale, type Locale } from '@/assets/local'

const { time } = useLiveTime({ hour: '2-digit', minute: '2-digit', hour12: false })
const { locale } = useI18n()

const nav: { href: string; key: string }[] = [
  { href: '#work', key: 'header.work' },
  { href: '#about', key: 'header.about' },
  { href: '#now', key: 'header.now' },
  { href: '#contact', key: 'header.contact' },
]

const locales: Locale[] = ['fr', 'en']
</script>

<template>
  <nav
    class="
      fixed inset-x-0 top-0 z-40
      grid items-center gap-6
      grid-cols-[1fr_auto_1fr] max-[880px]:grid-cols-[1fr_auto]
      py-4 px-(--pad-x)
      font-jet text-[11px] uppercase tracking-wider
      bg-[linear-gradient(to_bottom,var(--color-paper)_60%,transparent)]
    "
  >
    <div class="flex items-center gap-2.5 text-fg">
      <span class="dot" />
      <span>Antonin Pamart · {{ $t('header.developer') }}</span>
    </div>

    <div class="text-muted text-center max-[880px]:hidden">
      {{ time }} GMT · {{ $t('header.available') }} Q3 2026
    </div>

    <div class="flex justify-end items-center gap-5.5">
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="text-muted transition-colors hover:text-fg max-[680px]:hidden"
      >
        {{ $t(item.key) }}
      </a>

      <div class="flex items-center gap-1.5 pl-4 border-l border-line max-[680px]:pl-0 max-[680px]:border-l-0">
        <template v-for="(l, i) in locales" :key="l">
          <button
            type="button"
            class="transition-colors cursor-pointer"
            :class="locale === l ? 'text-fg' : 'text-muted hover:text-fg'"
            :aria-pressed="locale === l"
            @click="setLocale(l)"
          >
            {{ l.toUpperCase() }}
          </button>
          <span v-if="i < locales.length - 1" class="text-faint">/</span>
        </template>
      </div>
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
