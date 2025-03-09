import { sortOrder } from '../constans';

export function handleSortChange(e, sortBy) {
	if (sortBy.name === e.target.value) {
	console.log(e.target.value);
	if (sortBy[e.target.value] === sortOrder.asc) {
      sortBy = {
        ...sortBy,
        [e.target.value]: sortOrder.desc,
      };
    } else {
      sortBy = {
        sortBy,
        [e.target.value]: sortOrder.asc,
      };
    }
  }
	
}
