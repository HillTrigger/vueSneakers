<template>
  <div class="z-50 fixed top-0 left-0 w-full h-full">
    <div class="w-full h-full relative bg-black/50">
      <div class="absolute top-0 bottom-0 right-0 max-w-96 w-full bg-white p-8 flex flex-col">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
