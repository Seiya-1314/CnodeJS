import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import './plugins/element-ui.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
