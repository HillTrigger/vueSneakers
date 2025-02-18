import axios from 'axios';

export async function createOrder(allSneakersSettings, storeAllSneakers, isFormActive) {
  console.log(isFormActive);

  isFormActive.value = false;
  if (allSneakersSettings.cartData.cartItems.length <= 0) {
    isFormActive.value = true;
    return;
  }

  console.log(allSneakersSettings.cartData.cartItems, storeAllSneakers.totalCartPrice);
  try {
    const newOrder = {
      items: [...allSneakersSettings.cartData.cartItems],
      totalPrice: storeAllSneakers.totalCartPrice,
    };
    const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/orders', newOrder);

    storeAllSneakers.updateStoreCartPrice(0);
    allSneakersSettings.cartData.cartItems.splice(0, allSneakersSettings.cartData.cartItems.length);
    allSneakersSettings.sneakersData = allSneakersSettings.sneakersData.map((sneaker) => ({
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
