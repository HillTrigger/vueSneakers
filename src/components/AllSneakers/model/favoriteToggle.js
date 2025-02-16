import axios from 'axios';

export async function favoriteToggle(sneaker, likeRef) {
  likeRef.disabled = true;
  try {
    if (!sneaker.isFavorite) {
      const newFavorite = {
        parentId: sneaker.id,
      };
      const { data } = await axios.post(
        'https://72f7c776150d43f2.mokky.dev/favorites',
        newFavorite,
      );
      sneaker.isFavorite = true;
      sneaker.favoriteId = data.id;
    } else {
      const response = await axios.delete(
        `https://72f7c776150d43f2.mokky.dev/favorites/${sneaker.favoriteId}`,
      );
      if (response.status === 200 || response.status === 204) {
        sneaker.isFavorite = false;
        sneaker.favoriteId = null;
      } else {
        console.error('Ошибка удаления избранного:', response);
      }
    }
  } catch (err) {
    console.error('Ошибка при запросе:', err);
  } finally {
    likeRef.disabled = false;
  }
}
