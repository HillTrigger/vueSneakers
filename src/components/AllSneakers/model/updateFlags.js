export function updateDataFlags(data, favorites, addedCartItems) {
  return data.map((sneaker) => {
    const favorite = favorites.find((favorite) => favorite.parentId === sneaker.id) || null;
    const addedCartItem = addedCartItems.find((added) => added.parentId === sneaker.id) || null;
    return {
      ...sneaker,
      favoriteId: favorite?.id,
      isFavorite: !!favorite,
      cartId: addedCartItem?.id,
      isAdded: !!addedCartItem,
    };
  });
}
