<script setup>
import HeaderLayout from './ui/HeaderLayout.vue';
import Controls from './ui/Controls.vue';
import Control from './ui/Control.vue';
import Basket from './ui/icons/Basket.vue';
import Heart from './ui/icons/Heart.vue';
import People from './ui/icons/People.vue';

const totalCartPrice = 15000;
</script>

<template>
  <HeaderLayout>
    <nuxt-link to="/"><base-logo /></nuxt-link>
    <Controls>
      <Control is-bold>
        <template #svg>
          <Basket />
        </template>
        <template #text>{{ totalCartPrice.toLocaleString('ru-RU') + ' руб.' }}</template>
      </Control>
      <Control>
        <template #svg>
          <Heart />
        </template>
        <template #text><NuxtLink to="/">Закладки</NuxtLink></template>
      </Control>
      <Control>
        <template #svg>
          <People />
        </template>
        <template #text>Профиль</template>
      </Control>
    </Controls>
  </HeaderLayout>
</template>
