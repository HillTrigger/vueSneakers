export function updateDataFlags(data, favorites, cartData) {
  return data.map((sneaker) => {
    const favorite = favorites.find((favorite) => favorite.parentId === sneaker.id) || null;
    const isAdded = cartData.cartItems.some((id) => id === sneaker.id);

    return {
      ...sneaker,
      favoriteId: favorite?.id,
      isFavorite: !!favorite,
      isAdded: isAdded,
    };
  });
}
