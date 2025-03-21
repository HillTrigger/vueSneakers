<script setup lang="js">
import { getSneakersList } from '~/components/block/AllSneakers/model/getSneakersList';
const sneakersData = ref([]);

onMounted(async () => {
  sneakersData.value = await getSneakersList();
});
</script>

<template>
  <div>
    <BlockAllSneakers :is-favorites="true" :is-small="true" :sneakers-data="sneakersData"/>
  </div>
</template>
