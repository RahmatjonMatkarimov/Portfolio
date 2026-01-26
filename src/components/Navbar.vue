<script setup lang="ts">
import { ref } from 'vue';
import { Sun, Moon, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

defineProps<{ isDark: boolean }>();
const emit = defineEmits(['toggle-theme']);

const isMobileMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Check if a route is active
const isActive = (path: string) => route.path === path;
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
       :class="[isMobileMenuOpen ? 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800' : 'bg-transparent backdrop-blur-none']">
    
    <!-- Floating Pill Container (Visible on Desktop mostly) -->
    <div class="container mx-auto px-6 py-6">
      <div class="flex justify-between items-center transition-all duration-300"
           :class="[isMobileMenuOpen ? '' : 'p-2 md:px-6 md:py-3 md:bg-white/70 md:dark:bg-slate-900/70 md:backdrop-blur-xl md:border md:border-white/20 md:dark:border-white/5 md:rounded-full md:shadow-lg md:mx-auto md:max-w-4xl']">
          
        <router-link to="/" class="text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-300 flex items-center gap-1"
           :class="isDark ? 'text-white' : 'text-slate-900'">
          <div class="h-2 w-2 rounded-full bg-primary animate-pulse"></div> RM.
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-2">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
             class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/5"
             :class="[isActive(link.path) ? 'text-slate-900 bg-white shadow-md dark:bg-white/10 dark:text-white font-bold' : (isDark ? 'text-slate-300' : 'text-slate-600')]">
            {{ link.name }}
          </router-link>
          
          <div class="w-px h-5 bg-slate-200 dark:bg-white/10 mx-2"></div>

          <button @click="$emit('toggle-theme')" 
                  class="p-2 rounded-full transition-colors hover:bg-slate-100 dark:hover:bg-white/5 group"
                  :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <div class="relative w-5 h-5 overflow-hidden">
                <Sun v-if="isDark" class="w-5 h-5 text-yellow-400 absolute transition-transform duration-500 rotate-0 group-hover:rotate-180" />
                <Moon v-else class="w-5 h-5 text-slate-600 absolute transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
            </div>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <button @click="$emit('toggle-theme')" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
            <Sun v-if="isDark" class="w-5 h-5 text-yellow-400" />
            <Moon v-else class="w-5 h-5 text-slate-600" />
          </button>
          <button @click="toggleMobileMenu" class="p-2 px-3 rounded-full bg-slate-100 dark:bg-white/10" :class="isDark ? 'text-white' : 'text-slate-900'">
             <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase">Menu</span>
                <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
                <X v-else class="w-5 h-5" />
             </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="isMobileMenuOpen" 
         class="md:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] overflow-y-auto backdrop-blur-xl transition-all duration-300 border-t border-slate-200 dark:border-slate-800"
         :class="isDark ? 'bg-slate-900/95' : 'bg-white/95'">
      <div class="container mx-auto px-6 py-8 flex flex-col space-y-6">
        <router-link v-for="(link, index) in navLinks" :key="link.name" :to="link.path"
           @click="isMobileMenuOpen = false"
           class="text-4xl font-bold tracking-tight transition-colors hover:text-primary animate-fade-in-up"
           :style="{ animationDelay: index * 0.05 + 's' }"
           :class="[isActive(link.path) ? 'text-primary' : (isDark ? 'text-slate-300' : 'text-slate-900')]">
          {{ link.name }}
          <span v-if="isActive(link.path)" class="ml-2 text-lg align-top text-primary">●</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>
