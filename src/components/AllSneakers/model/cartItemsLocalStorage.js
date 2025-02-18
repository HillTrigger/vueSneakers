export function getCartItemsFromLocalStorage(cartData) {
  const items = JSON.parse(localStorage.getItem('cartData'));
  if (!items) return cartData;
  return items;
}

export function setCartItemsToLocalStorage(cartData) {
  localStorage.setItem('cartData', JSON.stringify(cartData));
}
