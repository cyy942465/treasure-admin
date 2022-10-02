import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      points: [] // 存放从服务器获取的标点列表
    }
  },
  actions,
  mutations,
  getters
}