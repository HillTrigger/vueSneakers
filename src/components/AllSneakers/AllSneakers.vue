<script setup lang="js">
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';

import { favoriteToggle } from './model/favoriteToggle';
import AllSneakersLayout from './ui/AllSneakersLayout.vue';
import AllSneakersMain from './ui/AllSneakersMain.vue';
import AllSneakersTop from './ui/AllSneakersTop.vue';
import SneakersCard from './ui/SneakersCard.vue';
import { useSneakers } from './model/useSneakers';

const { allSneakersSettings } = useSneakers();
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
