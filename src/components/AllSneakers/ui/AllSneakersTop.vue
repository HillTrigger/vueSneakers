<script setup lang="js">
import { defineEmits } from 'vue'
import Search from '@/assets/search.svg'

const emit = defineEmits(['update:modelValue'])
const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex justify-between">
    <h3 class="text-[2rem] font-bold">Все кроссовки</h3>
    <div class="relative flex">
      <input
        placeholder="Поиск..."
        class="border-[#F3F3F3] focus:border-slate-400 border-2 rounded-xl pl-8 pr-4 outline-none placeholder-[#C4C4C4]"
        type="text"
        @input="handleInput"
      />
      <Search class="w-[0.875rem] absolute top-[0.73rem] left-[0.73rem] flex items-center" />
    </div>
  </div>
</template>
