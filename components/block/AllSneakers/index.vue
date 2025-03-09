<script setup lang="js">
import { getSneakersList } from './model/getSneakersList';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';

const items = ref([]);


onMounted(async () => {
	items.value = await getSneakersList();
});
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
      <BaseSneakersCard
        v-for="sneaker in items"
        :id="sneaker.id"
        :key="sneaker.id"
        :image-url="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-added="sneaker.isAdded"
        :is-favorite="sneaker.isFavorite" 
      />
      <BaseSneakersCard/>
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