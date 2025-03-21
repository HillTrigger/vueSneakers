import axios from 'axios';

export async function favoriteToggle(sneaker, likeRef) {
  const isFavorite = sneaker.isFavorite;
  likeRef.disabled = true;
  try {
    if (!sneaker.isFavorite) {
      sneaker.isFavorite = true;
      const newFavorite = {
        item_id: sneaker.id,
      };
      const { data } = await axios.post(
        'https://72f7c776150d43f2.mokky.dev/favorites',
        newFavorite,
      );
      sneaker.favoriteId = data.id;
    } else {
      sneaker.isFavorite = false;
      const response = await axios.delete(
        `https://72f7c776150d43f2.mokky.dev/favorites/${sneaker.favoriteId}`,
      );
      if (response.status === 200 || response.status === 204) {
        sneaker.favoriteId = null;
      } else {
        console.error('Ошибка удаления избранного:', response);
      }
    }
  } catch (err) {
    sneaker.isFavorite = isFavorite;
    console.error('Ошибка при запросе:', err);
  } finally {
    likeRef.disabled = false;
  }
}
