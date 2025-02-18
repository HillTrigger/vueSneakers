export function updateTotalCartPrice(filteredSneakers, cartData) {
  cartData.cartTotalPrice = filteredSneakers.reduce((sum, sneaker) => {
    return sum + sneaker.price;
  }, 0);
}
