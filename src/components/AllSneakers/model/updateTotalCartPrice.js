export function updateTotalCartPrice(allSneakersSettings) {
  allSneakersSettings.cartData.cartTotalPrice = allSneakersSettings.cartData.cartItems.reduce(
    (sum, sneaker) => {
      return sum + sneaker.price;
    },
    0,
  );
}
