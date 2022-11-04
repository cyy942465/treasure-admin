/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import { getOrders } from "../../api/api"
import { editOrders } from "../../api/api";
import { passOrders } from "../../api/api";
import { deleteOrders } from "../../api/api";

export default {
  async getOrdersList(context,payload) {
    const response = await getOrders(payload);
    console.log(response);
    if (response.data.code === '200') {
      const orders = response.data.data;
      let list = [];
      for(let i = 0;i < orders.length; i++) {
        const cur = orders[i];
        list.push({
          id: cur.id,
          goodsName: cur.goodsName,
          email: cur.email,
          name: cur.name,
          phone: cur.phone,
          province: cur.province,
          city: cur.city,
          addr: cur.addr,
          status: cur.status,
          exchangeTime: cur.exchangeTime
        });
        // 设置state中的订单列表
        context.commit('setOrders', list);
      }
    } else {
      return;
    }
  },

  async changeOrdersMessage(context, payload) {
    const response = await editOrders(payload.token, payload.id, payload.data);
    console.log(response);
    if (response.data.code === '200') {
      // 修改本地程序中的数据
      const changeMessage = payload.data;
      changeMessage.id = payload.id;
      context.commit('changeOrders', changeMessage);
    } else {
      return;
    }
  },

  async changeOrdersStatus(context, payload) {
    const response = await passOrders(payload.token, payload.id);
    console.log(response);
    if (response.data.code === '200') {
      const changeMessage = {
        id: payload.id,
        status: 1
      };
      context.commit('changeOrdersStatus', changeMessage);
    } else {
      return;
    }
  },

  async deleteOrder(context,payload) {
    const response = await deleteOrders(payload.token, payload.id);
    console.log(response);
    if (response.data.code === '200') {
      context.commit('deleteOrders', payload.id);
    } else {
      return;
    }
  }
}