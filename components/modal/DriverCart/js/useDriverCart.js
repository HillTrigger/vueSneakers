import { ref } from 'vue';

export function useDriverCart() {
  const driverCartState = ref(false);

  function driverCartOpen() {
    driverCartState.value = true;
  }
  function driverCartCloseOut(e) {
    if (e.target !== e.currentTarget) {return;}
    driverCartState.value = false;
  }
  function driverCartClose() {
    driverCartState.value = false;
  }

  return {
    driverCartCloseOut,
    driverCartState,
    driverCartOpen,
    driverCartClose,
  };
}
