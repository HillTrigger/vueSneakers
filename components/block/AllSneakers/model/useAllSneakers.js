// import { getSneakersList } from './getSneakersList';

import { sortMethods, sortOrder } from '../constans';

import { getSneakersList } from './getSneakersList';
import { searchSneakers } from './searchSneakers';
import { sortSneakers } from './sortSneakers';

export default function useAllSneakers() {
	const items = ref([]);
	const sortedItems = ref([]);
	const searchInputText = ref('');

	const sortBy = reactive({
		name: sortMethods.sortByDefault,
		[sortMethods.sortByDefault]: sortOrder.asc,
		[sortMethods.sortByPrice]: sortOrder.asc,
	});

	onMounted(async () => {
		const sneakersData = await getSneakersList(searchInputText);

		items.value = sneakersData;
		sortedItems.value = sneakersData;
	});
	
	watch([searchInputText, sortBy], () => {
		const sneakersData = searchSneakers(items.value, searchInputText);
		sortedItems.value = sortSneakers(sneakersData, sortBy);
	}, {
		deep: true
	});

	return ({items, sortedItems, sortBy, searchInputText});
}