<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLiveTime } from '@/composables/useLiveTime'

const { locale } = useI18n()
const { now } = useLiveTime()

const year = computed(() => now.value.getFullYear())
const updated = computed(() =>
  now.value.toLocaleDateString(locale.value === 'en' ? 'en-US' : 'fr-FR', {
    month: 'short',
    day: '2-digit',
  }),
)
</script>

<template>
  <footer
    class="flex justify-between border-t border-line py-6 px-(--pad-x)
           font-jet text-[11px] uppercase tracking-wider text-muted"
  >
    <span>© {{ year }} · Antonin Pamart</span>
    <span>{{ $t('footer.updated') }} · {{ updated }}</span>
  </footer>
</template>
