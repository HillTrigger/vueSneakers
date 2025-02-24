<script setup lang="js">
import Logo from '@/components/logo/Logo.vue';
import Basket from '@/components/header/ui/icons/Basket.vue';
import Heart from '@/components/header/ui/icons/Heart.vue';
import People from '@/components/header/ui/icons/People.vue';
import Controls from '@/components/header/ui/Controls.vue';
import Control from '@/components/header/ui/Сontrol.vue';
import HeaderLayout from '@/components/header/ui/HeaderLayout.vue';
import { inject } from 'vue';
import { useAllSneakersStore } from '@/App/js/storeAllSneakers';

defineProps({
  totalCartPrice: {
    type: Number,
    default: 0,
  },
});

// const { driverCartOpen } = inject('driverCartActions');

// const storeAllSneakers = useAllSneakersStore();

const emit = defineEmits(['driverCartActions']);
</script>

<template>
  <HeaderLayout>
    <RouterLink to="/"><Logo /></RouterLink>
    <Controls>
      <Control isBold @click="emit('driverCartActions')">
        <template #svg>
          <Basket />
        </template>
        <template #text>{{ totalCartPrice.toLocaleString('ru-RU') + ' руб.' }}</template>
      </Control>
      <Control>
        <template #svg>
          <Heart />
        </template>
        <template #text><RouterLink to="/favorites">Закладки</RouterLink></template>
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
