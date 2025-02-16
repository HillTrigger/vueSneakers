import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';
import { sortMethods, sortOrder } from '../constans';

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
      allSneakersSettings.sneakersData = data;
      allSneakersSettings.sneakersSorted = data;
    } catch (err) {
      console.log(err);
    }
  });

  // watch(
  //   () => allSneakersSettings.searchQuery,
  //   () => {
  //     allSneakersSettings.sneakersSorted = searchSneakers(
  //       allSneakersSettings.sneakersData,
  //       allSneakersSettings.searchQuery,
  //     );
  //   },
  //   { flush: 'post' },
  // );
  // watch(
  //   () => allSneakersSettings.sortBy,
  //   () => {
  //     allSneakersSettings.sneakersSorted = sortSneakers(
  //       allSneakersSettings.sneakersData,
  //       allSneakersSettings.searchQuery,
  //     );
  //   },
  //   { flush: 'post' },
  // );

  return {
    allSneakersSettings,
  };
}
