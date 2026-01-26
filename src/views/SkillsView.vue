<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { Cpu, Globe, Database, PenTool, Terminal } from 'lucide-vue-next';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { skills } = storeToRefs(store);


const getIcon = (category: string) => {
    const catLower = category.toLowerCase();
    if (catLower.includes('frontend') || catLower.includes('web')) return Globe;
    if (catLower.includes('backend') || catLower.includes('server')) return Database;
    if (catLower.includes('design') || catLower.includes('ui')) return PenTool;
    if (catLower.includes('tools') || catLower.includes('devops')) return Terminal;
    return Cpu;
};
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 relative overflow-hidden transition-colors duration-500"
       :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
       

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
       <div class="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute inset-0 bg-hero-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
         <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in-up">Expertise</span>
         <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight animate-fade-in-up" style="animation-delay: 0.1s"
             :class="isDark ? 'text-white' : 'text-slate-900'">
           Technical <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Skills</span>
         </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(items, category, index) in skills" :key="category"
             class="group relative rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up overflow-hidden"
             :style="{ animationDelay: (index * 0.1 + 0.2) + 's' }"
             :class="isDark ? 'bg-slate-900/40 border border-white/5 backdrop-blur-md' : 'bg-white/60 border border-white/50 shadow-lg backdrop-blur-md'">
          

          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

          <div class="flex items-center gap-4 mb-8">
             <div class="p-3 rounded-2xl"
                  :class="isDark ? 'bg-white/5 text-primary' : 'bg-primary/5 text-primary'">
                <component :is="getIcon(category.toString())" class="w-6 h-6" />
             </div>
             <h3 class="text-2xl font-bold tracking-tight"
               :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ category }}
             </h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span v-for="skill in items" :key="skill"
                  class="relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-default overflow-hidden group/skill"
                  :class="isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-white text-slate-600 shadow-sm hover:text-slate-900'">
              <span class="relative z-10">{{ skill }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-500/80 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
