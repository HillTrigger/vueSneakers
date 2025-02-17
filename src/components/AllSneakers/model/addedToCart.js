import axios from 'axios';

export async function addToCart(sneaker, btnCartRef) {
  const isAdded = sneaker.isAdded;
  btnCartRef.disabled = true;
  try {
    if (!sneaker.isAdded) {
      sneaker.isAdded = true;
      const newCartItem = {
        parentId: sneaker.id,
      };
      const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/order', newCartItem);
      sneaker.cartId = data.id;
    } else {
      sneaker.isAdded = false;
      const response = await axios.delete(
        `https://72f7c776150d43f2.mokky.dev/order/${sneaker.cartId}`,
      );
      if (response.status === 200 || response.status === 204) {
        sneaker.cartId = null;
      } else {
        console.error('Ошибка удаления избранного:', response);
      }
    }
  } catch (err) {
    sneaker.isAdded = isAdded;
    console.error('Ошибка при запросе:', err);
  } finally {
    btnCartRef.disabled = false;
  }
}
