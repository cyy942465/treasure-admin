/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import { getGoods } from "../../api/api"
import { editGoods } from "../../api/api"
import { deleteGood } from "../../api/api";
import { addGood } from "../../api/api";

export default {
  async getGoodsList(context, payload) {
    const response = await getGoods(payload);
    console.log(response);

    if (response.data.code === '200') {
      const goods = response.data.data;
      let payload = [];
      for (let good of goods) {
        payload.push({
          id: good.id,
          name: good.name,
          image: good.imageUrl,
          number: good.number,
          price: good.price
        })
      }
      // 存储数据
      context.commit('setGoods', payload);
    } else {
      return;
    }
  },

  async changeGoodInfo(context, payload) {
    const response = await editGoods(payload.token, payload.data);
    console.log(response);
    if (response.data.code === '200') {
      // 数据处理
      const changeInfo = {
        id: payload.data.id,
        number: payload.data.number,
        price: payload.data.price
      }
      context.commit('changeGoodInfo', changeInfo);
    } else {
      return;
    }
  },

  async deleteGood(context, payload) {
    const response = await deleteGood(payload.token, payload.id);
    console.log(response);
    if (response.data.code === '200') {
      context.commit('deleteGood', payload.id);
    } else {
      return;
    }
  },

  async addGood(context, payload) {
    const response = await addGood(payload.token, payload.data);
    console.log(response);
  }
}