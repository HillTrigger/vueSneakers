<script setup lang="js">
import Logo from '@/components/logo/Logo.vue'
import Basket from '@/components/header/ui/icons/Basket.vue'
import Heart from '@/components/header/ui/icons/Heart.vue'
import People from '@/components/header/ui/icons/People.vue'
import Controls from '@/components/header/ui/Controls.vue'
import Control from '@/components/header/ui/Сontrol.vue'
import HeaderLayout from '@/components/header/ui/HeaderLayout.vue'
</script>

<template>
  <HeaderLayout>
    <Logo />
    <Controls>
      <Control isBold>
        <template #svg>
          <Basket />
        </template>
        <template #text>1205 руб.</template>
      </Control>
      <Control>
        <template #svg>
          <Heart />
        </template>
        <template #text>Закладки</template>
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
