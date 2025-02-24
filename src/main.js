import 'normalize.css';
import './css/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import Favorites from './pages/Favorites.vue';

const routes = [
  { path: '/', component: Home, props: true },
  { path: '/favorites', component: Favorites, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(createPinia());
app.use(autoAnimatePlugin);
app.use(router);
app.mount('#app');
