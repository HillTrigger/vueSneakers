<script setup lang="js">
// import { ref } from 'vue';

import Plus from '../../assets/sprite/svg/plus.svg';
import Checked from '../../assets/sprite/svg/checked.svg';
import LikeOff from '../../assets/sprite/svg/like-1.svg';
import LikeOn from '../../assets/sprite/svg/like-2.svg';

defineProps({
  imageUrl: {
    type: String,
    default: '/img/sneakers/sneakers-1.jpg',
  },
  title: {
    type: String,
		default: 'Мужские Кроссовки Nike Blazer Mid Suede'
  },
  price: {
    type: Number,
    default: 15000,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['favoriteToggle']);
const likeRef = ref(null);
// const btnCartRef = ref(null);
</script>

<template>
  <div
    class="p-8 pt-5 min-w-52 border-[#F3F3F3] border-2 rounded-3xl flex flex-col relative hover:border-gray-300 transition-transform cursor-pointer"
  >
    <img class="pointer-events-none max-w-36"  :src="imageUrl" alt="sneaker">
    <h5 class="text-sm mb-3.5">{{ title }}</h5>
    <button
      ref="likeRef"
      class="absolute cursor-pointer"
      @click="() => emit('favoriteToggle', likeRef)"
    >
      <LikeOn v-if="isFavorite" class="text-[#FEF0F0] hover:text-[rgb(234,221,221)]" />
      <LikeOff v-else class="text-white hover:text-gray-100" />
    </button>
    <div class="flex justify-between items-center mt-auto">
      <div class="flex flex-col">
        <span class="text-xs text-[#BDBDBD]">ЦЕНА:</span>
        <span class="text-sm font-bold">{{ price.toLocaleString('ru-RU') + ' руб.' }}</span>
      </div>
      <button class="cursor-pointer">
        <Checked v-if="isAdded" />
        <Plus v-else class="text-white hover:text-gray-100" />
      </button>
    </div>
  </div>
</template>
