/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  setGoods(state,payload) {
    state.goods = payload;
  },
  
  changeGoodInfo(state, payload) {
    const index = state.goods.findIndex( good => good.id === payload.id);
    state.goods[index].number = payload.number;
    state.goods[index].price = payload.price;
  },

  deleteGood(state, payload) {
    const index = state.goods.findIndex( good => good.id === payload);
    state.goods.splice(index, 1);
  }
}