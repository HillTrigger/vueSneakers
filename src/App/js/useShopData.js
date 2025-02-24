import {
  getCartItemsFromLocalStorage,
  setCartItemsToLocalStorage,
} from '@/components/AllSneakers/model/cartItemsLocalStorage';
import { getCartItems } from '@/components/AllSneakers/model/getCartItems';
import { getFavorites } from '@/components/AllSneakers/model/getFavorites';
import { updateDataFlags } from '@/components/AllSneakers/model/updateFlags';
import { getTotalCartPrice } from '@/components/AllSneakers/model/updateTotalCartPrice';
import axios from 'axios';
import { onMounted, reactive, watch } from 'vue';

export function useShopData() {
  const shopData = reactive({
    sneakersData: [],
    cartData: {
      cartItems: [],
      totalCartPrice: 0,
    },
  });

  onMounted(async () => {
    try {
      const { data } = await axios('https://72f7c776150d43f2.mokky.dev/items');
      const favorites = await getFavorites();

      const localCartData = getCartItemsFromLocalStorage(shopData.cartData);
      shopData.cartData.cartItems = localCartData.cartItems;
      shopData.cartData.totalCartPrice = localCartData.totalCartPrice;

      const newData = updateDataFlags(data, favorites, shopData.cartData);

      shopData.sneakersData = newData;
    } catch (err) {
      console.log(err);
    }
  });

  watch(
    () => shopData.cartData.cartItems,
    async () => {
      const cartItems = getCartItems(shopData.sneakersData, shopData.cartData);

      const sum = getTotalCartPrice(cartItems, shopData.cartData);

      shopData.cartData.totalCartPrice = sum;

      setCartItemsToLocalStorage(shopData.cartData);
    },
  );

  return {
    shopData,
  };
}
