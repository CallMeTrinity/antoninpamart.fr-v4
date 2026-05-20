<script setup lang="ts">
const studies = [
  { key: 'about.studiesList.miage', period: '2025 — 2027' },
  { key: 'about.studiesList.mmi', period: '2023 — 2025' },
]

const stacks = [
  { name: 'Symfony', level: 4 },
  { name: 'Craft CMS', level: 4 },
  { name: 'Vue / Nuxt', level: 4 },
  { name: 'Tailwind CSS', level: 4 },
  { name: 'TypeScript', level: 3 },
  { name: 'Python', level: 2 },
  { name: 'Java', level: 2 },
]

const experiences = [
  { key: 'about.experiencesList.lhsStage', period: '2026' },
  { key: 'about.experiencesList.lhsAlt', period: '2024 — 2025' },
  { key: 'about.experiencesList.mezcalito', period: '2024' },
]

const MAX_LEVEL = 5
</script>

<template>
  <section id="about" class="section grid-container">
    <div class="section-head reveal">
      <div class="section-num">{{ $t('about.sectionNum') }}</div>
      <h2 class="section-title" v-html="$t('about.title')" />
    </div>

    <div class="about-grid reveal grid grid-cols-2 max-[880px]:grid-cols-1 items-start gap-[clamp(32px,6vw,96px)]">
      <div class="prose-col space-y-6">
        <p v-html="$t('about.p1')" />
        <p v-html="$t('about.p2')" />
        <p v-html="$t('about.p3')" />
      </div>

      <div class="about-side grid gap-8 font-jet text-[11px] uppercase tracking-wider">
        <div>
          <div class="text-faint mb-2">{{ $t('about.studies') }}</div>
          <div class="text-fg text-[12px] leading-[1.7]">
            <div
              v-for="s in studies"
              :key="s.key"
              class="flex justify-between py-1 border-b border-dashed border-line"
            >
              <span>{{ $t(s.key) }}</span><span>{{ s.period }}</span>
            </div>
          </div>
        </div>

        <div>
          <div class="text-faint mb-2">{{ $t('about.stack') }}</div>
          <div class="text-fg text-[12px] leading-[1.7]">
            <div
              v-for="s in stacks"
              :key="s.name"
              class="flex justify-between items-center py-1 border-b border-dashed border-line"
            >
              <span>{{ s.name }}</span>
              <span class="gauge flex gap-1" :aria-label="`${s.level} / ${MAX_LEVEL}`">
                <span
                  v-for="n in MAX_LEVEL"
                  :key="n"
                  class="dot w-1.5 h-1.5 rounded-full"
                  :class="n <= s.level ? 'bg-accent' : 'bg-line-strong'"
                />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div class="text-faint mb-2">{{ $t('about.experiences') }}</div>
          <div class="text-fg text-[12px] leading-[1.7]">
            <div
              v-for="e in experiences"
              :key="e.key"
              class="flex justify-between py-1 border-b border-dashed border-line"
            >
              <span>{{ $t(e.key) }}</span><span>{{ e.period }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.prose-col p {
  font-size: clamp(17px, 1.4vw, 20px);
  line-height: 1.55;
  text-wrap: pretty;
  max-width: 44ch;
  margin: 0;
}
.prose-col :deep(em),
.prose-col em {
  @apply font-instrument italic font-normal text-accent;
}

.section-title :deep(em),
.section-title em {
  @apply font-instrument italic font-normal text-accent;
}
</style>
