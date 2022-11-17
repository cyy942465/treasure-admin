/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-09-15 14:59:30
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-17 15:13:46
 */
import axios from "axios";
import { baseUrl } from "../config";
import router from "../router";

export const Axios = axios.create({
  timeout: 10 * 1000,
  baseURL: baseUrl
});

// 请求拦截器
Axios.interceptors.request.use(config => {
  // 检查localStorage中是否含有token, 有的话就将token加入到请求头中
  if (localStorage.token) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
}, error => {
  return Promise.reject(error);
})

// 配置响应拦截器
Axios.interceptors.response.use(response => {
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