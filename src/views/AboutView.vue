<script setup lang="ts">
import AboutSection from '../components/AboutSection.vue';
defineProps<{ isDark: boolean }>();
</script>

<template>
  <div class="pt-24 transition-colors duration-500">
    <AboutSection :is-dark="isDark" />
  </div>
</template>
