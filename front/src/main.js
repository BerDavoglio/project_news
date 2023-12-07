import './assets/style.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

import {
  GiHamburgerMenu,
  IoClose,
  BiSearch,
} from 'oh-vue-icons/icons';
import { OhVueIcon, addIcons } from 'oh-vue-icons';

import App from './App.vue';
import router from './router';

addIcons(
  GiHamburgerMenu,
  IoClose,
  BiSearch,
);

const pinia = createPinia();

const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.use(pinia);
app.use(router);

app.mount('#app');
