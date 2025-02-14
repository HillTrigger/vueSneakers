<script setup lang="js">
import SneakersCard from './SneakersCard/SneakersCard.vue'

defineProps({
  sneakersData: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid grid-cols-4 gap-10">
    <SneakersCard
      v-for="(sneaker, index) in sneakersData"
      :key="index"
      :imageUrl="sneaker.imageUrl"
      :title="sneaker.title"
      :price="sneaker.price"
      :isAdded="sneaker.isAdded"
      :isFavorite="sneaker.isFavorite"
    />
  </div>
</template>
