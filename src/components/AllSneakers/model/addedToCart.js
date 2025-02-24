export function addToCart(sneaker, btnCartRef, shopData) {
  if (!sneaker.isAdded) {
    shopData.cartData.cartItems = [...shopData.cartData.cartItems, sneaker.id];

    sneaker.isAdded = true;
  } else {
    shopData.cartData.cartItems = shopData.cartData.cartItems.filter((item) => item !== sneaker.id);

    sneaker.isAdded = false;
  }
}
