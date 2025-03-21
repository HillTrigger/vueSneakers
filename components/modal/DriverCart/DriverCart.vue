<script setup lang="js">
import { computed } from 'vue';
import './css/driverCart.css';

import DriverCartLayout from './ui/DriverCartLayout.vue';
import DriverCartTop from './ui/DriverCartTop.vue';
import DriverCartItem from './ui/DriverCartItem.vue';
import DriverCartModalBody from './ui/DriverCartModalBody.vue';
import DriverCartBottom from './ui/DriverCartBottom.vue';
import DriverCartMain from './ui/DriverCartMain.vue';
import Arrow from './ui/icons/Arrow.vue';

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => [],
  },
  cartTotalPrice: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['driverCartClose', 'driverCartCloseOut', 'toggleCartItem', 'createOrder']);

const orderId = ref(null);


const handleCreateOrder = (isFormActive) => {
	// eslint-disable-next-line vue/no-ref-as-operand
	emit('createOrder', isFormActive, orderId);
};

const isEmpty = computed(() => props.cartItems.length === 0);
</script>

<template>
  <DriverCartLayout @driver-cart-close="(e) => emit('driverCartCloseOut', e)">
    <DriverCartModalBody>
      <DriverCartTop @click="emit('driverCartClose')"><Arrow />Корзина</DriverCartTop>
      <DriverCartMain v-if="!isEmpty">
        <DriverCartItem
          v-for="sneaker in cartItems"
          :key="sneaker.id"
          :image-url="sneaker.imageUrl"
          :title="sneaker.title"
          :price="sneaker.price"
          @toggle-cart-item="emit('toggleCartItem', sneaker)"
        />
      </DriverCartMain>
      <BaseInfoBlock
        v-show="orderId"
        title="Заказ оформлен!"
        :desc="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
        image-url="/img/order-success-icon.png"
        @driver-cart-close="emit('driverCartClose')"
      />
      <BaseInfoBlock
        v-show="isEmpty && !orderId"
        title="Корзина пустая"
        desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        image-url="/img/package-icon.png"
        @driver-cart-close="emit('driverCartClose')"
      />
      <DriverCartBottom
        v-if="!isEmpty"
        :cart-total-price="cartTotalPrice"
        @create-order="handleCreateOrder"
      />
    </DriverCartModalBody>
  </DriverCartLayout>
</template>
