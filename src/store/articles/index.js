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
      articles: [],
      type: null, // 编辑组件的状态,0表示编辑，1表示添加
      editingId: null // 编辑的文章id
    }
  },
  actions,
  getters,
  mutations
}