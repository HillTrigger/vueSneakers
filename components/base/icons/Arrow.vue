<script setup lang="js">
defineProps({
  left: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg
    :class="['w-3.5 h-3', left && '-order-1 -scale-x-100']"
    width="100%"
    height="100%"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7H14.7143"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.71436 1L14.7144 7L8.71436 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
