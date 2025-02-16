export function searchSneakers(sneakersData, inputValue) {
  if (!sneakersData) {
    console.log('sneakersData отсутствует!!!');
    return null;
  }
  return sneakersData.filter((sneaker) => {
    return sneaker.title.toLowerCase().includes(inputValue.toLowerCase());
  });
}
