<script setup lang="js">
const emit = defineEmits(['driverCartClose']);
</script>

<template>
  <div class="z-50 fixed top-0 left-0 w-full h-full">
    <div class="w-full h-full relative bg-black/50" @click="(e) => emit('driverCartClose', e)">
      <slot/>
    </div>
  </div>
</template>
