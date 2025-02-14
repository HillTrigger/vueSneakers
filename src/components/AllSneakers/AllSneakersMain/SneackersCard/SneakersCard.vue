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
})
</script>

<template>
  <div class="p-8 pt-5 border-[#F3F3F3] border-2 rounded-3xl flex flex-col w-52 relative">
    <img class="pointer-events-none" :src="imageUrl" :alt="title" />
    <h5 class="text-sm mb-3.5">{{ title }}</h5>
    <div class="absolute cursor-pointer">
      <LikeOff class="hidden" />
      <LikeOn />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <span class="text-xs text-[#BDBDBD]">ЦЕНА:</span>
        <span class="text-sm font-bold">{{ price.toLocaleString('ru-RU') + ' руб.' }}</span>
      </div>
      <div class="cursor-pointer">
        <Plus class="hidden" />
        <Checked />
      </div>
    </div>
  </div>
</template>
