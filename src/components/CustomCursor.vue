<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursor = ref<HTMLElement | null>(null);
const cursorFollower = ref<HTMLElement | null>(null);

const onMouseMove = (e: MouseEvent) => {
  if (cursor.value && cursorFollower.value) {
    cursor.value.style.left = e.clientX + 'px';
    cursor.value.style.top = e.clientY + 'px';
    
    // Smooth delay for follower
    setTimeout(() => {
        if(cursorFollower.value) {
            cursorFollower.value.style.left = e.clientX + 'px';
            cursorFollower.value.style.top = e.clientY + 'px';
        }
    }, 80);
  }
};

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
});
</script>

<template>
  <div ref="cursor" class="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"></div>
  <div ref="cursorFollower" class="fixed w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 ease-out mix-blend-difference"></div>
</template>
