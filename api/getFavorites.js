import axios from 'axios';

export async function getFavorites() {
  try {
    const { data: favorites } = await axios('https://72f7c776150d43f2.mokky.dev/favorites');
		
    return favorites;
  } catch (err) {
    console.log(err);
  }
}
