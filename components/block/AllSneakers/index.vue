<script setup lang="js">
import { favoriteToggle } from './model/favoriteToggle';
import { handleSortChange } from './model/handleSortChange';
import useAllSneakers from './model/useAllSneakers';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';

const { sortedItems, searchInputText, sortByName, toggleCartItem} = useAllSneakers();

const wrapperHandleSortChange = (e) => {
  handleSortChange(e, sortByName);
};

</script>
<template>
  <AllSneakersLayout>
    <AllSneakersTop
      v-model:search="searchInputText" 
      :sort-by-name="sortByName"
      @handle-sort-change="wrapperHandleSortChange"/>
    <AllSneakersMain >
      <BaseLoading  v-if="sortedItems.length === 0" class="col-span-full"/>
      <BaseSneakersCard
        v-for="sneaker in sortedItems"
        :id="sneaker.id"
        :key="sneaker.id"
        :image-url="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-added="sneaker.isAdded"
        :is-favorite="sneaker.isFavorite" 
        @favorite-toggle="(likeRef) => favoriteToggle(sneaker, likeRef)"
        @toggle-cart-item="() => toggleCartItem(sneaker)"
      />
    </AllSneakersMain>
  </AllSneakersLayout>
</template>