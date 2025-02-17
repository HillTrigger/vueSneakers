import { ref } from 'vue';

export function useDriverCart() {
  const driverCartState = ref(false);

  function driverCartOpen() {
    driverCartState.value = true;
  }
  function driverCartClose(e) {
    if (e.target !== e.currentTarget) return;
    driverCartState.value = false;
  }

  return {
    driverCartState,
    driverCartOpen,
    driverCartClose,
  };
}
