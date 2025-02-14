<script setup lang="js">
import Logo from '../logo/Logo.vue'
import Controls from '@/components/header/controls/Controls.vue'
</script>

<template>
  <header class="w-full border-b-2 border-[#EAEAEA]">
    <div class="container">
      <div class="py-11 flex justify-between items-center">
        <Logo />
        <Controls />
      </div>
    </div>
  </header>
</template>
