import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import tabs from './utils/tabs';
import moment from 'moment';

import './plugins/element-ui.js';

// 设置使用中文
moment.locale('zh-cn');

Vue.prototype.$moment = moment;
Vue.prototype.$tabs = tabs;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
