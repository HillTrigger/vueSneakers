<!-- <script setup lang="js">
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
    default: () => [],
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
  <DriverCartLayout @driver-cart-close="driverCartCloseOut">
    <DriverCartModalBody>
      <DriverCartTop @click="driverCartClose"><Arrow />Корзина</DriverCartTop>
      <DriverCartMain v-if="!isEmpty">
        <DriverCartItem
          v-for="sneaker in cartItems"
          :key="sneaker.id"
          :image-url="sneaker.imageUrl"
          :title="sneaker.title"
          :price="sneaker.price"
          @add-to-cart="(btnCartRef) => emit('addToCart', sneaker, btnCartRef)"
        />
      </DriverCartMain>
      <Infoblock
        v-if="isEmpty"
        title="Корзина пустая"
        desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        image-url="/src/assets/package-icon.png"
        @driver-cart-close="driverCartClose"
      />
      <DriverCartBottom
        v-if="!isEmpty"
        :cart-total-price="cartTotalPrice"
        @create-order="(isFormActive) => emit('createOrder', isFormActive)"
      />
    </DriverCartModalBody>
  </DriverCartLayout>
</template> -->
