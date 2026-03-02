<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { Cpu, Globe, Database, PenTool, Terminal } from 'lucide-vue-next';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { skills, t } = storeToRefs(store);


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
  <section id="skills" class="py-12 md:py-20 relative overflow-hidden transition-colors duration-500"
           :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
       
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
       <div class="absolute top-[20%] right-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] animate-blob mix-blend-screen opacity-50"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-10 md:mb-16">
         <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
           <span class="text-[10px] font-black tracking-widest uppercase">{{ t.skills.badge }}</span>
         </div>
         <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight animate-fade-in-up" 
             :class="isDark ? 'text-white' : 'text-slate-900'">
           {{ t.skills.title1 }}
           <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
             {{ t.skills.title2 }}
           </span>
         </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8">
        <div v-for="(items, category) in skills" :key="category"
             class="group relative rounded-[1.25rem] md:rounded-[2.25rem] p-5 md:p-8 transition-all duration-700 hover:-translate-y-2 animate-fade-in-up border h-full"
             :class="isDark ? 'bg-slate-900/40 border-white/5 backdrop-blur-3xl' : 'bg-white border-slate-100 shadow-2xl'">
          
          <div class="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-primary/20 rounded-full blur-[60px] md:blur-[80px] transform translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-1000 opacity-0 group-hover:opacity-30"></div>

          <div class="relative z-10">
            <div class="p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110 w-fit mb-5 md:mb-8">
                <component :is="getIcon(category.toString())" class="w-5 h-5 md:w-7 md:h-7" />
            </div>
            
            <h3 class="text-lg md:text-2xl font-black tracking-tight mb-5 md:mb-8"
               :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ category }}
            </h3>

            <div class="flex flex-col gap-2.5">
              <div v-for="skill in items" :key="skill"
                    class="relative py-2 md:py-2.5 border-b border-white/5 last:border-0 group/skill">
                <div class="flex items-center justify-between group-hover/skill:translate-x-2 transition-transform duration-300">
                  <span class="text-base md:text-xl font-bold tracking-tight opacity-70 group-hover/skill:opacity-100 transition-opacity"
                        :class="isDark ? 'text-white' : 'text-slate-900'">
                    {{ skill }}
                  </span>
                  <div class="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
