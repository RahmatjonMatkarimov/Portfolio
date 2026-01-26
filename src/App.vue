<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

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
  <div class="min-h-screen transition-colors duration-500 ease-in-out relative"
       :class="isDark ? 'bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'">
    

    <div class="grain-overlay mix-blend-overlay opacity-20 pointer-events-none fixed inset-0 z-[99]"></div>
    
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />
    
    <main>
      <router-view :is-dark="isDark" />
    </main>
    
    <footer class="py-12 text-center text-sm relative z-10">
       <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
       <div class="container mx-auto px-6">
          <p class="text-slate-500 dark:text-slate-500 font-medium">
            &copy; 2026 Rahmatjon Matkarimov. <span class="hidden sm:inline">Crafted with precision.</span>
          </p>
       </div>
    </footer>
  </div>
</template>

<style>

::selection {
    @apply bg-primary/30 text-white;
}
</style>