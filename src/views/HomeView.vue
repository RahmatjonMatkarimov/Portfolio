<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { ArrowRight, Github } from 'lucide-vue-next';

// Use defineProps macro without import
// defineProps<{ isDark: boolean }>(); 
// Actually in setup script it is auto available but explicit import is safe if TS complains.

const store = usePortfolioStore();
const { personalInfo } = storeToRefs(store);
</script>

<template>
  <section class="min-h-screen flex items-center relative overflow-hidden">
    
    <!-- Dynamic Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <!-- Gradient Blobs -->
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen dark:mix-blend-lighten"></div>
      <div class="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen dark:mix-blend-lighten"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen dark:mix-blend-lighten"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-hero-pattern opacity-10 dark:opacity-5"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        
        <!-- Text Content -->
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-up">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-sm font-medium tracking-wide">Available for Work</span>
          </div>

          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up" style="animation-delay: 0.1s">
            <span class="block text-slate-900 dark:text-white">Building Digital</span>
            <span class="text-gradient bg-[length:200%_auto] animate-text-shimmer">Experiences</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
            Hi, I'm <span class="font-bold text-slate-900 dark:text-white">{{ personalInfo.name }}</span>. 
            {{ personalInfo.shortBio }}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-fade-in-up" style="animation-delay: 0.3s">
            <router-link to="/projects" class="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <span class="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-10 dark:opacity-20 transition-opacity"></div>
            </router-link>
            
            <a href="#contact" class="px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all hover:scale-105 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              Contact Me
            </a>
          </div>

          <div class="mt-12 flex items-center gap-6 justify-center md:justify-start animate-fade-in-up text-slate-400" style="animation-delay: 0.4s">
            <a href="https://github.com/RahmatjonMatkarimov" target="_blank" class="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
              <Github class="w-6 h-6" />
            </a>
            <!-- Add more social icons here -->
            <div class="h-px w-20 bg-slate-200 dark:bg-slate-800"></div>
            <a :href="'mailto:' + personalInfo.email" class="text-sm font-medium hover:text-primary transition-colors">
              {{ personalInfo.email }}
            </a>
          </div>
        </div>

        <!-- Visual/Image Area (Abstract Representation) -->
        <div class="flex-1 relative w-full max-w-[500px] h-[500px] hidden md:block animate-float">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
          
          <!-- Floating Cards Representation -->
          <div class="relative w-full h-full perspective-1000">
             <!-- Code Card -->
             <div class="absolute top-[20%] right-[10%] p-6 glass dark:glass-dark rounded-2xl w-64 transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 z-20">
                <div class="flex items-center gap-2 mb-3 border-b border-dashed border-slate-300 dark:border-slate-700 pb-2">
                   <div class="w-3 h-3 rounded-full bg-red-500"></div>
                   <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div class="w-3 h-3 rounded-full bg-green-500"></div>
                   <span class="ml-auto text-xs font-mono text-slate-400">auth.service.ts</span>
                </div>
                <div class="space-y-2">
                   <div class="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                   <div class="h-2 w-1/2 bg-primary/30 rounded"></div>
                   <div class="h-2 w-5/6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
             </div>

             <!-- Stats Card -->
             <div class="absolute bottom-[25%] left-[5%] p-5 glass dark:glass-dark rounded-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 z-10 animate-float-delayed">
                <div class="text-4xl font-bold text-slate-900 dark:text-white mb-1">10+</div>
                <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">Projects Completed</div>
             </div>

             <!-- Tech Stack Icon -->
             <div class="absolute top-[10%] left-[20%] p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-float" style="animation-duration: 4s;">
                <svg viewBox="0 0 128 128" width="40" height="40">
                  <path d="M63.85 0L7.54 19.34L19.49 97.46L64.29 128L108.63 97.23L120.46 19.34L63.85 0ZM89.15 45.42L85 71.91L63.85 79.54L42.92 71.91L41.6 57.5H23.08L26.15 85.93L64.06 99.6L102.16 85.93L106.92 45.42H89.15Z" fill="#339933"></path>
                </svg> <!-- Node JS abstract -->
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
