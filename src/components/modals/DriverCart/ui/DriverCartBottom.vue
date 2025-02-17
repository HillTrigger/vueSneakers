<script setup lang="js">
import UiButton from '@/components/uikit/UiButton.vue';

defineProps({
  cartTotalPrice: {
    type: Number,
    default: 21498,
  },
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex">
      <span>Итого:</span>
      <div class="grow border-b-2 border-dotted mx-2"></div>
      <span class="font-semibold">{{ cartTotalPrice.toLocaleString('ru-RU') + ' руб.' }}</span>
    </div>
    <div class="flex">
      <span>Налог 5%:</span>
      <div class="grow border-b-2 border-dotted mx-2"></div>
      <span class="font-semibold">{{
        (cartTotalPrice * 0.05).toLocaleString('ru-RU') + ' руб.'
      }}</span>
    </div>
    <UiButton />
  </div>
</template>
