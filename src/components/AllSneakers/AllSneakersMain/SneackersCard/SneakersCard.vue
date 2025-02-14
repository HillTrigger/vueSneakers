<script setup lang="js">
import Plus from '@/assets/Plus.svg'
import Checked from '@/assets/Checked.svg'
import LikeOff from '@/assets/like-1.svg'
import LikeOn from '@/assets/like-2.svg'
</script>

<template>
  <div>
    <img src="@/assets/sneakers/sneakers-1.jpg" alt="1" />
    <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
    <div>
      <LikeOff class="hidden" />
      <LikeOn />
    </div>
    <div>
      <div>
        <span>ЦЕНА:</span>
        <span>15 199 руб.</span>
      </div>
      <div>
        <Plus class="hidden" />
        <Checked />
      </div>
    </div>
  </div>
</template>
