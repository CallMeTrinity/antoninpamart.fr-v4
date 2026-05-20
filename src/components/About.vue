<script setup lang="ts">
const studies = [
  { name: 'Master MIAGE · Lyon', period: '2025 — 2027' },
  { name: 'BUT MMI · Grenoble', period: '2023 — 2025' },
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
  { name: 'La Haute Société · Stage', period: '2026' },
  { name: 'La Haute Société · Alternance', period: '2024 — 2025' },
  { name: 'Mezcalito · Stage Back-End', period: '2024' },
]

const MAX_LEVEL = 5
</script>

<template>
  <section id="about" class="section grid-container">
    <div class="section-head reveal">
      <div class="section-num">03 / À propos</div>
      <h2 class="section-title">
        Adapter, Optimiser, <em>Produire</em>.
      </h2>
    </div>

    <div class="about-grid reveal grid grid-cols-2 max-[880px]:grid-cols-1 items-start gap-[clamp(32px,6vw,96px)]">
      <div class="prose-col space-y-6">
        <p>
          Je suis Antonin, dev junior à Grenoble. Principalement back-end, mais
          <em>full-stack</em> quand il faut. Actuellement en stage à La Haute
          Société, où j'ai été alternant l'an dernier, et où je devrais l'être
          à nouveau prochainement.
        </p>
        <p>
          Ce qui me tient à cœur : <em>apprendre</em>, garder les choses
          simples, et résoudre les problèmes plutôt que les contourner. Quand
          un truc devient compliqué, c'est souvent le signe qu'il faut le
          repenser.
        </p>
        <p>
          En dehors de l'écran : la <em>salle</em>, la course ou le vélo selon
          l'humeur. Trois disciplines pour la même excuse : rester en <s>bonne santé</s> vie.
        </p>
      </div>

      <div class="about-side grid gap-8 font-jet text-[11px] uppercase tracking-wider">
        <div>
          <div class="text-faint mb-2">Études</div>
          <div class="text-fg text-[12px] leading-[1.7]">
            <div
              v-for="s in studies"
              :key="s.name"
              class="flex justify-between py-1 border-b border-dashed border-line"
            >
              <span>{{ s.name }}</span><span>{{ s.period }}</span>
            </div>
          </div>
        </div>

        <div>
          <div class="text-faint mb-2">Stack technique</div>
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
          <div class="text-faint mb-2">Expériences</div>
          <div class="text-fg text-[12px] leading-[1.7]">
            <div
              v-for="e in experiences"
              :key="e.name"
              class="flex justify-between py-1 border-b border-dashed border-line"
            >
              <span>{{ e.name }}</span><span>{{ e.period }}</span>
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
.prose-col em {
  @apply font-instrument italic font-normal text-accent;
}
</style>
