<script setup lang="js">
import UiButton from '@/components/uikit/UiButton.vue'

defineProps({
  total: {
    type: Number,
    default: 21498,
  },
  tax: {
    type: Number,
    default: 1074,
  },
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="flex">
      <span>Итого:</span>
      <div class="grow border-b-2 border-dotted mx-2"></div>
      <span class="font-semibold">{{ total.toLocaleString('ru-RU') + ' руб.' }}</span>
    </div>
    <div class="flex">
      <span>Налог 5%:</span>
      <div class="grow border-b-2 border-dotted mx-2"></div>
      <span class="font-semibold">{{ tax.toLocaleString('ru-RU') + ' руб.' }}</span>
    </div>
    <UiButton />
  </div>
</template>
