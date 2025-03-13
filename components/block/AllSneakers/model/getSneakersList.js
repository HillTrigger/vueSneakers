import axios from 'axios';

export async function getSneakersList() {
	try {
    const {data} = await axios('/api/items');
		const sneakersData = data.items;
		
    return sneakersData;

  } catch (err) {
		console.error(err);
  }
}