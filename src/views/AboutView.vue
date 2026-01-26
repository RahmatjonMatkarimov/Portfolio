<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();

const store = usePortfolioStore();
const { experiences, education } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-20 transition-colors duration-300"
       :class="isDark ? 'bg-slate-900' : 'bg-slate-50'">
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center"
          :class="isDark ? 'text-white' : 'text-slate-900'">
        Experience & Education
      </h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Experience -->
        <div>
          <h3 class="text-2xl font-bold mb-8 flex items-center" :class="isDark ? 'text-primary' : 'text-primary'">
            <span class="mr-2">💼</span> Experience
          </h3>
          <div class="relative pl-8 border-l-2" :class="isDark ? 'border-slate-700' : 'border-slate-200'">
            <div v-for="(exp, index) in experiences" :key="index" class="mb-10 relative">
              <span class="absolute -left-[37px] top-1 h-5 w-5 rounded-full border-4"
                    :class="isDark ? 'bg-slate-900 border-primary' : 'bg-white border-primary'"></span>
              
              <span class="text-sm font-semibold tracking-wide uppercase" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
                {{ exp.date }}
              </span>
              <h4 class="text-xl font-bold mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ exp.role }}
              </h4>
              <p class="text-lg font-medium mb-2" :class="isDark ? 'text-primary' : 'text-sky-600'">
                {{ exp.company }}
              </p>
              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3 class="text-2xl font-bold mb-8 flex items-center" :class="isDark ? 'text-primary' : 'text-primary'">
            <span class="mr-2">🎓</span> Education
          </h3>
          <div class="relative pl-8 border-l-2" :class="isDark ? 'border-slate-700' : 'border-slate-200'">
            <div v-for="(edu, index) in education" :key="index" class="mb-10 relative">
               <span class="absolute -left-[37px] top-1 h-5 w-5 rounded-full border-4"
                    :class="isDark ? 'bg-slate-900 border-primary' : 'bg-white border-primary'"></span>
              
              <span class="text-sm font-semibold tracking-wide uppercase" :class="isDark ? 'text-slate-400' : 'text-slate-500'">
                {{ edu.date }}
              </span>
              <h4 class="text-xl font-bold mt-1" :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ edu.school }}
              </h4>
              <p class="text-lg font-medium mb-2" :class="isDark ? 'text-primary' : 'text-sky-600'">
                {{ edu.role }}
              </p>
              <p :class="isDark ? 'text-slate-300' : 'text-slate-600'">
                {{ edu.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
