<script setup lang="js">
import { inject } from 'vue';

import DriverCartBottom from './ui/DriverCartBottom.vue';
import DriverCartItem from './ui/DriverCartItem.vue';
import DriverCartLayout from './ui/DriverCartLayout.vue';
import DriverCartMain from './ui/DriverCartMain.vue';
import DriverCartTop from './ui/DriverCartTop.vue';
import Arrow from './ui/icons/Arrow.vue';
import DriverCartModalBody from './ui/DriverCartModalBody.vue';

defineProps({
  cartItems: {
    type: Array,
    default: [],
  },
});

const { driverCartClose } = inject('driverCartActions');
</script>

<template>
  <DriverCartLayout @driverCartClose="driverCartClose">
    <DriverCartModalBody>
      <DriverCartTop @click="driverCartClose"><Arrow />Корзина</DriverCartTop>
      <DriverCartMain>
        <DriverCartItem
          v-for="sneaker in cartItems"
          :key="sneaker.id"
          :imageUrl="sneaker.imageUrl"
          :title="sneaker.title"
          :price="sneaker.price"
        />
      </DriverCartMain>
      <DriverCartBottom>Низ</DriverCartBottom>
    </DriverCartModalBody>
  </DriverCartLayout>
</template>
