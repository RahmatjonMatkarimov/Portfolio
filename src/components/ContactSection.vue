<script setup lang="ts">
import { Mail, Phone, Send, Github, MessageSquare, ArrowUpRight, Instagram } from 'lucide-vue-next';
import { usePortfolioStore } from '../stores/portfolio';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

defineProps<{ isDark: boolean }>();
const store = usePortfolioStore();
const { personalInfo, t, socialLinks } = storeToRefs(store);

const form = ref({
  name: '',
  phone: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const isMobile = /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
  const os = /Windows/i.test(ua) ? 'Windows' :
    /Mac OS X/i.test(ua) && !isMobile && !isTablet ? 'macOS' :
      /Linux/i.test(ua) && !isMobile ? 'Linux' :
        /Android/i.test(ua) ? 'Android' :
          /iPhone|iPad|iPod/i.test(ua) ? 'iOS' : 'Noma\'lum OS';
  const deviceType = isTablet ? '📟 Planshet' : isMobile ? '📱 Telefon' : '💻 Kompyuter (PC)';
  return `${deviceType} | ${os}`;
};

const handleSubmit = async () => {
  if (!form.value.name || !form.value.phone || !form.value.message) return;

  isSubmitting.value = true;

  const BOT_TOKEN = '8684981563:AAH6CzhfgkhURcL7egYmNUxlaO6U-LzaAiQ';
  const CHAT_ID = '8001371987';
  const deviceInfo = getDeviceInfo();
  const text = `📬 Yangi Murojaat:\n\n👤 Ism: ${form.value.name}\n📞 Telefon: ${form.value.phone}\n💬 Xabar: ${form.value.message}\n\n🖥️ Qurilma: ${deviceInfo}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
      }),
    });

    if (response.ok) {
      showSuccess.value = true;
      form.value = { name: '', phone: '', message: '' };
      setTimeout(() => showSuccess.value = false, 5000);
    }
  } catch (error) {
    console.error('Failed to send message to Telegram:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-12 md:py-20 relative overflow-hidden transition-colors duration-500"
    :class="isDark ? 'bg-[#020617]' : 'bg-slate-50'">

    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] animate-blob mix-blend-screen opacity-50">
      </div>
      <div
        class="absolute top-[-10%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-pink-500/5 rounded-full blur-[100px] md:blur-[150px] animate-blob animation-delay-2000 mix-blend-screen opacity-50">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center lg:text-left mb-10 md:mb-16 max-w-4xl mx-auto lg:mx-0">
        <div
          class="lg:inline-flex hidden items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-5 animate-fade-in-up">
          <span class="text-[10px] font-black tracking-widest uppercase">{{ t.contact.badge }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-5 tracking-tight animate-fade-in-up"
          :class="isDark ? 'text-white' : 'text-slate-900'">
          {{ t.contact.title1 }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block sm:inline">
            {{ t.contact.title2 }}
          </span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
        <!-- Contact Content -->
        <div class="space-y-8 md:space-y-12 animate-fade-in-left">
          <div class="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <p class="text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 opacity-80"
              :class="isDark ? 'text-slate-300' : 'text-slate-600'">
              {{ t.contact.subtitle }}
            </p>

            <h3 class="text-[11px] md:text-xs font-black tracking-widest uppercase opacity-40 mb-5 md:mb-7">{{
              t.contact.infoTitle }}</h3>
            <div class="space-y-5 md:space-y-8">
              <a :href="'mailto:' + personalInfo.email" class="block group text-left">
                <div
                  class="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] transition-all duration-500 glass dark:glass-dark border-white/5 group-hover:scale-[1.03]">
                  <div
                    class="p-2.5 md:p-4 bg-primary/10 text-primary rounded-xl md:rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Mail class="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div class="min-w-0">
                    <p
                      class="text-[8px] md:text-[9px] font-black tracking-widest uppercase opacity-40 mb-1 leading-none">
                      {{ t.contact.emailMe }}</p>
                    <span class="text-sm md:text-xl font-black tracking-tight block truncate">{{ personalInfo.email
                      }}</span>
                  </div>
                </div>
              </a>

              <a :href="'tel:' + personalInfo.phone" class="block group text-left">
                <div
                  class="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] transition-all duration-500 glass dark:glass-dark border-white/5 group-hover:scale-[1.03]">
                  <div
                    class="p-2.5 md:p-4 bg-purple-500/10 text-purple-500 rounded-xl md:rounded-2xl transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Phone class="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div class="min-w-0">
                    <p
                      class="text-[8px] md:text-[9px] font-black tracking-widest uppercase opacity-40 mb-1 leading-none">
                      {{ t.contact.callMe }}</p>
                    <span class="text-sm md:text-xl font-black tracking-tight block truncate">{{ personalInfo.phone
                      }}</span>
                  </div>
                </div>
              </a>
            </div>

            <div class="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/10">
              <p class="text-[8px] md:text-[9px] font-black tracking-widest uppercase opacity-40 mb-5 md:mb-8">{{
                t.contact.socialTitle }}</p>
              <div class="flex flex-wrap gap-2.5 md:gap-5 justify-center lg:justify-start">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                  class="p-3 md:p-5 rounded-xl md:rounded-2xl transition-all duration-500 glass dark:glass-dark border-white/5 hover:scale-110 hover:-translate-y-2 group">
                  <Github v-if="link.name === 'Github'"
                    class="w-4 h-4 md:w-7 md:h-7 group-hover:text-primary transition-colors" />
                  <Send v-else-if="link.name === 'Telegram'"
                    class="w-4 h-4 md:w-7 md:h-7 group-hover:text-primary transition-colors" />
                  <Instagram v-else-if="link.name === 'Instagram'"
                    class="w-4 h-4 md:w-7 md:h-7 group-hover:text-primary transition-colors" />
                  <MessageSquare v-else class="w-4 h-4 md:w-7 md:h-7 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-fade-in-right">
          <form @submit.prevent="handleSubmit"
            class="p-5 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] glass dark:glass-dark border-white/5 transition-all duration-500 relative overflow-hidden group/form">

            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000">
            </div>

            <h3 class="text-xl md:text-3xl font-black mb-6 md:mb-10 tracking-tight relative z-10 leading-tight">{{
              t.contact.formTitle }}</h3>

            <div class="space-y-6 md:space-y-8 relative z-10">
              <div class="group/input relative">
                <input v-model="form.name" type="text" required
                  class="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-2.5 md:py-4 text-base md:text-xl font-bold outline-none transition-all focus:border-cyan-500 peer"
                  id="name">
                <label for="name"
                  :class="form.name ? '-top-4 text-[10px] md:text-xs text-cyan-500 opacity-100' : 'top-2.5 md:top-4 text-sm md:text-lg opacity-30'"
                  class="absolute left-0 font-bold transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:opacity-100">{{
                    t.contact.formName }}</label>
              </div>

              <div class="group/input relative">
                <input v-model="form.phone" type="tel" required
                  class="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-2.5 md:py-4 text-base md:text-xl font-bold outline-none transition-all focus:border-cyan-500 peer"
                  id="phone">
                <label for="phone"
                  :class="form.phone ? '-top-4 text-[10px] md:text-xs text-cyan-500 opacity-100' : 'top-2.5 md:top-4 text-sm md:text-lg opacity-30'"
                  class="absolute left-0 font-bold transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:opacity-100">{{
                    t.contact.formPhone }}</label>
              </div>

              <div class="group/input relative">
                <textarea v-model="form.message" required rows="3"
                  class="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-2.5 md:py-4 text-base md:text-xl font-bold outline-none transition-all focus:border-cyan-500 peer resize-none"
                  id="message"></textarea>
                <label for="message"
                  :class="form.message ? '-top-4 text-[10px] md:text-xs text-cyan-500 opacity-100' : 'top-2.5 md:top-4 text-sm md:text-lg opacity-30'"
                  class="absolute left-0 font-bold transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:opacity-100">{{
                    t.contact.formMessage }}</label>
              </div>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="mt-8 md:mt-10 group relative w-full py-4 md:py-5.5 rounded-lg md:rounded-xl font-black text-base md:text-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl"
              :class="isDark ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'">
              <span v-if="!isSubmitting" class="relative z-10 flex items-center gap-2.5">
                {{ t.contact.formSubmit }}
                <ArrowUpRight
                  class="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <span v-else class="flex items-center gap-3 relative z-10">
                <div
                  class="w-4 h-4 md:w-5 md:h-5 border-4 border-slate-400 border-t-white dark:border-t-slate-900 rounded-full animate-spin">
                </div>
                {{ t.contact.sending }}
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-0">
              </div>
            </button>

            <p v-if="showSuccess"
              class="mt-5 text-green-500 font-black text-center text-sm md:text-base animate-bounce relative z-10">
              {{ t.contact.success }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
