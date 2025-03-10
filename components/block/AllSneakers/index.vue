<script setup lang="js">
import { handleSortChange } from './model/handleSortChange';
import useAllSneakers from './model/useAllSneakers';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';

const {items, sortedItems, searchInputText, sortByName} = useAllSneakers();

const wrapperHandleSortChange = (e) => {
  handleSortChange(e, sortByName);
};

</script>
<template>
  <AllSneakersLayout>
    <AllSneakersTop
      v-model:search="searchInputText" 
      :sort-by-name="sortByName"
      @handle-sort-change="wrapperHandleSortChange"/> <!-- передаю ref переменную в emit -->
    <AllSneakersMain >
      <BaseLoading  v-if="items.length === 0" class="col-span-full"/>
      <BaseSneakersCard
        v-for="sneaker in sortedItems"
        :id="sneaker.id"
        :key="sneaker.id"
        :image-url="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-added="sneaker.isAdded"
        :is-favorite="sneaker.isFavorite" 
      />
      <!-- <SneakersCard
        v-for="sneaker in getSneakersList()"
        :id="sneaker.id"
        :key="sneaker.id"
        :image-url="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-added="sneaker.isAdded"
        :is-favorite="sneaker.isFavorite"
      /> -->
    </AllSneakersMain>
  </AllSneakersLayout>
</template>