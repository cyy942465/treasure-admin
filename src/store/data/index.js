/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      photoList: []
    }
  },
  actions,
  getters,
  mutations
}