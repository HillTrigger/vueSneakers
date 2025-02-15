<script setup lang="js">
import { onMounted, ref } from 'vue'
import axios from 'axios'

import { favoriteToggle } from './model/favoriteToggle'
import AllSneakersLayout from './ui/AllSneakersLayout.vue'
import AllSneakersMain from './ui/AllSneakersMain.vue'
import AllSneakersTop from './ui/AllSneakersTop.vue'
import SneakersCard from './ui/SneakersCard.vue'

const sneakersData = ref([])

onMounted(async () => {
  try {
    const { data } = await axios('https://72f7c776150d43f2.mokky.dev/items')

    sneakersData.value = data
  } catch (err) {
    console.log(err)
  }
})
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
