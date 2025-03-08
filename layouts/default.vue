<template>
  <div class="bg-white rounded-2xl">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="css">
	html,
	body {
		background-color: #e7f6ff;
	}

	body {
		padding: 5.3125rem;
	}
</style>