<script setup lang="js">
import Header from '@/components/header/Header.vue'
import Main from '@/components/main/Main.vue'
import { ref } from 'vue'

const DriverCartIsOpen = ref(false)
console.log(DriverCartIsOpen.value)
</script>
<template>
  <Header />
  <Main />
</template>
