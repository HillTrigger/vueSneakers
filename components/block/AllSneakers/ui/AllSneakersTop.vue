<script setup lang="js">
import Search from '../../../../assets/sprite/svg/search.svg';	
import { sortMethods } from '../constans';
// import Search from '@/assets/sprite/svg/search.svg';
// import { sortMethods } from '../constans';

// import Search from '@/assets/search.svg';

const props = defineProps({
  sortBy: {
    type: Object,
    default: () => ({}),
  }
});
// const emit = defineEmits(['update:search', 'update:filter', 'handleSortChange']);
const emit = defineEmits(['update:search', 'update:filter', 'handleSortChange']);
const handleInput = (event) => {
  emit('update:search', event.target.value);
};
const handleSelect = (e) => {
	
  emit('update:filter', {
    ...props.sortBy,
    name: e.target.value,
  });
};
</script>

<template>
  <div class="flex justify-between">
    <h3 class="text-[2rem] font-bold">Все кроссовки</h3>
    <div class="flex gap-4">
      <BaseSelect
        :options="['go', 'python', 'rust', 'javascript']"
        :default="'go'"
        class="select w-32"
        @input="() => console.log('!!!')"
      />
      <!-- <v-select></v-select> -->
      <!-- <select
        class="cursor-pointer flex items-center border-[#F3F3F3] outline-slate-400 border-2 focus:border-slate-400 focus-visible:border-slate-400 rounded-xl px-4 placeholder-[#C4C4C4]"
        @change="handleSelect"
        @click="(e) => emit('handleSortChange', e)"
      >
        <option :value="sortMethods.sortByDefault">
          По порядку {{ sortBy[sortMethods.sortByDefault] }}
        </option>
        <option :value="sortMethods.sortByPrice">
          По цене {{ sortBy[sortMethods.sortByPrice] }}
        </option>
      </select> -->
			
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
