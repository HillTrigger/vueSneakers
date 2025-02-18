import { getCartItemsId } from './getCartItems';
import { updateTotalCartPrice } from './updateTotalCartPrice';

export async function getSneakerInCart(sneakers, allSneakersSettings) {
  const cartItemsId = await getCartItemsId();

  allSneakersSettings.cartData.cartItems = sneakers
    .filter((sneaker) => cartItemsId.some((cartItem) => sneaker.id === cartItem.parentId))
    .map((sneaker) => {
      const cartItem = cartItemsId.find((cartItem) => sneaker.id === cartItem.parentId);
      return {
        ...sneaker,
        isAdded: true,
        cartId: cartItem?.id,
      };
    });

  updateTotalCartPrice(allSneakersSettings);
}
