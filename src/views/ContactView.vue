<script setup lang="ts">
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { personalInfo } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 relative overflow-hidden transition-colors duration-500"
           :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
           
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
       <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
       <div class="absolute inset-0 bg-hero-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
         <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in-up">Get in Touch</span>
         <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight animate-fade-in-up" style="animation-delay: 0.1s"
             :class="isDark ? 'text-white' : 'text-slate-900'">
           Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Connect</span>
         </h2>
      </div>

      <div class="max-w-3xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl relative group animate-fade-in-up" style="animation-delay: 0.3s"
           :class="isDark ? 'bg-slate-900/50 border border-white/5 backdrop-blur-xl' : 'bg-white/80 border border-white/50 backdrop-blur-xl shadow-slate-200/50'">
           
        <div class="relative lg:px-8 px-4 py-8 md:p-12 overflow-hidden flex flex-col items-center text-center">
            
          <div class="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600 opacity-90"></div>
          <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          
          <div class="relative z-10 text-white w-full max-w-lg mx-auto">
            <h3 class="text-3xl font-bold mb-6">Contact Info</h3>
            <p class="mb-10 text-white/80 leading-relaxed text-lg md:text-xl">
              I'm always open to discussing product design work or partnership opportunities. Feel free to reach out through any of the following channels.
            </p>

            <div class="space-y-6">
              <a :href="'mailto:' + personalInfo.email" class="flex items-center justify-center space-x-4 group/item p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm shadow-lg border border-white/10">
                <div class="p-2 bg-white/20 rounded-full">
                  <Mail class="w-6 h-6" />
                </div>
                <span class="font-medium tracking-wide md:text-lg">{{ personalInfo.email }}</span>
              </a>

              <a :href="'tel:' + personalInfo.phone" class="flex items-center justify-center space-x-4 group/item p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm shadow-lg border border-white/10">
                <div class="p-2 bg-white/20 rounded-full">
                  <Phone class="w-6 h-6" />
                </div>
                <span class="font-medium tracking-wide lg:text-lg">{{ personalInfo.phone }}</span>
              </a>
              
              <div class="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <div class="p-2 bg-white/10 rounded-full">
                  <MapPin class="w-6 h-6" />
                </div>
                <span class="font-medium tracking-wide lg:text-lg">{{ personalInfo.location }}</span>
              </div>
            </div>
            
            <div class="mt-12 pt-8 border-t border-white/10 w-full">
                <p class="text-white/60 text-sm mb-6 uppercase tracking-widest font-bold">Find me on</p>
                <div class="flex gap-6 justify-center">
                   <a href="https://github.com/RahmatjonMatkarimov" target="_blank" class="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all hover:scale-110 cursor-pointer text-white">
                       <Github class="w-6 h-6" />
                   </a>
                   <a href="#" target="_blank" class="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all hover:scale-110 cursor-pointer text-white">
                       <Linkedin class="w-6 h-6" />
                   </a>
                   <a href="#" target="_blank" class="p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all hover:scale-110 cursor-pointer text-white">
                       <Twitter class="w-6 h-6" />
                   </a>
                </div>
            </div>
          </div>
          
          <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-50 mix-blend-screen"></div>
          <div class="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-50 mix-blend-screen"></div>
        </div>
      </div>
    </div>
  </div>
</template>
