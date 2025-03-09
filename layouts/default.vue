<template>
  <div class="bg-white max-w-5xl mx-auto my-20 rounded-2xl">
    <AppHeader class="px-11"/>
    <main class="p-11">
      <slot />
    </main>
  </div>
</template>

<style lang="css">
	html,
	body {
		background-color: #e7f6ff;
	}
/* 
	body {
		padding: 5.3125rem;
	} */
</style>