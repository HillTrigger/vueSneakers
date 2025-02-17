import axios from 'axios';

export async function getCartItemsId() {
  try {
    const { data } = await axios('https://72f7c776150d43f2.mokky.dev/order');

    return data;
  } catch (err) {
    console.log(err);
  }
}
