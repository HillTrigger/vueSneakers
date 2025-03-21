import axios from 'axios';

export async function getFavoritesList() {
	try {
    const {data} = await axios('https://72f7c776150d43f2.mokky.dev/favorites?_relations=items');
		const sneakersData = data.map(el => el.item);
    return sneakersData;

  } catch (err) {
		console.error(err);
  }
}