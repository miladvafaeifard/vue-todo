import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import createStore from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = createStore();

new Vue({
  router,
  store,
  render: handler => handler(App)
}).$mount('#app');
