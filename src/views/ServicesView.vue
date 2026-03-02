<script setup lang="ts">
import ServicesSection from '../components/ServicesSection.vue';
defineProps<{ isDark: boolean }>();
</script>

<template>
  <div class="pt-24 transition-colors duration-500">
    <ServicesSection :is-dark="isDark" />
  </div>
</template>
