<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { ArrowRight, Github, Mail, Code2, Terminal, Cpu } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';

const store = usePortfolioStore();
const { personalInfo } = storeToRefs(store);


const containerRef = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.value) return;
  const { left, top, width, height } = containerRef.value.getBoundingClientRect();
  mouseX.value = (e.clientX - left) / width - 0.5;
  mouseY.value = (e.clientY - top) / height - 0.5;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <section ref="containerRef" class="min-h-screen flex items-center relative overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
    

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">

      <div 
        class="absolute inset-0 opacity-30 dark:opacity-20 animate-gradient-xy"
        style="background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), rgba(99, 102, 241, 0.15), rgba(244, 63, 94, 0.15), transparent 70%); background-size: 200% 200%;"
      ></div>


      <div 
        class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob transition-transform duration-100 ease-out"
        :style="{ transform: `translate(${mouseX * -30}px, ${mouseY * -30}px)` }"
      ></div>
      <div 
        class="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000 transition-transform duration-100 ease-out"
        :style="{ transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)` }"
      ></div>
      <div 
        class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000 transition-transform duration-100 ease-out"
        :style="{ transform: `translate(${mouseX * -40}px, ${mouseY * -40}px)` }"
      ></div>
      

      <div class="absolute inset-0 bg-hero-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        

        <div class="flex-1 text-center lg:text-left relative">

           <div class="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-transparent opacity-0 lg:opacity-30 rounded-full scale-y-0 animate-scale-in origin-top" style="animation-delay: 0.5s"></div>

          <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1] animate-fade-in-up transform-gpu" style="animation-delay: 0.1s">
            <span class="block text-slate-900 dark:text-white drop-shadow-sm">Building</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-text-shimmer bg-[length:200%_auto]">Digital Future</span>
          </h1>
          
          <p class="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light animate-fade-in-up" style="animation-delay: 0.2s">
            Hi, I'm <span class="font-semibold text-slate-900 dark:text-white border-b-2 border-primary/30 hover:border-primary transition-colors">{{ personalInfo.name }}</span>. 
            {{ personalInfo.shortBio }}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s">
            <router-link to="/projects" class="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)]">
              <span class="relative z-10 flex items-center gap-3">
                See My Work
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
            </router-link>
            
            <router-link 
              to="/contact" 
              class="group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-lg hover:shadow-primary/20"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10 flex items-center gap-3 text-slate-700 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-white transition-colors">
                Contact Me
                <Mail class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </router-link>
          </div>

          <div class="mt-16 flex items-center gap-8 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.5s">
            <a href="https://github.com/RahmatjonMatkarimov" target="_blank" class="group relative p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <div class="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Github class="relative w-6 h-6 z-10" />
            </a>

            <div class="h-8 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
            
            <a :href="'mailto:' + personalInfo.email" class="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors tracking-wide">
              {{ personalInfo.email }}
            </a>
          </div>
        </div>


        <div class="hidden lg:flex flex-1 relative w-full max-w-[600px] aspect-square items-center justify-center perspective-1000 animate-fade-in-right" style="animation-delay: 0.2s">

          <div class="absolute inset-0 bg-gradient-to-tr from-primary/30 via-purple-500/30 to-rose-500/30 rounded-full blur-[80px] animate-pulse-slow"></div>
          

          <div class="relative w-full h-full transform-style-3d transition-transform duration-200 ease-out"
               :style="{ transform: `rotateY(${mouseX * 15}deg) rotateX(${mouseY * -15}deg)` }">
               

             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-900/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center z-20 animate-float">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-purple-600/40 opacity-50 rounded-3xl"></div>
                <Code2 class="w-16 h-16 text-slate-800 dark:text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
             </div>


             <div class="absolute top-[20%] right-[10%] p-5 glass dark:glass-dark rounded-2xl transform translate-z-20 animate-float-delayed">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-blue-500/20 rounded-lg text-blue-500">
                    <Terminal class="w-6 h-6" />
                  </div>
                  <div class="flex flex-col">
                     <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">Build Status</span>
                     <span class="text-sm font-bold text-green-500">Passing</span>
                  </div>
                </div>
             </div>

             <div class="absolute bottom-[20%] left-[10%] p-5 glass dark:glass-dark rounded-2xl transform translate-z-30 animate-float" style="animation-delay: 1.5s">
                <div class="flex items-center gap-3">
                   <div class="p-2 bg-purple-500/20 rounded-lg text-purple-500">
                     <Cpu class="w-6 h-6" />
                   </div>
                   <div class="flex flex-col">
                      <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">Performance</span>
                      <span class="text-sm font-bold text-slate-900 dark:text-white">Optimum</span>
                   </div>
                </div>
             </div>
             

             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200/30 dark:border-slate-700/30 rounded-full animate-spin-slow pointer-events-none"></div>
             <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-dashed border-slate-200/20 dark:border-slate-700/20 rounded-full animate-spin-slow pointer-events-none" style="animation-duration: 25s; animation-direction: reverse;"></div>
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
.transform-style-3d {
  transform-style: preserve-3d;
}
.translate-z-20 {
  transform: translateZ(20px);
}
.translate-z-30 {
  transform: translateZ(30px);
}
</style>
