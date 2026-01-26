<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import CustomCursor from './components/CustomCursor.vue';

const isDark = ref(true);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  updateTheme();
});

watch(isDark, updateTheme);
</script>

<template>
  <div class="min-h-screen transition-colors duration-300"
       :class="isDark ? 'bg-slate-900' : 'bg-slate-50'">
    <CustomCursor />
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <router-view :is-dark="isDark" />
    </main>
    <footer class="py-6 text-center text-sm border-t" 
            :class="isDark ? 'bg-slate-900 text-slate-500 border-slate-800' : 'bg-slate-50 text-slate-400 border-slate-200'">
      <p>&copy; 2026 Rahmatjon Matkarimov. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/* Global styles if needed */
</style>