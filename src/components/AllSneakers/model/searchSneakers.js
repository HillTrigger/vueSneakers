export function searchSneakers(sneakersData, inputValue) {
  if (!sneakersData) {
    console.log('sneakersData отсутствует!!!');
    return null;
  }

  const searchArray = sneakersData.map((sneaker) => {
    const isSearchItem = sneaker.title.toLowerCase().includes(inputValue.toLowerCase());
    if (!isSearchItem) {
      return { ...sneaker, isHidden: true };
    } else {
      return { ...sneaker, isHidden: false };
    }
  });
  return searchArray;
}
