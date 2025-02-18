<script setup lang="js">
import { computed, inject, ref } from 'vue';

import DriverCartBottom from './ui/DriverCartBottom.vue';
import DriverCartItem from './ui/DriverCartItem.vue';
import DriverCartLayout from './ui/DriverCartLayout.vue';
import DriverCartMain from './ui/DriverCartMain.vue';
import DriverCartTop from './ui/DriverCartTop.vue';
import Arrow from './ui/icons/Arrow.vue';
import DriverCartModalBody from './ui/DriverCartModalBody.vue';
import Infoblock from '@/components/infoBlock/InfoBlock.vue';

defineProps({
  cartItems: {
    type: Array,
    default: [],
  },
  cartTotalPrice: {
    type: Number,
    default: 0,
  },
  isEmpty: {
    type: Boolean,
    default: true,
  },
});

const { driverCartCloseOut, driverCartClose } = inject('driverCartActions');
const emit = defineEmits(['addToCart', 'createOrder']);

// const isEmpty = computed(() => cartItems.length === 0);
// console.log(isEmpty);
</script>

<template>
  <DriverCartLayout @driverCartClose="driverCartCloseOut">
    <DriverCartModalBody>
      <DriverCartTop @click="driverCartClose"><Arrow />Корзина</DriverCartTop>
      <DriverCartMain v-if="!isEmpty">
        <DriverCartItem
          v-for="sneaker in cartItems"
          :key="sneaker.id"
          :imageUrl="sneaker.imageUrl"
          :title="sneaker.title"
          :price="sneaker.price"
          @addToCart="(btnCartRef) => emit('addToCart', sneaker, btnCartRef)"
        />
      </DriverCartMain>
      <Infoblock
        @driverCartClose="driverCartClose"
        title="Корзина пустая"
        desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/src/assets/package-icon.png"
        v-if="isEmpty"
      />
      <DriverCartBottom
        v-if="!isEmpty"
        @createOrder="(isFormActive) => emit('createOrder', isFormActive)"
        :cartTotalPrice="cartTotalPrice"
      />
    </DriverCartModalBody>
  </DriverCartLayout>
</template>
