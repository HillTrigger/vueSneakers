// import { getSneakersList } from './getSneakersList';

export default function useAllSneakers() {
	const items = ref([]);

	const searchInputText = ref('');



	return ({items, searchInputText});
}