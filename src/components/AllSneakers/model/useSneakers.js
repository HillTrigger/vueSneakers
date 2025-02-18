import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';
import { sortMethods, sortOrder } from '../constans';
import { sortSneakers } from './sortSneakers';
import { getFavorites } from './getFavorites';
import { updateDataFlags } from './updateFlags';
import { getTotalCartPrice } from './updateTotalCartPrice';
import { useAllSneakersStore } from '@/App/js/storeAllSneakers';
import { getCartItems } from './getCartItems';
import { getCartItemsFromLocalStorage, setCartItemsToLocalStorage } from './cartItemsLocalStorage';

export function useSneakers() {
  const { updateStoreCartPrice } = useAllSneakersStore();

  const allSneakersSettings = reactive({
    sneakersData: [],
    cartData: {
      cartItems: [],
    },
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

      allSneakersSettings.cartData = getCartItemsFromLocalStorage(allSneakersSettings.cartData);
      // console.log(allSneakersSettings.cartData);
      // console.log(favorites);
      const newData = updateDataFlags(data, favorites, allSneakersSettings.cartData);

      allSneakersSettings.sneakersData = newData;
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
      allSneakersSettings.sneakersData = sortSneakers(filteredSneakers, allSneakersSettings.sortBy);
    },
    { flush: 'post' },
  );

  watch(
    () => allSneakersSettings.cartData.cartItems,
    async () => {
      const cartItems = getCartItems(
        allSneakersSettings.sneakersData,
        allSneakersSettings.cartData,
      );

      const sum = getTotalCartPrice(cartItems, allSneakersSettings.cartData);
      updateStoreCartPrice(sum);
      // updateDataFlags(allSneakersSettings.sneakersData, [], allSneakersSettings.cartData);
      setCartItemsToLocalStorage(allSneakersSettings.cartData);
    },
    { deep: true },
  );

  return {
    allSneakersSettings,
  };
}
