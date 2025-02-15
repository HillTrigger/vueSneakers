<script setup lang="js">
import Plus from '@/assets/Plus.svg'
import Checked from '@/assets/Checked.svg'
import LikeOff from '@/assets/like-1.svg'
import LikeOn from '@/assets/like-2.svg'
defineProps({
  imageUrl: {
    type: String,
    default: '/src/assets/sneakers/sneakers-1.jpg',
  },
  title: {
    type: String,
    default: 'Мужские Кроссовки Under Armour Curry 8',
  },
  price: {
    type: Number,
    default: 15199,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  favoriteToggle: {
    type: Function,
    default: () => {
      alert('Не передали функцию в компонент!')
    },
  },
})
</script>

<template>
  <div
    class="p-8 pt-5 border-[#F3F3F3] border-2 rounded-3xl flex flex-col relative hover:border-gray-300 transition-transform cursor-pointer"
  >
    <img class="pointer-events-none max-w-36" :src="imageUrl" :alt="title" />
    <h5 class="text-sm mb-3.5">{{ title }}</h5>
    <div class="absolute cursor-pointer">
      <LikeOff v-if="isFavorite" class="text-white hover:text-gray-100" />
      <LikeOn v-else class="text-[#FEF0F0] hover:text-[rgb(234,221,221)]" />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <span class="text-xs text-[#BDBDBD]">ЦЕНА:</span>
        <span class="text-sm font-bold">{{ price.toLocaleString('ru-RU') + ' руб.' }}</span>
      </div>
      <div @click="favoriteToggle" class="cursor-pointer">
        <Plus v-if="isAdded" class="text-white hover:text-gray-100" />
        <Checked v-else />
      </div>
    </div>
  </div>
</template>
