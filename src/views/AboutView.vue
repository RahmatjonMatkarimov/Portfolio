<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { Briefcase, GraduationCap } from 'lucide-vue-next';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { experiences, education } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 relative overflow-hidden transition-colors duration-500"
       :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
    

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
       <div class="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute inset-0 bg-hero-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
       <div class="text-center mb-16">
         <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in-up">My Journey</span>
         <h1 class="sr-only">About Rahmatjon Matkarimov - Backend Developer Journey</h1>
         <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight animate-fade-in-up" style="animation-delay: 0.1s"
             :class="isDark ? 'text-white' : 'text-slate-900'">
           Experience & <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Education</span>
         </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">

        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
               <Briefcase class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">Work Experience</h3>
          </div>
          
          <div class="relative pl-8 md:pl-12 border-l-2 space-y-12" :class="isDark ? 'border-slate-800' : 'border-slate-200'">
            <div v-for="(exp, index) in experiences" :key="index" class="relative group">

              <span class="absolute -left-[14px] top-0 h-6 w-6 rounded-full border-4 transition-all duration-300 group-hover:scale-125 z-10"
                    :class="isDark ? 'bg-slate-900 border-emerald-500' : 'bg-white border-emerald-500'">
                    <span class="absolute inset-0 rounded-full bg-emerald-500/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </span>
              
              <div class="p-6 rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10"
                   :class="isDark ? 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/30 backdrop-blur-md' : 'bg-white border-slate-100 shadow-sm hover:border-emerald-500/30'">
                  <div class="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border" 
                          :class="isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200'">
                      {{ exp.date }}
                    </span>
                  </div>

                  <h4 class="text-2xl font-bold mb-1" :class="isDark ? 'text-white' : 'text-slate-900'">
                    {{ exp.role }}
                  </h4>
                  <p class="text-lg font-semibold mb-4" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">
                    {{ exp.company }}
                  </p>
                  <p class="leading-relaxed text-sm opacity-80" :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                    {{ exp.description }}
                  </p>
              </div>
            </div>
          </div>
        </div>


        <div class="animate-slide-up" style="animation-delay: 0.4s">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
               <GraduationCap class="w-6 h-6" />
            </div>
            <h3 class="text-2xl font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">Education</h3>
          </div>
          
          <div class="relative pl-8 md:pl-12 border-l-2 space-y-12" :class="isDark ? 'border-slate-800' : 'border-slate-200'">
            <div v-for="(edu, index) in education" :key="index" class="relative group">

               <span class="absolute -left-[14px] top-0 h-6 w-6 rounded-full border-4 transition-all duration-300 group-hover:scale-125 z-10"
                    :class="isDark ? 'bg-slate-900 border-blue-500' : 'bg-white border-blue-500'">
                    <span class="absolute inset-0 rounded-full bg-blue-500/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
               </span>
              
              <div class="p-6 rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                   :class="isDark ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/30 backdrop-blur-md' : 'bg-white border-slate-100 shadow-sm hover:border-blue-500/30'">
                  <div class="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border" 
                          :class="isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'">
                      {{ edu.date }}
                    </span>
                  </div>
                  
                  <h4 class="text-2xl font-bold mb-1" :class="isDark ? 'text-white' : 'text-slate-900'">
                    {{ edu.school }}
                  </h4>
                  <p class="text-lg font-semibold mb-4" :class="isDark ? 'text-blue-400' : 'text-blue-600'">
                    {{ edu.role }}
                  </p>
                  <p class="leading-relaxed text-sm opacity-80" :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                    {{ edu.description }}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
