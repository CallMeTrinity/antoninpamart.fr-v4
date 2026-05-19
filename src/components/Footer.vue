<script setup lang="ts">
import { computed } from 'vue'
import { useLiveTime } from '@/composables/useLiveTime'

const { now } = useLiveTime()
const year = computed(() => now.value.getFullYear())
const updated = computed(() =>
  now.value.toLocaleDateString('fr-FR', { month: 'short', day: '2-digit' }),
)
</script>

<template>
  <footer
    class="flex justify-between border-t border-line py-6 px-[var(--pad-x)]
           font-jet text-[11px] uppercase tracking-wider text-muted"
  >
    <span>© {{ year }} · Antonin Pamart</span>
    <span>Dernière mise à jour · {{ updated }}</span>
  </footer>
</template>
