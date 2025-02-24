<script setup lang="js">
import Header from '@/components/header/Header.vue';
import Main from '@/components/main/Main.vue';
import { useDriverCart } from './App/js/useDriverCart';
import { useShopData } from './App/js/useShopData';
import { addToCart } from './components/AllSneakers/model/addedToCart';
import { createOrder } from './components/AllSneakers/model/createOrder';
import DriverCart from './components/modals/DriverCart/DriverCart.vue';
import { getCartItems } from './components/AllSneakers/model/getCartItems';
import { onMounted } from 'vue';

const { driverCartOpen, driverCartCloseOut, driverCartClose, driverCartState } = useDriverCart();
const { shopData } = useShopData();

onMounted(() => {
  console.log(shopData);
});
</script>
<template>
  <Header :totalCartPrice="shopData.cartData.totalCartPrice" @driverCartActions="driverCartOpen" />
  <Main>
    <RouterView :shopData="shopData" />
  </Main>
  <Teleport to="body">
    <transition name="driverCart">
      <DriverCart
        v-if="driverCartState"
        @driverCartCloseOut="driverCartCloseOut"
        @driverCartClose="driverCartClose"
        :isEmpty="shopData.cartData.cartItems.length === 0"
        :cartTotalPrice="shopData.cartData.totalCartPrice"
        :cartItems="getCartItems(shopData.sneakersData, shopData.cartData)"
        @addToCart="(sneaker, btnCartRef) => addToCart(sneaker, btnCartRef, shopData)"
        @createOrder="(isFormActive) => createOrder(shopData, storeAllSneakers, isFormActive)"
      />
    </transition>
  </Teleport>
</template>
