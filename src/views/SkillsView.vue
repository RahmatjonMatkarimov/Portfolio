<script setup lang="ts">
import SkillsSection from '../components/SkillsSection.vue';
defineProps<{ isDark: boolean }>();
</script>

<template>
  <div class="pt-24 transition-colors duration-500">
    <SkillsSection :is-dark="isDark" />
  </div>
</template>
