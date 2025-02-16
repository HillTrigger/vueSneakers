import { sortOrder } from '../constans';

export function handleSortChange(allSneakersSettings, e) {
  if (allSneakersSettings.sortBy.name === e.target.value) {
    if (allSneakersSettings.sortBy[e.target.value] === sortOrder.asc) {
      allSneakersSettings.sortBy = {
        ...allSneakersSettings.sortBy,
        [e.target.value]: sortOrder.desc,
      };
    } else {
      allSneakersSettings.sortBy = {
        ...allSneakersSettings.sortBy,
        [e.target.value]: sortOrder.asc,
      };
    }
  }
}
