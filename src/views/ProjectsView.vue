<script setup lang="ts">
import ProjectsSection from '../components/ProjectsSection.vue';
defineProps<{ isDark: boolean }>();
</script>

<template>
  <div class="pt-24 transition-colors duration-500">
    <ProjectsSection :is-dark="isDark" />
  </div>
</template>
