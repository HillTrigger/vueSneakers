// import { getSneakersList } from './getSneakersList';

import { sortMethods } from '../constans';

import { getSneakersList } from './getSneakersList';
import { searchSneakers } from './searchSneakers';
import { sortSneakers } from './sortSneakers';

export default function useAllSneakers() {
	const items = ref([]);
	const sortedItems = ref([]);
	const searchInputText = ref('');

	const sortByName = ref(sortMethods.sortByDefaultAsc);

	onMounted(async () => {
		const sneakersData = await getSneakersList(searchInputText);

		items.value = sneakersData;
		sortedItems.value = sneakersData;
	});
	
	watch([searchInputText, sortByName], () => {
		const sneakersData = searchSneakers(items.value, searchInputText);
		sortedItems.value = sortSneakers(sneakersData, sortByName);
	}, {
		deep: true
	});

	return ({items, sortedItems, sortByName, searchInputText});
}