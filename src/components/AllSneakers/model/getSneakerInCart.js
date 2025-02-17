import { getCartItemsId } from './getCartItemsId';

export async function getSneakerInCart(sneakers, allSneakersSettings) {
  const cartItemsId = await getCartItemsId();

  allSneakersSettings.cartItems = sneakers
    .filter((sneaker) => cartItemsId.some((cartItem) => sneaker.id === cartItem.parentId))
    .map((sneaker) => {
      const cartItem = cartItemsId.find((cartItem) => sneaker.id === cartItem.parentId);
      return {
        ...sneaker,
        isAdded: true,
        cartId: cartItem?.parentId,
      };
    });

  console.log(allSneakersSettings.cartItems);
}
