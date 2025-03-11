<script setup lang="js">
const emit = defineEmits(['driverCartClose']);
</script>

<template>
  <div class="z-50 fixed top-0 left-0 w-full h-full">
    <div @click="(e) => emit('driverCartClose', e)" class="w-full h-full relative bg-black/50">
      <slot></slot>
    </div>
  </div>
</template>
