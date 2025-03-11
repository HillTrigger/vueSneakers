import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAllSneakersStore = defineStore('allSneakersStore', () => {
  const totalCartPrice = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  function updateStoreCartPrice(newTotalCartPrice) {
    totalCartPrice.value = newTotalCartPrice;
  }

  return { totalCartPrice, updateStoreCartPrice };
});
