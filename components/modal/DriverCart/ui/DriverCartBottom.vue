<script setup lang="js">
import { ref } from 'vue';

import UiButton from '~/components/base/Button.vue';

defineProps({
  cartTotalPrice: {
    type: Number,
    default: 21498,
  },
});

const emit = defineEmits(['createOrder']);

// Функция для передачи isFormActive как ref в createOrder
const handleCreateOrder = () => {
  // Передаем сам ref, а не его значение
  // eslint-disable-next-line vue/no-ref-as-operand
  emit('createOrder', isFormActive);
};
const isFormActive = ref(true);
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex">
      <span>Итого:</span>
      <div class="grow border-b-2 border-dotted mx-2"/>
      <span class="font-semibold">{{ cartTotalPrice.toLocaleString('ru-RU') + ' руб.' }}</span>
    </div>
    <div class="flex">
      <span>Налог 5%:</span>
      <div class="grow border-b-2 border-dotted mx-2"/>
      <span class="font-semibold">{{
        (cartTotalPrice * 0.05).toLocaleString('ru-RU') + ' руб.'
      }}</span>
    </div>
    <UiButton :disabled="!isFormActive" @click="handleCreateOrder" />
  </div>
</template>
