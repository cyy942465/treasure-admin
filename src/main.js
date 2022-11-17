/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import store from './store';
import axiosPlugin from './axios/axiosPlugin';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(axiosPlugin);
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
