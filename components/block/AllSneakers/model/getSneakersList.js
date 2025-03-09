import axios from 'axios';


export async function getSneakersList() {
	try {
    const { data } = await axios('/api/items');
		const {items} = data;
		
    return items;

  } catch (err) {
		console.error(err);
  }
}