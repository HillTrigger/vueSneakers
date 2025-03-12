export function updateDataFlags(data, favorites, cartItems) {
  return data.map((sneaker) => {
    const favorite = favorites.find((favorite) => favorite.parentId === sneaker.id) || null;
    const isAdded = cartItems.some((id) => id === sneaker.id);

    return {
      ...sneaker,
      favoriteId: favorite?.id,
      isFavorite: !!favorite,
      isAdded: isAdded,
    };
  });
}
