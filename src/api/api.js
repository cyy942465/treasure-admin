/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
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

// 修改标点状态
export const editPoints = (token, id, data) => {
  return Axios({
    url: baseUrl + '/map/' + id,
    method: 'put',
    headers: {
      Authorization: token
    },
    data: data
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

// 修改订单
export const editOrders = (token, id, info) => {
  return Axios({
    url: baseUrl + '/order/' + id,
    method: 'put',
    headers: {
      Authorization: token
    },
    data: info
  })
}

// 获取识别照片列表
export const getPhotos = (token) => {
  return Axios({
    url: baseUrl + '/trash/all',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}