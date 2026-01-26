<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { projects } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-20 transition-colors duration-300"
       :class="isDark ? 'bg-slate-800' : 'bg-white'">
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center"
          :class="isDark ? 'text-white' : 'text-slate-900'">
        Featured Projects
      </h2>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(project, index) in projects" :key="index"
             class="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
             :class="isDark ? 'bg-slate-900 shadow-xl shadow-black/20' : 'bg-slate-50 shadow-xl shadow-slate-200'">
          
          <div class="flex justify-between items-start mb-6">
            <div class="p-3 rounded-lg"
                 :class="isDark ? 'bg-slate-800 text-primary' : 'bg-white text-primary shadow-sm'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="flex gap-4">
               <a v-if="project.links.github" :href="project.links.github" 
                 class="transition-colors hover:text-primary"
                 :class="isDark ? 'text-slate-400' : 'text-slate-500'" aria-label="Github">
                <Github class="w-5 h-5" />
              </a>
              <a v-if="project.links.demo" :href="project.links.demo" 
                 class="transition-colors hover:text-primary"
                 :class="isDark ? 'text-slate-400' : 'text-slate-500'" aria-label="Demo">
                <ExternalLink class="w-5 h-5" />
              </a>
            </div>
          </div>

          <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
              :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ project.title }}
          </h3>

          <p class="mb-6 text-sm leading-relaxed"
             :class="isDark ? 'text-slate-400' : 'text-slate-600'">
            {{ project.description }}
          </p>
          
          <ul class="mb-6 space-y-2">
             <li v-for="feature in project.features" :key="feature" 
                 class="flex items-center text-sm"
                 :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                 <span class="w-1.5 h-1.5 rounded-full mr-2 bg-primary"></span>
                 {{ feature }}
             </li>
          </ul>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in project.tags" :key="tag"
                  class="text-xs font-medium px-3 py-1 rounded-full"
                  :class="isDark ? 'bg-slate-800 text-primary' : 'bg-primary/10 text-primary'">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
