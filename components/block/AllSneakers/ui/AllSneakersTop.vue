<script setup lang="js">
import Search from '../../../../assets/sprite/svg/search.svg';	
import { sortMethods } from '../constans';

defineProps({
  sortByName: {
    type: String,
    required: true,
  }
});
// const emit = defineEmits(['update:search', 'handleSortChange']);
const emit = defineEmits(['update:search', 'handleSortChange']);
const handleInput = (event) => {
  emit('update:search', event.target.value);
};

</script>

<template>
  <div class="flex justify-between">
    <h3 class="text-[2rem] font-bold">Все кроссовки</h3>
    <div class="flex gap-4">
      <BaseSelect
        :options="[sortMethods.sortByDefaultAsc, sortMethods.sortByPriceAsc]"
        :sort-by-name="sortByName"
        class="select w-32"
        @input="(e) => emit('handleSortChange', e)"
      />
      <div class="relative flex items-center">
        <input
          placeholder="Поиск..."
          class="border-[#F3F3F3] focus:border-slate-400 border-2 rounded-xl pl-8 pr-4 outline-none placeholder-[#C4C4C4] h-full"
          type="text"
          @input="handleInput"
        >
        <Search class="w-[0.875rem] absolute  left-[0.73rem] text-[#E4E4E4]" />
      </div>
    </div>
  </div>
</template>
