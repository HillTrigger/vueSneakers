<script setup>
import Arrow from './icons/Arrow.vue';

defineProps({
  text: {
    type: String,
    default: 'Оформить заказ',
  },
  left: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="flex py-5 px-8 bg-[#9DD458] hover:bg-[rgb(163,198,120)] disabled:bg-[#d5ffa2] cursor-pointer items-center w-full color-white rounded-2xl font-semibold text-base text-white"
  >
    <span class="grow">{{ text }}</span>
    <Arrow :left="left" />
  </button>
</template>
