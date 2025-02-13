<script setup lang="js">
defineProps({
  className: String,
})
</script>

<template>
  <button :class="['group flex gap-2.5 items-center cursor-pointer relative h-7', className]">
    <slot name="svg" />
    <span
      class="relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0"
    >
      <slot name="text" />
    </span>
  </button>
</template>
