import { getUsers } from "../../api/api"

export default {
  /**
   * @param {*} context 
   * @param {String} payload  为当前登录的token
   */
  async getUsers(context, payload) {
    const response = await getUsers(payload);
    console.log(response);

    if (response.data.code === '200') {
      // 数据处理
      const users = response.data.data;
      let payload = [];
      for(let i = 0; i < users.length; i++) {
        const curUser = users[i];
        // console.log(curUser);
        payload.push({
          index: i + 1,
          email: curUser.email,
          username: curUser.username,
          status: '正常',
          scores: curUser.coin
        });
      }
      // 设置用户
      context.commit("setUsers", payload);
    } else {
      return;
    }
  }
}