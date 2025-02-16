import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';
import { sortMethods, sortOrder } from '../constans';
import { sortSneakers } from './sortSneakers';
import { getFavorites } from './getFavorites';

export function useSneakers() {
  const allSneakersSettings = reactive({
    sneakersData: [],
    sneakersSorted: [],
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
      let favorites = await getFavorites();

      const newData = data.map((sneaker) => {
        if (
          favorites.some((favorite) => {
            return favorite.parentId === sneaker.id;
          })
        ) {
          return {
            ...sneaker,
            isFavorite: true,
          };
        } else {
          return sneaker;
        }
      });
      allSneakersSettings.sneakersData = newData;
      allSneakersSettings.sneakersSorted = newData;
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
