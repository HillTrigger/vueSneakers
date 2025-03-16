// import { getSneakersList } from './getSneakersList';
import { sortMethods } from '../constans';

import { getSneakersList } from './getSneakersList';
import { searchSneakers } from './searchSneakers';
import { sortSneakers } from './sortSneakers';
import { updateDataFlags } from './updateDataFlags';

import { useAllSneakersStore } from '@/stores/storeAllSneakers';
import { getFavorites } from '~~/api/getFavorites';


export default function useAllSneakers() {
	const allSneakersStore = useAllSneakersStore();
	const {getCartItems, toggleCartItem} = allSneakersStore;

	const items = ref([]);
	const sortedItems = ref([]);
	const searchInputText = ref('');

	const sortByName = ref(sortMethods.sortByDefaultAsc);

	onMounted(async () => {
		const sneakersData = await getSneakersList();
		const favorites = await getFavorites();

		const cartItemsFromStore = getCartItems();
		items.value = sneakersData;
		// console.log(items);
		
		updateDataFlags(items, favorites, cartItemsFromStore); //тут реактивность не теряется


		const sneakersDataSorted = searchSneakers(items.value, searchInputText);
		sortedItems.value = sortSneakers(sneakersDataSorted, sortByName);
	});
	
	watch([searchInputText, sortByName], () => {
		
		updateSneakersData(items.value, sortedItems, searchInputText, sortByName);
	}, {
		deep: true
	});
	
	watch(() => allSneakersStore.cartItems, () => { // Проблема: если я достаю переменную из стора деструкторизацией, то реактивность теряется
		
		updateDataFlags(items, undefined, allSneakersStore.cartItems); // а тут теряется
		updateSneakersData(items.value, sortedItems, searchInputText, sortByName);
	}, {
		deep: true
	});

	return ({items, sortedItems, sortByName, searchInputText, toggleCartItem});
}

function updateSneakersData(items, sortedItems, searchInputText, sortByName ) {
	const sneakersData = searchSneakers(items, searchInputText);
	sortedItems.value = sortSneakers(sneakersData, sortByName);
}