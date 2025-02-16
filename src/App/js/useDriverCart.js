import { ref } from 'vue';

export function useDriverCart() {
  const driverCartState = ref(false);

  function driverCartOpen() {
    driverCartState.value = true;
  }
  function driverCartClose() {
    driverCartState.value = false;
  }

  return {
    driverCartState,
    driverCartOpen,
    driverCartClose,
  };
}
