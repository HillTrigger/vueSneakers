export function getCartItems(sneakersData, cartItems) {
  // Фильтруем объекты, оставляем только те, чьи id есть в cartItems
  const filteredSneakers = sneakersData.filter((sneaker) => cartItems.includes(sneaker.id));

  // Сортируем отфильтрованные объекты по порядку id в cartItems
  return filteredSneakers.sort((a, b) => {
    return cartItems.indexOf(a.id) - cartItems.indexOf(b.id);
  });
}
