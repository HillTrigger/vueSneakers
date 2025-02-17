import axios from 'axios';

export async function addToCart(sneaker, btnCartRef, allSneakersSettings) {
  // Запоминаем исходное состояние
  const isAdded = sneaker.isAdded;
  // Блокируем кнопку чтобы клиент не спамил запросами
  btnCartRef.disabled = true;
  try {
    if (!sneaker.isAdded) {
      // Сразу меняем состояние кнопки для лучшего UX опыта
      sneaker.isAdded = true;
      const newCartItem = {
        parentId: sneaker.id,
      };
      const { data } = await axios.post('https://72f7c776150d43f2.mokky.dev/order', newCartItem);

      // Добавляем новый кроссовок в корзину
      allSneakersSettings.cartItems = [...allSneakersSettings.cartItems, sneaker];
      // Запоминаем id чтобы потом легко удалить его с бэка
      sneaker.cartId = data.id;
    } else {
      sneaker.isAdded = false;
      const response = await axios.delete(
        `https://72f7c776150d43f2.mokky.dev/order/${sneaker.cartId}`,
      );
      if (response.status === 200 || response.status === 204) {
        // Удаляю кроссовок из cartItems
        allSneakersSettings.cartItems = allSneakersSettings.cartItems.filter(
          (cartItem) => sneaker.id !== cartItem.id,
        );

        // Убираю cartId т.к. sneaker уже не корзине
        sneaker.cartId = null;
      } else {
        console.error('Ошибка удаления избранного:', response);
      }
    }
  } catch (err) {
    // В случае ошибки возвращаем исходное состояние
    sneaker.isAdded = isAdded;
    console.error('Ошибка при запросе:', err);
  } finally {
    // При любом исходе разблокируем кнопку
    btnCartRef.disabled = false;
  }
}
