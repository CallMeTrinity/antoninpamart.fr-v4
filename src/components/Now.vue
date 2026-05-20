<script setup lang="ts">
import { computed } from 'vue'
import { TECH } from '@/data/projects'

const seq = computed(() => [...TECH, ...TECH, ...TECH])

const lines = ['building', 'reading', 'listening'] as const
</script>

<template>
  <section id="now" class="section grid-container">
    <div class="section-head reveal">
      <div class="section-num">{{ $t('now.sectionNum') }}</div>
      <h2 class="section-title" v-html="$t('now.title')" />
    </div>

    <div
      class="
        now-card reveal
        grid grid-cols-[180px_1fr] max-[880px]:grid-cols-1
        items-start gap-[clamp(20px,4vw,48px)]
        rounded-xl border border-line bg-panel backdrop-blur-xl
        p-[clamp(24px,4vw,40px)]
      "
    >
      <div class="font-jet text-[11px] uppercase tracking-wider text-muted flex items-center gap-2">
        <span class="live-dot" />
        {{ $t('now.updated') }}<br />{{ $t('now.updatedDate') }}
      </div>

      <div class="grid gap-3">
        <div
          v-for="l in lines"
          :key="l"
          class="
            grid grid-cols-[130px_1fr] max-[880px]:grid-cols-1 max-[880px]:gap-1
            gap-4 items-baseline pb-3 border-b border-line last:border-b-0
          "
        >
          <div class="font-jet text-[11px] uppercase tracking-wider text-muted">
            {{ $t(`now.lines.${l}.when`) }}
          </div>
          <div class="what text-[17px] leading-normal" v-html="$t(`now.lines.${l}.html`)" />
        </div>
      </div>
    </div>

    <div class="marquee reveal overflow-hidden border-y border-line py-7 mt-16 hover:[&_.marquee-track]:[animation-play-state:paused]">
      <div class="marquee-track flex gap-16 w-max font-geist font-medium text-fg animate-marquee">
        <span v-for="(s, i) in seq" :key="i">
          {{ s }}<span class="text-accent inline-block px-1.5"> ✦ </span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.what :deep(em) {
  @apply font-instrument italic font-normal text-accent;
}

.section-title :deep(em),
.section-title em {
  @apply font-instrument italic font-normal text-accent;
}

.marquee-track {
  font-size: clamp(36px, 5vw, 64px);
  letter-spacing: -0.02em;
  white-space: nowrap;
}
</style>
