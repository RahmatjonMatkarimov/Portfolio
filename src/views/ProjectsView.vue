<script setup lang="ts">
import { ExternalLink, Github, Folder } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { projects } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 relative overflow-hidden transition-colors duration-500"
       :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
       

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
       <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute inset-0 bg-hero-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16 max-w-2xl mx-auto">
         <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in-up">Portfolio</span>
         <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight animate-fade-in-up" style="animation-delay: 0.1s"
             :class="isDark ? 'text-white' : 'text-slate-900'">
           Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Works</span>
         </h2>
         <p class="text-lg leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s"
            :class="isDark ? 'text-slate-400' : 'text-slate-600'">
            A selection of projects that demonstrate my passion for building digital experiences.
         </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-1000">
        <div v-for="(project, index) in projects" :key="index"
             class="group relative rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up border"
             :style="{ animationDelay: (index * 0.1 + 0.3) + 's' }"
             :class="isDark ? 'bg-slate-900/40 border-white/5 hover:border-white/10 shadow-black/20 hover:shadow-primary/5 backdrop-blur-md' : 'bg-white/60 border-white/50 shadow-slate-200/50 hover:shadow-primary/10 backdrop-blur-md'">
          

          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500"></div>
          
          <div class="flex justify-between items-start mb-8">
            <div class="p-3.5 rounded-2xl transition-colors duration-300"
                 :class="isDark ? 'bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white'">
              <Folder class="w-6 h-6" />
            </div>
            
            <div class="flex gap-3">
               <a v-if="project.links.github" :href="project.links.github" target="_blank"
                 class="p-2 rounded-full transition-all duration-300 hover:scale-110"
                 :class="isDark ? 'text-slate-400 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'" aria-label="Github">
                <Github class="w-5 h-5" />
              </a>
              <a v-if="project.links.demo" :href="project.links.demo" target="_blank"
                 class="p-2 rounded-full transition-all duration-300 hover:scale-110"
                 :class="isDark ? 'text-slate-400 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'" aria-label="Demo">
                <ExternalLink class="w-5 h-5" />
              </a>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-3 transition-colors group-hover:text-primary tracking-tight"
              :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ project.title }}
          </h3>

          <p class="mb-8 text-sm leading-relaxed line-clamp-3"
             :class="isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-700'">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in project.tags" :key="tag"
                  class="text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300"
                  :class="isDark ? 'bg-slate-800 text-primary group-hover:bg-primary/20' : 'bg-primary/5 text-primary group-hover:bg-primary/10'">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}
</style>
