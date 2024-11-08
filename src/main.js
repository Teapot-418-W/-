import { createApp } from 'vue';
import App from './App.vue';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import './assets/styles/global.css'
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(TDesign);

app.mount('#app');