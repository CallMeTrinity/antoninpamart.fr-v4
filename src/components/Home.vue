<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header.vue'
import Preloader from '@/components/Preloader.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import Hero from '@/components/Hero.vue'
import Work from '@/components/Work.vue'
import About from '@/components/About.vue'
import Now from '@/components/Now.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { initSmoothScroll, destroySmoothScroll } from '@/composables/useSmoothScroll'

useScrollReveal()

onMounted(async () => {
  await nextTick()
  initSmoothScroll()
  // Custom fonts shift layout: recompute trigger positions once they're ready.
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
})

onUnmounted(() => {
  destroySmoothScroll()
})
</script>

<template>
  <Preloader />
  <CustomCursor />
  <Header />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <Hero />
        <Work />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>
