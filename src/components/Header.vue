<script setup lang="ts">
import { ref } from 'vue';
const time = ref();
setInterval(() => {
  time.value = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }).replace(",", "");
}, 1000)

const nav : { href: string, text: string}[] = [
    { href: "#", text: "Travaux" },
    { href: "#", text: "A propos" },
    { href: "#", text: "En ce moment" },
    { href: "#", text: "Contact" },
];
</script>

<template>
  <header class="fixed top-0 left-0 right-0 font-jet text-xs uppercase flex justify-between items-center p-4 px-8">
    <div>
      Antonin Pamart · Développeur
    </div>
    <div>{{ time }} GMT </div>
    <nav>
      <ul class="flex gap-4">
        <li v-for="(item, index) in nav" :key="index">
          <a :href="item.href">{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
