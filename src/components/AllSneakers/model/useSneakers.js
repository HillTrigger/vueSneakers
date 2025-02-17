import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';
import { sortMethods, sortOrder } from '../constans';
import { sortSneakers } from './sortSneakers';
import { getFavorites } from './getFavorites';
import { getSneakerInCart } from './getSneakerInCart';
import { getCartItemsId } from './getCartItemsId';

export function useSneakers() {
  const allSneakersSettings = reactive({
    sneakersData: [],
    sneakersSorted: [],
    cartItems: [],
    searchQuery: '',
    sortBy: {
      name: sortMethods.sortByDefault,
      [sortMethods.sortByDefault]: sortOrder.asc,
      [sortMethods.sortByPrice]: sortOrder.asc,
    },
  });

  onMounted(async () => {
    try {
      const { data } = await axios('https://72f7c776150d43f2.mokky.dev/items');
      const favorites = await getFavorites();
      const addedCartItems = await getCartItemsId();

      const newData = data.map((sneaker) => {
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
      allSneakersSettings.sneakersData = newData;
      allSneakersSettings.sneakersSorted = newData;
      // allSneakersSettings.cartItems = data;

      await getSneakerInCart(data, allSneakersSettings);
    } catch (err) {
      console.log(err);
    }
  });

  watch(
    () => [allSneakersSettings.searchQuery, allSneakersSettings.sortBy],
    () => {
      let filteredSneakers = searchSneakers(
        allSneakersSettings.sneakersData,
        allSneakersSettings.searchQuery,
      );
      allSneakersSettings.sneakersSorted = sortSneakers(
        filteredSneakers,
        allSneakersSettings.sortBy,
      );
    },
    { flush: 'post' },
  );
  return {
    allSneakersSettings,
  };
}
