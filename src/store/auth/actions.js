import { login } from "../../api/api"

export default {
  async userLogin(context, payload) {
    const response = await login(payload);
    console.log(response);
    // 正常登录
    if (response.data.code === '200') {
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