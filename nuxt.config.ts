// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: [
        '@/assets/styles/main.css'
    ],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@formkit/auto-animate/nuxt'
  ],
	vite: {
    plugins: [svgLoader()]
  },

});