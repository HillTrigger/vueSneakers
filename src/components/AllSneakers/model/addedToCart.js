export function addToCart(sneaker, btnCartRef, allSneakersSettings) {
  if (!sneaker.isAdded) {
    allSneakersSettings.cartData.cartItems = [
      ...allSneakersSettings.cartData.cartItems,
      sneaker.id,
    ];

    sneaker.isAdded = true;
  } else {
    allSneakersSettings.cartData.cartItems = allSneakersSettings.cartData.cartItems.filter(
      (item) => item !== sneaker.id,
    );

    sneaker.isAdded = false;
  }
  console.log(allSneakersSettings.cartData.cartItems);
}

function updateCartTotalPrice() {}
