<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { ArrowRight, Mail, Code2, Cpu } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ContactSection from '../components/ContactSection.vue';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { personalInfo, t, currentLanguage } = storeToRefs(store);

const scrollProgress = ref(0);

const handleScroll = () => {
  requestAnimationFrame(() => {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0;
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="transition-colors duration-500 overflow-x-hidden">
    <!-- Progress Bar -->
    <div
      class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-purple-600 z-[100] transition-all duration-300 pointer-events-none"
      :style="{ width: `${scrollProgress}%` }"></div>

    <!-- Hero Section -->
    <section
      class="min-h-[90svh] flex items-center relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 pt-12 md:pt-16">

      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          class="absolute top-[-10%] right-[-5%] w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-primary/20 rounded-full blur-[60px] md:blur-[120px] animate-blob transition-all will-change-transform opacity-70 md:opacity-100">
        </div>
        <div
          class="absolute bottom-[-10%] left-[-5%] w-[180px] md:w-[500px] h-[180px] md:h-[500px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[120px] animate-blob animation-delay-4000 transition-all will-change-transform opacity-70 md:opacity-100">
        </div>
        <div class="grain-overlay opacity-[0.02] md:opacity-[0.03]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">

          <div class="flex-1 text-center lg:text-left">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span class="text-[10px] md:text-[11px] font-bold tracking-wider uppercase">{{ personalInfo.role }}</span>
            </div>

            <h1
              class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black mb-5 tracking-tight leading-[1.05] animate-fade-in-up">
              <span class="block text-slate-900 dark:text-white">{{ t.hero.title1 }}</span>
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 animate-text-shimmer bg-[length:200%_auto]">
                {{ t.hero.title2 }}
              </span>
            </h1>

            <p class="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up"
              style="animation-delay: 0.1s">
              {{ t.hero.subtitle }} <span
                class="font-bold text-slate-900 dark:text-white border-b-2 border-primary/20">{{ personalInfo.name
                }}</span>.
              {{ personalInfo.shortBio[currentLanguage] }}
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start animate-fade-in-up"
              style="animation-delay: 0.2s">
              <router-link to="/projects"
                class="w-full sm:w-auto group relative px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-sm md:text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <span class="relative z-10 flex items-center justify-center gap-2.5">
                  {{ t.hero.action1 }}
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                </div>
              </router-link>

              <router-link to="/contact"
                class="w-full sm:w-auto group relative px-6 py-3.5 rounded-lg font-bold text-sm md:text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div
                  class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <span
                  class="relative z-10 flex items-center justify-center gap-2.5 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                  {{ t.hero.action2 }}
                  <Mail class="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
                </span>
              </router-link>
            </div>
          </div>

          <!-- Decorative Grid -->
          <div class="hidden lg:grid grid-cols-2 gap-5 flex-1 animate-fade-in-right scale-90 origin-right">
            <div class="p-6 glass-dark rounded-2xl border border-white/5 card-hover">
              <div class="p-3 bg-primary/10 rounded-xl w-fit mb-5 text-primary">
                <Code2 class="w-7 h-7" />
              </div>
              <h3 class="text-lg font-bold mb-1.5">{{ t.hero.feature1Title }}</h3>
              <p class="text-slate-400 text-xs md:text-sm">{{ t.hero.feature1Desc }}</p>
            </div>

            <div class="p-6 glass-dark rounded-2xl border border-white/5 card-hover translate-y-6">
              <div class="p-3 bg-purple-500/10 rounded-xl w-fit mb-5 text-purple-500">
                <Cpu class="w-7 h-7" />
              </div>
              <h3 class="text-lg font-bold mb-1.5">{{ t.hero.feature2Title }}</h3>
              <p class="text-slate-400 text-xs md:text-sm">{{ t.hero.feature2Desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <AboutSection :is-dark="isDark" />
    <ProjectsSection :is-dark="isDark" :limit="3" />
    <ServicesSection :is-dark="isDark" />
    <SkillsSection :is-dark="isDark" />
    <ContactSection :is-dark="isDark" />
  </div>
</template>
