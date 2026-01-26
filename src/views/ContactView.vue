<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { personalInfo } = storeToRefs(store);
</script>

<template>
  <div class="min-h-screen pt-20 transition-colors duration-300"
           :class="isDark ? 'bg-slate-800' : 'bg-white'">
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
           :class="isDark ? 'bg-slate-900' : 'bg-slate-50'">
        
        <!-- Contact Info -->
        <div class="p-10 md:w-1/2 bg-primary text-slate-900 relative overflow-hidden">
          <div class="relative z-10">
            <h3 class="text-3xl font-bold mb-6">Let's Connect</h3>
            <p class="mb-8 font-medium opacity-90">
              I'm open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div class="space-y-6">
              <a :href="'mailto:' + personalInfo.email" class="flex items-center space-x-4 group">
                <div class="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Mail class="w-6 h-6" />
                </div>
                <span class="font-medium">{{ personalInfo.email }}</span>
              </a>
              
              <a :href="'tel:' + personalInfo.phone" class="flex items-center space-x-4 group">
                <div class="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Phone class="w-6 h-6" />
                </div>
                <span class="font-medium">{{ personalInfo.phone }}</span>
              </a>
              
              <div class="flex items-center space-x-4">
                <div class="p-3 bg-white/20 rounded-lg">
                  <MapPin class="w-6 h-6" />
                </div>
                <span class="font-medium">{{ personalInfo.location }}</span>
              </div>
            </div>
          </div>
          
          <!-- Decorative Circles -->
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div class="absolute top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <!-- Form (Visual Only for now) -->
        <div class="p-10 md:w-1/2">
           <form class="space-y-6" @submit.prevent>
             <div>
               <label class="block text-sm font-medium mb-2" :class="isDark ? 'text-slate-300' : 'text-slate-700'">Name</label>
               <input type="text" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      :class="isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900'"
                      placeholder="John Doe">
             </div>
             
             <div>
               <label class="block text-sm font-medium mb-2" :class="isDark ? 'text-slate-300' : 'text-slate-700'">Email</label>
               <input type="email" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      :class="isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900'"
                      placeholder="john@example.com">
             </div>

             <div>
               <label class="block text-sm font-medium mb-2" :class="isDark ? 'text-slate-300' : 'text-slate-700'">Message</label>
               <textarea rows="4" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                         :class="isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900'"
                         placeholder="Hello..."></textarea>
             </div>

             <button class="w-full py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1 hover:shadow-lg"
                     :class="isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'">
               Send Message
             </button>
           </form>
        </div>

      </div>
    </div>
  </div>
</template>
