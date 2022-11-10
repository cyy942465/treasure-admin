/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  getGoods(state) {
    return state.goods;
  },
  getTotal(state) {
    return state.goods.length;
  }
}