<script setup lang="js">
import { inject } from 'vue';

import { favoriteToggle } from './model/favoriteToggle';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';
import SneakersCard from './ui/SneakersCard.vue';
import { useSneakers } from './model/useSneakers';
import { handleSortChange } from './model/handleSortChange';
import DriverCart from '../modals/DriverCart/DriverCart.vue';
import { addToCart } from './model/addedToCart';

const { allSneakersSettings } = useSneakers();

const { driverCartState } = inject('driverCartActions');
</script>

<template>
  <Teleport to="body">
    <transition name="driverCart">
      <DriverCart
        v-if="driverCartState"
        :cartTotalPrice="allSneakersSettings.cartData.cartTotalPrice"
        :cartItems="allSneakersSettings.cartData.cartItems"
        @addToCart="(sneaker, btnCartRef) => addToCart(sneaker, btnCartRef, allSneakersSettings)"
      />
    </transition>
  </Teleport>
  <AllSneakersLayout>
    <AllSneakersTop
      @handleSortChange="(e) => handleSortChange(allSneakersSettings, e)"
      v-model:filter="allSneakersSettings.sortBy"
      v-model:search="allSneakersSettings.searchQuery"
    />
    <AllSneakersMain>
      <SneakersCard
        v-for="sneaker in allSneakersSettings.sneakersSorted"
        :key="sneaker.id"
        :id="sneaker.id"
        :imageUrl="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :isAdded="sneaker.isAdded"
        :isFavorite="sneaker.isFavorite"
        @favoriteToggle="(likeRef) => favoriteToggle(sneaker, likeRef)"
        @addToCart="(btnCartRef) => addToCart(sneaker, btnCartRef, allSneakersSettings)"
      />
    </AllSneakersMain>
  </AllSneakersLayout>
</template>
