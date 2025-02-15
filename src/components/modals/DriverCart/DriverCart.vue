<script setup lang="js">
import { sneakersData } from '@/components/AllSneakers/constans'
import DriverCartBottom from './ui/DriverCartBottom.vue'
import DriverCartItem from './ui/DriverCartItem.vue'
import DriverCartLayout from './ui/DriverCartLayout.vue'
import DriverCartMain from './ui/DriverCartMain.vue'
import DriverCartTop from './ui/DriverCartTop.vue'
import Arrow from './ui/icons/Arrow.vue'
</script>

<template>
  <DriverCartLayout>
    <DriverCartTop><Arrow />Корзина</DriverCartTop>
    <DriverCartMain>
      <DriverCartItem
        v-for="sneaker in sneakersData"
        :key="sneaker.id"
        :imageUrl="sneaker.imageUrl"
        :title="sneaker.title"
        :price="sneaker.price"
      />
    </DriverCartMain>
    <DriverCartBottom>Низ</DriverCartBottom>
  </DriverCartLayout>
</template>
