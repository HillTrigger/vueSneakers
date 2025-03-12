<script setup lang="js">
import { computed, inject, ref } from 'vue';

import DriverCartLayout from './ui/DriverCartLayout.vue';
import DriverCartTop from './ui/DriverCartTop.vue';
import Arrow from './ui/icons/Arrow.vue';
import DriverCartModalBody from './ui/DriverCartModalBody.vue';

import './css/driverCart.css';
import DriverCartBottom from './ui/DriverCartBottom.vue';
import DriverCartMain from './ui/DriverCartMain.vue';

defineProps({
  cartItems: {
    type: Array,
    default: () => [],
  },
  cartTotalPrice: {
    type: Number,
    default: 0,
  },
	isEmpty: {
    type: Boolean,
    default: false,
  }
});

// const { driverCartCloseOut, driverCartClose } = inject('driverCartActions');
const emit = defineEmits(['driverCartClose', 'driverCartCloseOut']);

// const isEmpty = computed(() => cartItems.length === 0);
// console.log(isEmpty);
</script>

<template>
  <DriverCartLayout @driver-cart-close="(e) => emit('driverCartCloseOut', e)">
    <DriverCartModalBody>
      <DriverCartTop @click="emit('driverCartClose')"><Arrow />Корзина</DriverCartTop>
      <DriverCartMain v-if="!isEmpty">
        <!-- <DriverCartItem
          v-for="sneaker in cartItems"
          :key="sneaker.id"
          :image-url="sneaker.imageUrl"
          :title="sneaker.title"
          :price="sneaker.price"
          @add-to-cart="(btnCartRef) => emit('addToCart', sneaker, btnCartRef)"
        /> -->
      </DriverCartMain>
      <BaseInfoBlock
        v-if="isEmpty"
        title="Корзина пустая"
        desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        image-url="/img/package-icon.png"
        @driver-cart-close="emit('driverCartClose')"
      />
      <DriverCartBottom
        v-if="!isEmpty"
        :cart-total-price="cartTotalPrice"
      />
    </DriverCartModalBody>
  </DriverCartLayout>
</template>
