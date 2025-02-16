<script setup lang="js">
import { defineEmits } from 'vue';
import Search from '@/assets/search.svg';
import { sortMethods } from '../constans';

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
  filter: {
    type: Object,
    default: {},
  },
  handleSortChange: {
    type: Function,
    default: () => {
      console.log('Забыли передать функцию!');
    },
  },
});

const emit = defineEmits(['update:search', 'update:filter', 'handleSortChange']);
const handleInput = (event) => {
  emit('update:search', event.target.value);
};
const handleSelect = (e) => {
  emit('update:filter', {
    ...props.filter,
    name: e.target.value,
  });
};
</script>

<template>
  <div class="flex justify-between">
    <h3 class="text-[2rem] font-bold">Все кроссовки</h3>
    <div class="flex gap-4">
      <select
        @change="handleSelect"
        class="cursor-pointer flex items-center border-[#F3F3F3] border-2 rounded-xl px-4 placeholder-[#C4C4C4]"
      >
        <option @mousedown="(e) => emit('handleSortChange', e)" :value="sortMethods.sortByDefault">
          По порядку {{ props.filter[sortMethods.sortByDefault] }}
        </option>
        <option @mousedown="(e) => emit('handleSortChange', e)" :value="sortMethods.sortByPrice">
          По цене {{ props.filter[sortMethods.sortByPrice] }}
        </option>
      </select>
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
  </div>
</template>
