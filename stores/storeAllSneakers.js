import { defineStore } from 'pinia';


export const useAllSneakersStore = defineStore('allSneakersStore', () => {
	// const totalCartPrice = ref(0);
	// const cartItems = ref([]);
	const totalCartPrice = ref(0);
	const cartItems = ref([]);

	watch(cartItems,() => {
		totalCartPrice.value = cartItems.value.reduce((acc, sneaker) => acc + sneaker.price, 0);
		// console.log(cartItems.value.reduce((acc, sneaker) => acc + sneaker.price, 0));
	}, {deep: true});


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
	
  // function updateStoreCartPrice(newTotalCartPrice) {
  //   totalCartPrice.value = newTotalCartPrice;
  // }


	function resetValue() {
		cartItems.value = [];
		localStorage.removeItem('cartData');
	}

  return { totalCartPrice, cartItems, getCartItems,  toggleCartItem, resetValue};
});


