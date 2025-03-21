export function updateDataFlags(items, favorites = [], cartItems = []) {
	// console.log(cartItems.value);
	// console.log(cartItems);
	
  const cartItemsMap = new Map(cartItems.map((sneakerInCart) => [sneakerInCart.id, sneakerInCart]));

  if (favorites.length > 0) {
    const favoritesMap = new Map(favorites.map((favorite) => [favorite.item_id, favorite]));

    items.value = items.value.map((sneaker) => {
      const favorite = favoritesMap.get(sneaker.id);
      const isAdded = cartItemsMap.has(sneaker.id);

      return {
        ...sneaker,
        favoriteId: favorite ? favorite.id : null,
        isFavorite: !!favorite,
        isAdded: isAdded,
      };
    });
  } else {
    items.value = items.value.map((sneaker) => {
      const isAdded = cartItemsMap.has(sneaker.id);

      return {
        ...sneaker,
        isAdded: isAdded,
      };
    });
  }
} 
