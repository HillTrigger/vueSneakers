import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';
import { sortMethods, sortOrder } from '../constans';
import { sortSneakers } from './sortSneakers';
import { getFavorites } from './getFavorites';
import { getSneakerInCart } from './getSneakerInCart';
import { getCartItemsId } from './getCartItemsId';
import { updateDataFlags } from './updateFlags';
import { updateTotalCartPrice } from './updateTotalCartPrice';
import { useAllSneakersStore } from '@/App/js/storeAllSneakers';

export function useSneakers() {
  const { updateStoreCartPrice } = useAllSneakersStore();

  const allSneakersSettings = reactive({
    sneakersData: [],
    sneakersSorted: [],
    cartData: {
      cartTotalPrice: 0,
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
      const addedCartItems = await getCartItemsId();

      const newData = updateDataFlags(data, favorites, addedCartItems);

      allSneakersSettings.sneakersData = newData;
      allSneakersSettings.sneakersSorted = newData;

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

  watch(
    () => allSneakersSettings.cartData.cartItems,
    async () => {
      const favorites = await getFavorites();
      const addedCartItems = await getCartItemsId();

      const newData = updateDataFlags(allSneakersSettings.sneakersData, favorites, addedCartItems);

      allSneakersSettings.sneakersData = newData;
      allSneakersSettings.sneakersSorted = newData;

      updateTotalCartPrice(allSneakersSettings);
      updateStoreCartPrice(allSneakersSettings.cartData.cartTotalPrice);
    },
  );

  return {
    allSneakersSettings,
  };
}
