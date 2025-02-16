<script setup lang="js">
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';

import { favoriteToggle } from './model/favoriteToggle';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';
import SneakersCard from './ui/SneakersCard.vue';
import { searchSneakers } from './model/searchSneakers';

const allSneakersSettings = reactive({
  sneakersData: [],
  sneakersSorted: [],
  searchQuery: '',
});
// const sneakersData = ref([]);
// const allSneakersCards = ref([]);
// const searchQuery = ref('');

onMounted(async () => {
  try {
    const { data } = await axios('https://72f7c776150d43f2.mokky.dev/items');

    allSneakersSettings.sneakersData = data;
    allSneakersSettings.sneakersSorted = data;
  } catch (err) {
    console.log(err);
  }
});

watch(
  () => allSneakersSettings.searchQuery,
  () => {
    allSneakersSettings.sneakersSorted = searchSneakers(
      allSneakersSettings.sneakersData,
      allSneakersSettings.searchQuery,
    );
  },
  { flush: 'post' },
);
</script>

<template>
  <AllSneakersLayout>
    <AllSneakersTop v-model="allSneakersSettings.searchQuery" />
    <AllSneakersMain>
      <SneakersCard
        v-for="sneaker in allSneakersSettings.sneakersSorted"
        :key="sneaker.id"
        :imageUrl="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
        :isAdded="sneaker.isAdded"
        :isFavorite="sneaker.isFavorite"
        :favoriteToggle="favoriteToggle"
      />
    </AllSneakersMain>
  </AllSneakersLayout>
</template>
