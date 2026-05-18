<script setup lang="ts">
import type { Component } from 'vue'
import Header from "@/components/Header.vue";

const sections: Component[] = [
  Header
];
</script>

<template>
  <div>
    <div v-for="(section, index) in sections" :key="index">
      <component :is="section"/>
    </div>
  </div>
</template>
