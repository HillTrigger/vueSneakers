export function getCartItems(sneakersData, cartData) {
  // Фильтруем объекты, оставляем только те, чьи id есть в cartItems
  const filteredSneakers = sneakersData.filter((sneaker) =>
    cartData.cartItems.includes(sneaker.id),
  );
  // Сортируем отфильтрованные объекты по порядку id в cartItems
  return filteredSneakers.sort((a, b) => {
    return cartData.cartItems.indexOf(a.id) - cartData.cartItems.indexOf(b.id);
  });
}
