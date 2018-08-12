import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import router from '@/router';
import './registerServiceWorker';
import createStore from '@/store';

Vue.config.productionTip = false;

Vue.use(Vuex);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const store = createStore();

new Vue({
  router,
  store,
  render: handler => handler(App)
}).$mount('#app');
