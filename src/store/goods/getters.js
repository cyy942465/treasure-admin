export default {
  getGoods(state) {
    return state.goods;
  },
  getTotal(state) {
    return state.goods.length;
  }
}