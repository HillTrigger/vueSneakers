import { sortMethods } from '../constans';

export function sortSneakers(sneakersData, sortByName) {
  switch (sortByName.value) {
		case sortMethods.sortByDefaultAsc:
			return [...sneakersData].sort((a, b) => a.id - b.id);
		case sortMethods.sortByDefaultDesc:
			return [...sneakersData].sort((a, b) => b.id - a.id);
		case sortMethods.sortByPriceAsc:
			return [...sneakersData].sort((a, b) => a.price - b.price);
		case sortMethods.sortByPriceDesc:
			return [...sneakersData].sort((a, b) => b.price - a.price);
		default:
			console.log(sortByName);
			throw Error('Переданный метод сортировки не существует!!!');
	}
}

