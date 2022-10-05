import { getGoods } from "../../api/api"

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
  }
}