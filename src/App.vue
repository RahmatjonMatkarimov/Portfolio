<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { usePortfolioStore } from './stores/portfolio';
import { storeToRefs } from 'pinia';

const isDark = ref(true);
const store = usePortfolioStore();
const { personalInfo } = storeToRefs(store);

onMounted(() => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
});
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 ease-in-out relative bg-[#020617] text-slate-100 dark">

    <div
      class="grain-overlay mix-blend-overlay opacity-5 md:opacity-10 pointer-events-none fixed inset-0 z-[99] will-change-opacity">
    </div>

    <Navbar :is-dark="isDark" />

    <main>
      <router-view :is-dark="isDark" />
    </main>

    <footer class="py-12 text-center text-sm relative z-10 transition-colors duration-500">
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent">
      </div>
      <div class="container mx-auto px-6">
        <p class="text-slate-500 dark:text-slate-500 font-medium opacity-70">
          &copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. <span class="hidden sm:inline">{{
            store.t.footer.crafted }}</span>
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