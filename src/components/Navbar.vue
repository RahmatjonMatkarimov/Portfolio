<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Globe, ArrowUpRight } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();
const emit = defineEmits([]);

const store = usePortfolioStore();
const { t, currentLanguage } = storeToRefs(store);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const navLinks = computed(() => [
  { name: t.value.nav.home, path: '/' },
  { name: t.value.nav.about, path: '/about' },
  { name: t.value.nav.projects, path: '/projects' },
  { name: t.value.nav.services, path: '/services' },
  { name: t.value.nav.skills, path: '/skills' },
  { name: t.value.nav.contact, path: '/contact' },
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
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

const toggleLanguage = () => {
  const newLang = currentLanguage.value === 'en' ? 'uz' : 'en';
  store.setLanguage(newLang);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out px-4 md:px-12 py-4 md:py-8"
    :class="[
      isMobileMenuOpen ? 'bg-white dark:bg-slate-900' : 'bg-transparent',
      isScrolled ? 'py-4 md:py-6 px-4 md:px-8' : ''
    ]">

    <div
      class="container mx-auto max-w-[1400px] flex justify-between items-center transition-all duration-700 h-14 md:h-18 px-4 md:px-8 rounded-xl md:rounded-[2rem]"
      :class="[
        isScrolled && !isMobileMenuOpen
          ? 'glass-dark border-white/5 shadow-xl mt-0 md:mt-2 bg-slate-900/40'
          : ''
      ]">

      <router-link to="/" class="group flex items-center gap-3 z-[110] relative" @click="closeMenu"
        aria-label="Rahmatjon Web - Home">
        <span class="text-xl md:text-2xl font-black tracking-tighter text-white">RM<span
            class="text-primary">.</span></span>
      </router-link>


      <div class="hidden lg:flex items-center gap-6 xl:gap-10">
        <div class="flex items-center gap-5 xl:gap-7">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
            class="relative px-2.5 py-1.5 text-[11px] font-black tracking-widest uppercase transition-all duration-500 group/link"
            :class="[isActive(link.path) ? (isDark ? 'text-white' : 'text-slate-900') : 'text-slate-500 hover:text-primary']">

            <span class="relative z-10">{{ link.name }}</span>
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 transition-transform duration-500 origin-right group-hover/link:scale-x-100 group-hover/link:origin-left"
              :class="isActive(link.path) ? 'scale-x-100' : ''"></span>
          </router-link>
        </div>

        <div class="flex items-center gap-3.5 border-l border-white/10 pl-6 xl:pl-10">
          <!-- Language Toggle -->
          <button @click="toggleLanguage"
            class="p-2 md:p-3 rounded-lg md:rounded-xl glass-dark hover:scale-105 transition-all duration-500 group flex items-center gap-2"
            :aria-label="t.nav.langAria + (currentLanguage === 'en' ? 'Uzbek' : 'English')">
            <Globe class="w-3.5 h-3.5 md:w-4.5 md:h-4.5 opacity-50 group-hover:opacity-100" />
            <span class="text-[9px] md:text-[10px] font-black tracking-widest uppercase">{{ currentLanguage }}</span>
          </button>


          <router-link to="/contact"
            class="px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl bg-white dark:bg-white text-slate-900 font-black text-[9px] md:text-[11px] tracking-widest uppercase transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-2"
            :aria-label="t.nav.talk + ' - Bog\'lanish'" :title="t.nav.talk">
            {{ t.nav.talk }}
            <ArrowUpRight class="w-3 h-3 md:w-4 md:h-4" />
          </router-link>
        </div>
      </div>


      <div class="lg:hidden flex items-center space-x-2 md:space-x-4 z-[110]">
        <button @click="toggleLanguage" class="p-2.5 rounded-xl glass-dark flex items-center gap-1.5">
          <Globe class="w-4 h-4 opacity-50" />
          <span class="text-[10px] font-black uppercase tracking-widest">{{ currentLanguage }}</span>
        </button>


        <button @click="toggleMobileMenu" class="relative group p-2.5 rounded-xl glass-dark"
          :class="isDark ? 'text-white' : 'text-slate-900'"
          aria-label="Menu" :aria-expanded="isMobileMenuOpen">
          <div
            class="relative flex overflow-hidden items-center justify-center w-[20px] h-[20px] transform transition-all duration-200">
            <div
              class="flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-current h-[2px] w-7 transform transition-all duration-300 origin-left"
                :class="{ 'translate-x-10': isMobileMenuOpen }"></div>
              <div class="bg-current h-[2px] w-7 rounded transform transition-all duration-300 delay-50"
                :class="{ 'translate-x-10': isMobileMenuOpen }"></div>
              <div class="bg-current h-[2px] w-7 transform transition-all duration-300 origin-left delay-100"
                :class="{ 'translate-x-10': isMobileMenuOpen }"></div>

              <div
                class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0"
                :class="{ 'translate-x-0 w-12': isMobileMenuOpen }">
                <div class="absolute bg-current h-[2px] w-5 transform transition-all duration-500 rotate-45 delay-150">
                </div>
                <div class="absolute bg-current h-[2px] w-5 transform transition-all duration-500 -rotate-45 delay-150">
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>


    <Transition enter-active-class="transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 translate-y-[-100%]" enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-[-100%]">
      <div v-show="isMobileMenuOpen"
        class="fixed inset-0 z-[100] bg-white dark:bg-slate-900 pt-32 md:pt-48 px-8 md:px-12 flex flex-col items-start justify-start overflow-hidden">


        <div
          class="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none animate-blob will-change-transform">
        </div>

        <div
          class="w-full flex flex-col items-start space-y-6 md:space-y-12 relative z-10 transition-all duration-1000">
          <template v-for="(link, index) in navLinks" :key="link.name">
            <router-link :to="link.path" @click="closeMenu"
              class="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter transition-all duration-700 hover:translate-x-6 md:hover:translate-x-12 hover:text-primary"
              :class="[isActive(link.path) ? 'text-primary' : (isDark ? 'text-white' : 'text-slate-900')]"
              :style="{ transitionDelay: `${index * 0.05}s` }">
              {{ link.name }}
            </router-link>
          </template>
        </div>

        <div class="mt-auto mb-16 md:mb-24 w-full flex justify-between items-end relative z-10">
          <p class="text-slate-500 dark:text-slate-400 text-lg md:text-2xl font-light max-w-[200px] md:max-w-sm">{{
            t.footer.tagline }}</p>
          <div
            class="text-6xl md:text-9xl font-black text-slate-100 dark:text-slate-800 pointer-events-none opacity-20 tracking-tighter">
            RM.</div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
