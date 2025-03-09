export function searchSneakers(sneakersData, searchInputText) {
	const searchArray = sneakersData.filter((sneaker) =>
		sneaker.title.toLowerCase().includes(searchInputText.value.toLowerCase())
	);
	
	return searchArray;
}