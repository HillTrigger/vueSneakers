import axios from 'axios';

export async function getSneakersList(searchInputText) {
	try {
    const {data} = await axios('/api/items');
		const sneakersData = data.items;
		
    return sneakersData;

  } catch (err) {
		console.error(err);
  }
}