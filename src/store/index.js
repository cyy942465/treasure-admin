/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import Vue from 'vue';
import Vuex from 'vuex';

import authModule from './auth/index.js';
import usersModule from './users/index.js';
import mapsModule from './maps/index.js';
import articlesModule from './articles/index.js';
import goodsModule from './goods/index.js';
import ordersModule from './orders/index.js';
import dataModule from './data/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule,
    users: usersModule,
    points: mapsModule,
    articles: articlesModule,
    goods: goodsModule,
    orders: ordersModule,
    data: dataModule 
  },
})
