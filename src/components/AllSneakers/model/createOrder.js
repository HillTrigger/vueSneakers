import axios from 'axios';

export async function createOrder(shopData, isFormActive) {
  console.log(isFormActive);

  isFormActive.value = false;
  if (shopData.cartData.cartItems.length <= 0) {
    isFormActive.value = true;
    return;
  }

  console.log(shopData.cartData.cartItems, shopData.cartData.totalCartPrice);
  try {
    const newOrder = {
      items: [...shopData.cartData.cartItems],
      totalPrice: shopData.cartData.totalCartPrice,
    };
    const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/orders', newOrder);

    shopData.cartData.totalCartPrice = 0;
    shopData.cartData.cartItems.splice(0, shopData.cartData.cartItems.length);
    shopData.sneakersData = shopData.sneakersData.map((sneaker) => ({
      ...sneaker,
      isAdded: false,
    }));
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    isFormActive.value = true;
  }
}
