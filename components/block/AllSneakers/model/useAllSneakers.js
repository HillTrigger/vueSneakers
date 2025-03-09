// import { getSneakersList } from './getSneakersList';

import { getSneakersList } from './getSneakersList';
import { searchSneakers } from './searchSneakers';

export default function useAllSneakers() {
	const items = [ref([])];
	const sortedItems = ref([]);
	const searchInputText = ref('');

	onMounted(async () => {
		const sneakersData = await getSneakersList(searchInputText);

		items.value = sneakersData;
		sortedItems.value = sneakersData;
	});
	
	watch(searchInputText, async () => {
		sortedItems.value = searchSneakers(items.value, searchInputText);
	});

	return ({items, sortedItems, searchInputText});
}