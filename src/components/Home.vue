<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Work from '@/components/Work.vue'
import About from '@/components/About.vue'
import Now from '@/components/Now.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <Header />
  <main>
    <Hero />
    <Work />
    <About />
    <Now />
    <Contact />
  </main>
  <Footer />
</template>
