<script setup lang="ts">
import ContactSection from '../components/ContactSection.vue';
defineProps<{ isDark: boolean }>();
</script>

<template>
  <div class="pt-24 transition-colors duration-500">
    <ContactSection :is-dark="isDark" />
  </div>
</template>
