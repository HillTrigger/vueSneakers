import axios from 'axios';


export async function getSneakersList(searchInputText) {
	try {
    const {data} = await axios('/api/items');
		const sneakersData = data.items;
		
		const searchArray = sneakersData.filter((sneaker) =>
			sneaker.title.toLowerCase().includes(searchInputText.value.toLowerCase())
		);
		
    return searchArray;

  } catch (err) {
		console.error(err);
  }
}