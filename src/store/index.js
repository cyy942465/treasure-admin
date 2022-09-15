import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import authModule from './auth/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule
  },
  state: {
  },
  mutations,
  actions,
  getters
})
