// import { getSneakersList } from './getSneakersList';

import { sortMethods } from '../constans';

import { getSneakersList } from './getSneakersList';
import { searchSneakers } from './searchSneakers';
import { sortSneakers } from './sortSneakers';
import { updateDataFlags } from './updateDataFlags';

import { useAllSneakersStore } from '@/stores/storeAllSneakers';
import { getFavorites } from '~~/api/getFavorites';


export default function useAllSneakers() {
	const { getCartItems, setCartItem } = useAllSneakersStore();

	const items = ref([]);
	const sortedItems = ref([]);
	const searchInputText = ref('');

	const sortByName = ref(sortMethods.sortByDefaultAsc);

	onMounted(async () => {
		const sneakersData = await getSneakersList(searchInputText);
		const favorites = await getFavorites();
		// console.log(favorites);

		const cartItems = getCartItems();
		
		const newData = updateDataFlags(sneakersData, favorites, cartItems);

		items.value = newData;

		const sneakersDataSorted = searchSneakers(newData, searchInputText);
		sortedItems.value = sortSneakers(sneakersDataSorted, sortByName);
		// sortedItems.value = sneakersDataSorted;
	});
	
	watch([searchInputText, sortByName], () => {
		const sneakersData = searchSneakers(items.value, searchInputText);
		sortedItems.value = sortSneakers(sneakersData, sortByName);
	}, {
		deep: true
	});

	return ({items, sortedItems, sortByName, searchInputText});
}