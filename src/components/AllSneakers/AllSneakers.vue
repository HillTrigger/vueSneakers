<script setup lang="js">
import { sneakersData } from './constans'
import { favoriteToggle } from './model/favoriteToggle'
import AllSneakersLayout from './ui/AllSneakersLayout.vue'
import AllSneakersMain from './ui/AllSneakersMain.vue'
import AllSneakersTop from './ui/AllSneakersTop.vue'
import SneakersCard from './ui/SneakersCard.vue'
</script>

<template>
  <AllSneakersLayout>
    <AllSneakersTop />
    <AllSneakersMain>
      <SneakersCard
        v-for="sneaker in sneakersData"
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
