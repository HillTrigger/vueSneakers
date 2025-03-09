<script setup lang="js">
import useAllSneakers from './model/useAllSneakers';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';

const {items, sortedItems, searchInputText} = useAllSneakers();


</script>
<template>
  <AllSneakersLayout>
    <AllSneakersTop v-model:search="searchInputText"/>
    <!-- <AllSneakersTop
      v-model:filter="allSneakersSettings.sortBy"
      v-model:search="allSneakersSettings.searchQuery"
      @handle-sort-change="(e) => handleSortChange(allSneakersSettings, e)"
    /> -->
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