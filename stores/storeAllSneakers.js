import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useAllSneakersStore = defineStore('allSneakersStore', () => {
  const totalCartPrice = ref(0);

	const cartItems = ref([]);

  // Функция для получения товаров из localStorage
  function getCartItems() {
    try {
      const items = JSON.parse(localStorage.getItem('cartData'));
      // Если данные есть, обновляем реактивный массив
      if (items) {
        cartItems.value = items;
      }
    } catch (error) {
      console.error('Ошибка при парсинге данных из localStorage:', error);
    }
    return cartItems.value;
  }

	function setCartItem(item) {
		cartItems.value.push(item);
		localStorage.setItem('cartData', JSON.stringify(cartItems.value));
		return item;
	}
	
  function updateStoreCartPrice(newTotalCartPrice) {
    totalCartPrice.value = newTotalCartPrice;
  }

  return { totalCartPrice, cartItems, updateStoreCartPrice, getCartItems, setCartItem };
});
