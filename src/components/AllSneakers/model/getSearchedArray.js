export function getSearchedArray(sneakersData) {
  return sneakersData.filter((sneaker) => !sneaker.isHidden);
}
