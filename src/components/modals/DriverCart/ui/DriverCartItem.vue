<script setup lang="js">
import Cross from '@/assets/close.svg';
import { ref } from 'vue';
defineProps({
  imageUrl: {
    type: String,
    default: '/src/assets/sneakers/sneakers-1.jpg',
  },
  title: {
    type: String,
    default: 'Мужские Кроссовки Nike Air Max 270',
  },
  price: {
    type: Number,
    default: 12999,
  },
});

const emit = defineEmits(['addToCart']);

const btnCartRef = ref(null);
</script>

<template>
  <div
    class="flex gap-4 p-5 w-full items-center border-2 border-[#F3F3F3] hover:border-gray-300 rounded-2xl"
  >
    <img class="pointer-events-none w-20 h-20" :src="imageUrl" :alt="title" />
    <div class="flex flex-col gap-2">
      <p class="text-sm">{{ title }}</p>
      <span class="text-sm font-bold" n>{{ price.toLocaleString('ru-RU') + ' руб.' }}</span>
    </div>
    <Cross
      @click="() => emit('addToCart', btnCartRef)"
      ref="btnCartRef"
      class="max-w-8 h-8 w-full text-white self-end cursor-pointer hover:text-gray-100"
    />
  </div>
</template>
