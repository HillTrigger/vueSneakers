<script setup lang="js">
import Basket from '@/assets/cart.svg'
import Heart from '@/assets/heart.svg'
import People from '@/assets/profile.svg'
import Control from '@/components/header/controls/control/Сontrol.vue'
</script>
<template>
  <div class="flex gap-x-8 text-[#5C5C5C]">
    <Control className="font-semibold">
      <template #svg>
        <Basket class="w-4 h-4 object-contain" />
      </template>
      <template #text>1205 руб.</template>
    </Control>

    <Control>
      <template #svg><Heart class="w-4 h-4 object-contain" /> </template>
      <template #text>Закладки</template>
    </Control>
    <Control>
      <template #svg>
        <People class="w-4 h-4 object-contain" />
      </template>
      <template #text>Профиль</template>
    </Control>
  </div>
</template>
