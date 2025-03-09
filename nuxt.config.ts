// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: [
        '@/assets/styles/main.css'
    ],
    alias: {
    '~': './',
    '@': './',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
	vite: {
    plugins: [svgLoader()]
  }
});