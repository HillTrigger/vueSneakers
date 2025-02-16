import { reactive, onMounted, watch } from 'vue';
import axios from 'axios';
import { searchSneakers } from './searchSneakers';

export function useSneakers() {
  const allSneakersSettings = reactive({
    sneakersData: [],
    sneakersSorted: [],
    searchQuery: '',
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

  watch(
    () => allSneakersSettings.searchQuery,
    () => {
      allSneakersSettings.sneakersSorted = searchSneakers(
        allSneakersSettings.sneakersData,
        allSneakersSettings.searchQuery,
      );
    },
    { flush: 'post' },
  );

  return {
    allSneakersSettings,
  };
}
