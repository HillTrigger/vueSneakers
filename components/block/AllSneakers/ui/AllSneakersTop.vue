<script setup lang="js">
import Search from '../../../../assets/sprite/svg/search.svg';	
// import Search from '@/assets/sprite/svg/search.svg';
// import { sortMethods } from '../constans';

// import Search from '@/assets/search.svg';

// const props = defineProps({
//   search: {
//     type: String,
//     default: '',
//   },
//   filter: {
//     type: Object,
//     default: {},
//   },
//   handleSortChange: {
//     type: Function,
//     default: () => {
//       console.log('Забыли передать функцию!');
//     },
//   },
// });

// const emit = defineEmits(['update:search', 'update:filter', 'handleSortChange']);
const emit = defineEmits(['update:search']);
const handleInput = (event) => {
  emit('update:search', event.target.value);
};
// const handleSelect = (e) => {
//   emit('update:filter', {
//     ...props.filter,
//     name: e.target.value,
//   });
// };
</script>

<template>
  <div class="flex justify-between">
    <h3 class="text-[2rem] font-bold">Все кроссовки</h3>
    <div class="flex gap-4">
      <select
        class="cursor-pointer flex items-center border-[#F3F3F3] outline-slate-400 border-2 focus:border-slate-400 focus-visible:border-slate-400 rounded-xl px-4 placeholder-[#C4C4C4]"
      >
        <option >
          По порядку
        </option>
        <option>
          По цене
        </option>
      </select>
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
