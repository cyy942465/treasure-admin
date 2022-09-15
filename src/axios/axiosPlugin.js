import axios from "axios";
import { baseUrl } from "../config";
import router from "../router";

export const Axios = axios.create({
  timeout: 10 * 1000,
  baseURL: baseUrl
});

// 配置响应拦截器
axios.interceptors.response.use(response => {
  return response;
}, error => {
  // 登录失败，重新登录
  if(error.response.status === 401 || error.response.status === 403) {
    router.push("/");
  }
  return Promise.reject(error);
});

export default {
  // 导出install方法，就可以在main.js中使用Vue.js()全局引入
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$Axios', {
      value: Axios
    })
  }
};