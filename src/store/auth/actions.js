/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-09-15 15:25:21
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-17 15:12:43
 */
import { login } from "../../api/api"

export default {
  async userLogin(context, payload) {
    const response = await login(payload);
    console.log(response);
    // 正常登录
    if (response.data.code === '200') {
      // localStorage保存token
      localStorage.setItem('token', response.data.data);
      // 密码正确的情况，获取token并存在state中
      context.commit("setUser", {
        token: response.data.data
      });
    } else {
      // 人为登录失败
      return;
    }
  },
  userLogout(context) {
    context.commit("delUser");
  }
}