<script setup lang="js">
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import DriverCart from '@/components/modals/DriverCart/DriverCart.vue'
</script>
<template>
  <Header />
  <Main />
  <Teleport to="body">
    <!-- <DriverCart /> -->
  </Teleport>
</template>
