import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useAllSneakersStore = defineStore('allSneakersStore', () => {
  const totalCartPrice = ref(0);

	const cartItems = ref([]);

  function getCartItems() {
    try {
      const items = JSON.parse(localStorage.getItem('cartData'));
      if (items) {
        cartItems.value = items;
      }
    } catch (error) {
      console.error('Ошибка при парсинге данных из localStorage:', error);
    }
    return cartItems.value;
  }

	// function setCartItem(item) {
	// 	cartItems.value.push(item);
	// 	localStorage.setItem('cartData', JSON.stringify(cartItems.value));
	// 	return item;
	// }

	function toggleCartItem(sneaker) {
		if (cartItems.value.some(el => el.id === sneaker.id)) {
			cartItems.value = cartItems.value.filter(el => el.id !== sneaker.id);
			localStorage.setItem('cartData', JSON.stringify(cartItems.value));
		} else {
			cartItems.value.push(sneaker);
			localStorage.setItem('cartData', JSON.stringify(cartItems.value));
		}
	}
	
  function updateStoreCartPrice(newTotalCartPrice) {
    totalCartPrice.value = newTotalCartPrice;
  }

  return { totalCartPrice, cartItems, updateStoreCartPrice, getCartItems,  toggleCartItem };
});


