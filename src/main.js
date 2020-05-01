import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import store from './store'
import routes from  './router/index'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
const router = new VueRouter({routes});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
