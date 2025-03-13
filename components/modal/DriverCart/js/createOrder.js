import axios from 'axios';

export async function createOrder(cartItems, isFormActive) {
  // console.log(isFormActive);

  // isFormActive.value = false;
  // if (cartItems.length <= 0) {
  //   isFormActive.value = true;
  //   return;
  // }

  // try {
  //   const newOrder = {
  //     items: [...cartItems],
  //     totalPrice: totalCartPrice,
  //   };
  //   const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/orders', newOrder);

  //   totalCartPrice = 0;
  //   cartItems.splice(0, cartItems.length);
  //   sneakersData = sneakersData.map((sneaker) => ({
  //     ...sneaker,
  //     isAdded: false,
  //   }));
  //   return data;
  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   isFormActive.value = true;
  // }
}
