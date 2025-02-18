<script setup>
import UiButton from '@/components/uikit/UiButton.vue';

defineProps({
  imageUrl: {
    type: String,
    default: '/src/assets/package-icon.png',
  },
  title: {
    type: String,
    default: 'Заголовок',
  },
  desc: {
    type: String,
    default: 'Описание',
  },
});

const emit = defineEmits(['driverCartClose']);
</script>

<template>
  <div class="grow flex flex-col justify-center items-center">
    <img class="max-w-28 max-h-28" :src="imageUrl" :alt="title" />
    <div class="text-center mt-5 mb-10">
      <h4 class="font-semibold text-xl">{{ title }}</h4>
      <p class="opacity-40">{{ desc }}</p>
    </div>
    <UiButton @click="emit('driverCartClose')" left text="Вернуться назад" className="max-w-60" />
  </div>
</template>
