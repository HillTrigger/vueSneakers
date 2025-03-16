import axios from 'axios';

export async function createOrder(isFormActive, totalCartPrice, cartItems, resetValue) {
  isFormActive.value = false;
  if (cartItems.length <= 0) {
    isFormActive.value = true;
    return;
  }

  try {
		const items = cartItems.map(el => el.id);	
    const newOrder = {
      items: items,
      totalPrice: totalCartPrice,
    };
    const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/orders', newOrder);


		resetValue();
		
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    isFormActive.value = true;
  }
}
