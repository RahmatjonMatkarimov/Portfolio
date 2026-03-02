<script setup lang="ts">
import { Layout, Bot, Server, ShieldCheck, ArrowRight } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { t } = storeToRefs(store);

const services = [
  {
    key: 'webDev',
    icon: Layout,
    color: 'from-cyan-400/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    delay: '0'
  },
  {
    key: 'telegramBots',
    icon: Bot,
    color: 'from-blue-500/20 to-indigo-600/20',
    iconColor: 'text-blue-400',
    delay: '100'
  },
  {
    key: 'backend',
    icon: Server,
    color: 'from-indigo-600/20 to-purple-600/20',
    iconColor: 'text-indigo-400',
    delay: '200'
  },
  {
    key: 'systems',
    icon: ShieldCheck,
    color: 'from-purple-600/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    delay: '300'
  }
];
</script>

<template>
  <section id="services" class="py-12 md:py-20 relative overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="absolute top-[20%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[80px] md:blur-[150px] animate-blob mix-blend-screen opacity-50 will-change-transform">
      </div>
      <div
        class="absolute bottom-[20%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-50 will-change-transform">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center lg:text-left mb-10 md:mb-16 max-w-4xl mx-auto lg:mx-0">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
          <span class="text-[10px] font-black tracking-widest uppercase">{{ t.services.badge }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight animate-fade-in-up"
          :class="isDark ? 'text-white' : 'text-slate-900'">
          {{ t.services.title1 }}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
            {{ t.services.title2 }}
          </span>
        </h2>
        <p class="text-base md:text-lg font-light leading-relaxed opacity-80 animate-fade-in-up max-w-2xl"
          :class="isDark ? 'text-slate-300' : 'text-slate-600'">
          {{ t.services.subtitle }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div v-for="service in services" :key="service.key" 
          class="group relative p-8 rounded-[2rem] glass dark:glass-dark border-white/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-fade-in-up shadow-lg"
          :style="{ animationDelay: `${service.delay}ms` }">
          
          <div class="relative z-10">
            <div :class="['inline-flex p-4 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 bg-slate-100 dark:bg-slate-800/50', service.iconColor]">
              <component :is="service.icon" class="w-8 h-8" />
            </div>
            
            <h3 class="text-xl md:text-2xl font-black mb-4 tracking-tight"
              :class="isDark ? 'text-white' : 'text-slate-900'">
              {{ (t.services as any)[service.key].title }}
            </h3>
            
            <p class="text-sm md:text-base leading-relaxed opacity-80 mb-8 font-light"
              :class="isDark ? 'text-slate-300' : 'text-slate-600'">
              {{ (t.services as any)[service.key].desc }}
            </p>
            
            <router-link to="/contact" class="inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-primary group-hover:gap-4 transition-all duration-300">
                {{ t.nav.talk }}
                <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>
