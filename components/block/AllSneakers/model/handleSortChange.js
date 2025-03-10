import { sortMethods } from '../constans';

export function handleSortChange(e, sortByName) {

  if (sortByName.value === e) {
    switch (e) {
      case sortMethods.sortByDefaultAsc:
        sortByName.value = sortMethods.sortByDefaultDesc;
        break;
      case sortMethods.sortByDefaultDesc:
        sortByName.value = sortMethods.sortByDefaultAsc;
        break;
      case sortMethods.sortByPriceAsc:
        sortByName.value = sortMethods.sortByPriceDesc;
        break;
      case sortMethods.sortByPriceDesc:
        sortByName.value = sortMethods.sortByPriceAsc;
        break;
    }
  } else {
    sortByName.value = e;
  }
}
