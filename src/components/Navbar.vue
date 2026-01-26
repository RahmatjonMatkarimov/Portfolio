<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Sun, Moon, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

defineProps<{ isDark: boolean }>();
const emit = defineEmits(['toggle-theme']);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
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
  if(isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = '';
  }
};

const closeMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
}


const isActive = (path: string) => route.path === path;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out"
       :class="[
         isMobileMenuOpen ? 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800' : 'bg-transparent',
         'py-4'
       ]">
    

    <div class="container mx-auto px-4 md:px-6">
      <div class="flex justify-between items-center transition-all duration-500"
           :class="[
             !isMobileMenuOpen 
                ? 'px-4 py-3 md:px-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 mx-auto max-w-5xl' 
                : 'bg-transparent'
           ]">
          
        <router-link to="/" class="group text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-300 flex items-center gap-1 z-50 relative"
           :class="isDark ? 'text-white' : 'text-slate-900'" @click="closeMenu">
          <div class="h-2 w-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div> 
          <span>RM<span class="text-primary">.</span></span>
        </router-link>


        <div class="hidden md:flex items-center gap-2">
          <div class="flex p-1 bg-slate-100/50 dark:bg-white/5 rounded-full border border-white/10 dark:border-white/5 backdrop-blur-sm">
             <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
                class="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group"
                :class="[isActive(link.path) ? 'text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5']">
                
                <span v-if="isActive(link.path)" class="absolute inset-0 bg-white dark:bg-slate-800 rounded-full -z-10 transition-all duration-300 shadow-sm"></span>
                {{ link.name }}
             </router-link>
          </div>
          
          <div class="w-px h-6 bg-slate-200 dark:bg-white/10 mx-2"></div>

          <button @click="$emit('toggle-theme')" 
                  class="p-2.5 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 group relative overflow-hidden"
                  :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <Sun v-if="isDark" class="w-5 h-5 text-amber-400 transform transition-transform duration-500 group-hover:rotate-180" />
            <Moon v-else class="w-5 h-5 text-slate-600 transform transition-transform duration-500 group-hover:-rotate-12" />
          </button>
        </div>


        <div class="md:hidden flex items-center space-x-3 z-50">
          <button @click="$emit('toggle-theme')" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <Sun v-if="isDark" class="w-5 h-5 text-amber-400" />
            <Moon v-else class="w-5 h-5 text-slate-600" />
          </button>
          
          <button @click="toggleMobileMenu" class="relative group p-2 rounded-full" :class="isDark ? 'text-white' : 'text-slate-900'">
             <div class="relative flex overflow-hidden items-center justify-center w-[24px] h-[24px] transform transition-all duration-200">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div class="bg-current h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{ 'translate-x-10': isMobileMenuOpen }"></div>
                    <div class="bg-current h-[2px] w-7 rounded transform transition-all duration-300 delay-75" :class="{ 'translate-x-10': isMobileMenuOpen }"></div>
                    <div class="bg-current h-[2px] w-7 transform transition-all duration-300 origin-left delay-150" :class="{ 'translate-x-10': isMobileMenuOpen }"></div>

                    <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0" :class="{ 'translate-x-0 w-12': isMobileMenuOpen }">
                        <div class="absolute bg-current h-[2px] w-5 transform transition-all duration-500 rotate-45 delay-300"></div>
                        <div class="absolute bg-current h-[2px] w-5 transform transition-all duration-500 -rotate-45 delay-300"></div>
                    </div>
                </div>
             </div>
          </button>
        </div>
      </div>
    </div>


    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translateY(-20px)"
      enter-to-class="opacity-100 translateY(0)"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translateY(0)"
      leave-to-class="opacity-0 translateY(-20px)"
    >
        <div v-show="isMobileMenuOpen" 
             class="fixed inset-0 z-40 bg-white/95 dark:bg-slate-900/95 pt-24 px-6 flex flex-col items-center justify-start overflow-hidden backdrop-blur-md">
             

          <div class="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div class="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>
             
          <div class="w-full flex flex-col items-center space-y-6 relative z-10 mt-10">
            <template v-for="(link, index) in navLinks" :key="link.name">
                <router-link :to="link.path"
                @click="closeMenu"
                class="text-4xl font-bold tracking-tight transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-purple-500 transform hover:scale-105"
                :class="[isActive(link.path) ? 'text-primary' : (isDark ? 'text-slate-300' : 'text-slate-900')]"
                :style="{ animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s` }">
                {{ link.name }}
                </router-link>
            </template>
          </div>
          
          <div class="mt-auto mb-10 text-center animate-fade-in-up" style="animation-delay: 0.5s">
             <p class="text-slate-500 dark:text-slate-400 text-sm">Let's build something amazing together.</p>
          </div>
        </div>
    </Transition>
  </nav>
</template>

<style scoped>
</style>
