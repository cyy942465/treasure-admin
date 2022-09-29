export default {
  /**
   * 
   * @param {*} state 
   * @param {Array} payload 用户列表数组
   */
  setUsers(state,payload) {
    state.users = payload;
  }
}