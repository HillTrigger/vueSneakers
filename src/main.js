import 'normalize.css';
import './css/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).mount('#app');
