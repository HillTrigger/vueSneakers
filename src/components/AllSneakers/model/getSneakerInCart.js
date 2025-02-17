import { getCartItemsId } from './getCartItemsId';

export async function getSneakerInCart(sneakers, allSneakersSettings) {
  // const cartItemsNew = [];
  const cartItemsId = await getCartItemsId();

  allSneakersSettings.cartItems = sneakers.filter((sneaker) => {
    return cartItemsId.some((cartItem) => sneaker.id === cartItem.parentId);
  });
}
