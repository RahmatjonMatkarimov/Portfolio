<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { skills } = storeToRefs(store);

// Make sure skills is handled as Record<string, string[]> if not already. 
// In the store it's defined as a ref of object.
</script>

<template>
  <div class="min-h-screen pt-20 transition-colors duration-300"
           :class="isDark ? 'bg-slate-900' : 'bg-slate-50'">
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center"
          :class="isDark ? 'text-white' : 'text-slate-900'">
        Technical Skills
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(items, category) in skills" :key="category"
             class="p-6 rounded-2xl border transition-all hover:border-primary group"
             :class="isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200 shadow-sm'">
          
          <h3 class="text-lg font-bold mb-6 text-primary">
            {{ category }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span v-for="skill in items" :key="skill"
                  class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                  :class="isDark ? 'bg-slate-700 text-slate-200 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
