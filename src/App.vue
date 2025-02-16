<script setup lang="js">
import Header from '@/components/header/Header.vue';
import Main from '@/components/main/Main.vue';
import { onMounted, provide, ref } from 'vue';
import { useDriverCart } from './App/js/useDriverCart';

const driverCartActions = useDriverCart();

provide('driverCartActions', driverCartActions);
</script>
<template>
  <Header />
  <Main />
</template>
