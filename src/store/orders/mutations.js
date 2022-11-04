/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  setOrders(state, payload) {
    state.orders = payload;
  },
  changeOrders(state, payload) {
    const index = state.orders.findIndex( order => order.id === payload.id);
    // console.log(payload);
    state.orders[index].addr = payload.addr;
    state.orders[index].city = payload.city;
    state.orders[index].name = payload.name;
    state.orders[index].phone = payload.phone;
    state.orders[index].province = payload.province;
    console.log(state.orders);
  },
  changeOrdersStatus(state, payload) {
    // 改变应用程序中的订单状态
    const index = state.orders.findIndex( order => order.id === payload.id);
    state.orders[index].status = payload.status;
  },
  deleteOrders(state, payload) {
    // 删除应用程序中的订单
    const index = state.orders.findIndex( order => order.id === payload);
    state.orders.splice(index, 1);
  }
}