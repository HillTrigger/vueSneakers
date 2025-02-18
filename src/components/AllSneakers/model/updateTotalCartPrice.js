export function getTotalCartPrice(filteredSneakers, cartData) {
  return filteredSneakers.reduce((sum, sneaker) => {
    return sum + sneaker.price;
  }, 0);
}
