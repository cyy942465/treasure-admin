import { Axios } from '../axios/axiosPlugin';
import { baseUrl } from '../config';

// 登录接口
export const login = (info) => {
  return Axios({
    url: baseUrl + '/login',
    method: 'post',
    data: info
  })
}

// 获取用户信息接口
export const getUsers = (token) => {
  return Axios({
    url: baseUrl + '/user/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取标点列表
export const getPoints = (token) => {
  return Axios({
    url: baseUrl + '/map/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取文章列表
export const getArticles = (token) => {
  return Axios({
    url: baseUrl + '/essay/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取商品列表
export const getGoods = (token) => {
  return Axios({
    url: baseUrl + '/goods/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

// 获取订单列表
export const getOrders = (token) => {
  return Axios({
    url: baseUrl + '/order/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}