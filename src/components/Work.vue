<script setup lang="ts">
import { ref } from 'vue'
import { PROJECTS } from '@/data/projects'

const expanded = ref<number | null>(null)
const toggle = (i: number) => (expanded.value = expanded.value === i ? null : i)
const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="work" class="section grid-container">
    <div class="section-head reveal">
      <div class="section-num">{{ $t('work.sectionNum') }}</div>
      <h2 class="section-title" v-html="$t('work.title')" />
    </div>

    <div class="work-list reveal border-t border-line">
      <div
        v-for="(p, i) in PROJECTS"
        :key="p.id"
        class="work-row"
        :class="{ expanded: expanded === i }"
        @click="toggle(i)"
      >
        <template v-if="expanded === i">
          <div class="row-grid">
            <div class="row-idx font-jet text-[11px] text-muted">/ {{ pad(i) }}</div>
            <div class="row-name">{{ $t(`work.projects.${p.id}.name`) }}</div>
            <div class="row-stack font-jet text-[11px] uppercase tracking-wider text-muted flex gap-3.5 flex-wrap">
              <span v-for="s in p.stack" :key="s" class="whitespace-nowrap">{{ s }}</span>
            </div>
            <div class="font-jet text-[11px] text-muted">{{ p.year }}</div>
            <div class="row-arr">−</div>
          </div>
          <div class="expanded-body">
            <div></div>
            <div>
              <div class="col-label">{{ $t('work.overview') }}</div>
              <p class="m-0 max-w-[52ch] leading-[1.55]">{{ $t(`work.projects.${p.id}.blurb`) }}</p>
              <div class="flex gap-3 mt-6">
                <a :href="p.link" class="btn btn-primary" @click.stop>{{ $t('work.viewProject') }}</a>
                <a :href="p.link" class="btn" @click.stop>{{ $t('work.readArticle') }}</a>
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <div class="col-label">{{ $t('work.role') }}</div>
                <div>{{ $t(`work.projects.${p.id}.role`) }}</div>
              </div>
              <div>
                <div class="col-label">{{ $t('work.year') }}</div>
                <div>{{ p.year }}</div>
              </div>
              <div>
                <div class="col-label">{{ $t('work.stack') }}</div>
                <div>{{ p.stack.join(' · ') }}</div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="row-idx font-jet text-[11px] text-muted">/ {{ pad(i) }}</div>
          <div class="row-name">{{ $t(`work.projects.${p.id}.name`) }}</div>
          <div class="row-stack font-jet text-[11px] uppercase tracking-wider text-muted flex gap-3.5 flex-wrap">
            <span v-for="s in p.stack" :key="s" class="whitespace-nowrap">{{ s }}</span>
          </div>
          <div class="font-jet text-[11px] text-muted">{{ p.year }}</div>
          <div class="row-arr">+</div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/main.css";

.work-row,
.row-grid {
  display: grid;
  grid-template-columns: 56px minmax(0, 2fr) minmax(0, 1.6fr) auto 28px;
  gap: clamp(16px, 3vw, 48px);
  align-items: center;
}
.work-row {
  @apply border-b border-line cursor-pointer relative;
  min-height: var(--row-h);
  padding: 0 8px;
  transition: padding .35s cubic-bezier(.2,.7,.3,1), color .25s;
}
.work-row::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 0;
  background: var(--color-accent-soft);
  transition: width .35s cubic-bezier(.2,.7,.3,1);
  z-index: -1;
}
.work-row:hover:not(.expanded) { padding-left: 24px; padding-right: 24px; }
.work-row:hover::before { width: 100%; }
.work-list:hover .work-row:not(:hover):not(.expanded) { @apply text-faint; }
.work-list:hover .work-row:not(:hover):not(.expanded) .row-name { @apply text-faint; }

.row-name {
  @apply font-medium leading-none truncate;
  font-size: clamp(22px, 2.4vw, 34px);
  letter-spacing: -0.02em;
  transition: color .25s;
}
.row-arr {
  @apply font-jet text-base text-muted text-right;
  transition: transform .25s, color .25s;
}
.work-row:hover .row-arr { @apply text-accent; transform: translateX(6px); }

.work-row.expanded {
  display: block;
  padding: 28px 24px 36px;
}
.expanded-body {
  display: grid;
  grid-template-columns: 56px 1fr 1fr;
  gap: clamp(16px, 3vw, 48px);
  padding-top: 24px;
}
.col-label {
  @apply font-jet text-[11px] uppercase tracking-wider text-faint mb-2;
}

.section-title :deep(em),
.section-title em {
  @apply font-instrument italic font-normal text-accent;
}

.btn {
  @apply inline-flex items-center gap-2 px-4 py-2.5 rounded-full
         border border-line-strong bg-transparent text-fg
         font-jet text-[11px] uppercase tracking-wider cursor-pointer;
  transition: background .2s, border-color .2s, color .2s;
}
.btn:hover { @apply bg-accent text-paper border-accent; }
.btn-primary { @apply bg-fg text-paper border-fg; }
.btn-primary:hover { @apply bg-accent border-accent; }

@media (max-width: 880px) {
  .work-row,
  .row-grid {
    grid-template-columns: 32px 1fr auto;
  }
  .work-row .row-stack,
  .row-grid .row-stack,
  .work-row .row-arr,
  .row-grid .row-arr { display: none; }
  .expanded-body { grid-template-columns: 1fr; }
}
</style>
