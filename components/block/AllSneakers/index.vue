<script setup lang="ts">
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';

</script>
<template>
  <AllSneakersLayout>
    <AllSneakersTop/>
    <!-- <AllSneakersTop
      v-model:filter="allSneakersSettings.sortBy"
      v-model:search="allSneakersSettings.searchQuery"
      @handle-sort-change="(e) => handleSortChange(allSneakersSettings, e)"
    /> -->
    <AllSneakersMain >
      <!-- <BaseSneakersCard/> -->
      <!-- <SneakersCard
        v-for="sneaker in getSearchedArray(allSneakersSettings.sneakersData)"
        :id="sneaker.id"
        :key="sneaker.id"
        :image-url="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-added="sneaker.isAdded"
        :is-favorite="sneaker.isFavorite"
        @favorite-toggle="(likeRef) => favoriteToggle(sneaker, likeRef)"
        @add-to-cart="(btnCartRef) => addToCart(sneaker, btnCartRef, allSneakersSettings)"
      /> -->
    </AllSneakersMain>
  </AllSneakersLayout>
</template>