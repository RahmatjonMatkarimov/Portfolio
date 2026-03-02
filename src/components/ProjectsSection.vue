<script setup lang="ts">
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean; limit?: number }>();

const store = usePortfolioStore();
const { projects, t, currentLanguage } = storeToRefs(store);

const getGradient = (index: number) => {
  const gradients = [
    'from-cyan-400 to-blue-500',
    'from-purple-500 to-pink-500',
  ];
  return gradients[index % gradients.length];
};
</script>

<template>
  <section id="projects" class="py-12 md:py-20 relative overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="absolute top-0 left-1/4 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] animate-blob mix-blend-screen opacity-50 will-change-transform">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
            <span class="text-[10px] font-black tracking-widest uppercase">{{ t.projects.badge }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight animate-fade-in-up"
            :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ t.projects.title1 }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
              {{ t.projects.title2 }}
            </span>
          </h2>
        </div>
        <p class="text-sm md:text-base font-light opacity-80 max-w-sm animate-fade-in-up md:block hidden"
          :class="isDark ? 'text-slate-400' : 'text-slate-600'">
          {{ t.projects.subtitle }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <div v-for="(project, index) in projects.slice(0, limit || projects.length)" :key="index"
          class="group relative rounded-[1.25rem] md:rounded-[2rem] p-5 md:p-8 transition-all duration-700 hover:scale-[1.02] border animate-fade-in-up flex flex-col justify-between"
          :class="isDark ? 'bg-slate-900/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-100 shadow-2xl'">

          <div
            class="absolute inset-0 rounded-[1.25rem] md:rounded-[2rem] bg-gradient-to-br transition-all duration-700 opacity-0 group-hover:opacity-5 shadow-2xl"
            :class="getGradient(index)"></div>

          <div class="relative z-10">
            <div class="flex justify-between items-start mb-5 md:mb-8">
              <div
                class="p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Folder class="w-5 h-5 md:w-7 md:h-7" />
              </div>

              <div class="flex gap-2 md:gap-2.5">
                <a v-if="project.links.github" :href="project.links.github" target="_blank"
                  class="p-2 md:p-3 rounded-lg md:rounded-xl glass-dark hover:scale-110 transition-transform"
                  aria-label="Github">
                  <Github class="w-4 h-4 md:w-4.5 md:h-4.5" />
                </a>
                <a v-if="project.links.demo" :href="project.links.demo" target="_blank"
                  class="p-2 md:p-3 rounded-lg md:rounded-xl glass-dark hover:scale-110 transition-transform"
                  aria-label="Demo">
                  <ExternalLink class="w-4 h-4 md:w-4.5 md:h-4.5" />
                </a>
              </div>
            </div>

            <h3 class="text-xl md:text-3xl font-black mb-2 md:mb-3 tracking-tight leading-tight"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              {{ project.title[currentLanguage] }}
            </h3>

            <p class="mb-5 md:mb-8 text-sm md:text-base font-light leading-relaxed opacity-80"
              :class="isDark ? 'text-slate-400' : 'text-slate-600'">
              {{ project.description[currentLanguage] }}
            </p>
          </div>

          <div class="relative z-10 flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in project.tags" :key="tag"
              class="text-[8px] md:text-[9px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="limit && projects.length > limit" class="mt-12 md:mt-20 text-center">
        <router-link to="/projects"
          class="inline-flex items-center gap-2.5 px-5 md:px-8 py-2.5 md:py-4 rounded-xl md:rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs md:text-sm transition-all duration-500 hover:scale-105 group shadow-xl">
          {{ t.projects.viewAll }}
          <ArrowUpRight
            class="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </router-link>
      </div>
    </div>
  </section>
</template>
