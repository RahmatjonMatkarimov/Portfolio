<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { Briefcase, GraduationCap } from 'lucide-vue-next';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { experiences, education, t, currentLanguage } = storeToRefs(store);
</script>

<template>
  <section id="about" class="py-12 md:py-20 relative overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="absolute top-[30%] left-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-cyan-500/5 rounded-full blur-[60px] md:blur-[150px] animate-blob mix-blend-screen opacity-50 will-change-transform">
      </div>
      <div
        class="absolute bottom-[20%] right-[-10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-purple-500/5 rounded-full blur-[60px] md:blur-[150px] animate-blob animation-delay-4000 mix-blend-screen opacity-50 will-change-transform">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center lg:text-left mb-10 md:mb-16 max-w-4xl mx-auto lg:mx-0">
        <div
          class="lg:inline-flex hidden items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
          <span class="text-[10px] font-black tracking-widest uppercase">{{ t.about.badge }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight animate-fade-in-up"
          :class="isDark ? 'text-white' : 'text-slate-900'">
          {{ t.about.title1 }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
            {{ t.about.title2 }}
          </span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
        <!-- Experience -->
        <div class="animate-slide-up">
          <div class="flex items-center gap-3 mb-6 md:mb-10 group justify-center lg:justify-start">
            <div
              class="p-2.5 md:p-3 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
              <Briefcase class="w-5 h-5 md:w-5.5 md:h-5.5" />
            </div>
            <h3 class="text-lg md:text-2xl font-black tracking-tight" :class="isDark ? 'text-white' : 'text-slate-900'">
              {{ t.about.workTitle }}</h3>
          </div>

          <div class="space-y-8 md:space-y-10 relative">
            <div
              class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-500/10 to-transparent">
            </div>

            <div v-for="(exp, index) in experiences" :key="index" class="relative pl-14 md:pl-20 group">
              <div
                class="absolute left-[14px] md:left-[21px] top-2 md:top-3 w-4 md:w-5 h-4 md:h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform z-10">
              </div>

              <div
                class="p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] glass dark:glass-dark border-white/5 card-hover shadow-lg">
                <div class="flex items-center gap-3 mb-2.5 md:mb-3.5">
                  <span
                    class="text-[8px] md:text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    {{ exp.date[currentLanguage] }}
                  </span>
                </div>

                <h4 class="text-base md:text-xl font-black mb-1 md:mb-1.5 leading-tight"
                  :class="isDark ? 'text-white' : 'text-slate-900'">
                  {{ exp.role[currentLanguage] }}
                </h4>
                <p class="text-sm md:text-base font-bold mb-2.5 md:mb-3.5 text-primary">
                  {{ exp.company }}
                </p>
                <p class="leading-relaxed text-[13px] md:text-sm font-light opacity-80"
                  :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                  {{ exp.description[currentLanguage] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="animate-slide-up" style="animation-delay: 0.2s">
          <div class="flex items-center gap-3 mb-6 md:mb-10 group justify-center lg:justify-start">
            <div
              class="p-2.5 md:p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
              <GraduationCap class="w-5 h-5 md:w-5.5 md:h-5.5" />
            </div>
            <h3 class="text-lg md:text-2xl font-black tracking-tight" :class="isDark ? 'text-white' : 'text-slate-900'">
              {{ t.about.eduTitle }}</h3>
          </div>

          <div class="space-y-8 md:space-y-10 relative">
            <div
              class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-slate-500/10 to-transparent">
            </div>

            <div v-for="(edu, index) in education" :key="index" class="relative pl-14 md:pl-20 group">
              <div
                class="absolute left-[14px] md:left-[21px] top-2 md:top-3 w-4 md:w-5 h-4 md:h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-purple-500 group-hover:scale-125 transition-transform z-10">
              </div>

              <div
                class="p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] glass dark:glass-dark border-white/5 card-hover shadow-lg">
                <div class="flex items-center gap-3 mb-2.5 md:mb-3.5">
                  <span
                    class="text-[8px] md:text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    {{ edu.date[currentLanguage] }}
                  </span>
                </div>

                <h4 class="text-base md:text-xl font-black mb-1 md:mb-1.5 leading-tight"
                  :class="isDark ? 'text-white' : 'text-slate-900'">
                  {{ edu.school }}
                </h4>
                <p class="text-sm md:text-base font-bold mb-2.5 md:mb-3.5 text-purple-500">
                  {{ edu.role[currentLanguage] }}
                </p>
                <p class="leading-relaxed text-[13px] md:text-sm font-light opacity-80"
                  :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                  {{ edu.description[currentLanguage] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
