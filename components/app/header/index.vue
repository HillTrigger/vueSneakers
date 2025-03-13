<script setup>
import { useDriverCart } from '../../modal/DriverCart/js/useDriverCart';

import HeaderLayout from './ui/HeaderLayout.vue';
import Controls from './ui/Controls.vue';
import Control from './ui/Control.vue';
import Basket from './ui/icons/Basket.vue';
import Heart from './ui/icons/Heart.vue';
import People from './ui/icons/People.vue';

import { useAllSneakersStore } from '@/stores/storeAllSneakers';


const allSneakersStore = useAllSneakersStore();
// const { totalCartPrice, getCartItems } = useAllSneakersStore();
const { driverCartState, driverCartOpen, driverCartClose, driverCartCloseOut } = useDriverCart();

</script>

<template>
  <HeaderLayout>
    <nuxt-link to="/"><base-logo /></nuxt-link>
    <Controls>
      <Control is-bold @click="driverCartOpen">
        <template #svg>
          <Basket />
        </template>
        <template #text>{{ allSneakersStore.totalCartPrice.toLocaleString('ru-RU') + ' руб.' }}</template>
      </Control>
      <Control>
        <template #svg>
          <Heart />
        </template>
        <template #text><NuxtLink to="/">Закладки</NuxtLink></template>
      </Control>
      <Control>
        <template #svg>
          <People />
        </template>
        <template #text>Профиль</template>
      </Control>
    </Controls>
    <Teleport to="body">
      <transition name="driverCart">
        <ModalDriverCart
          v-if="driverCartState"
          :cart-items="allSneakersStore.getCartItems()"
          :cart-total-price="allSneakersStore.totalCartPrice"
          @driver-cart-close="driverCartClose"
          @driver-cart-close-out="(e) => driverCartCloseOut(e)"
          @toggle-cart-item="(sneaker) => allSneakersStore.toggleCartItem(sneaker)"
        />
      </transition>
    </Teleport>
  </HeaderLayout>
</template>
