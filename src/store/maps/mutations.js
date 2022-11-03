/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  // 用于初始化标点
  setPoints(state, payload) {
    state.points = payload;
  },
  // 用于修改标点的状态
  changePoints(state, payload) {
    const index = state.points.findIndex( point => point.id === payload.id);
    // console.log(index);
    state.points[index].status = payload.status;
    // console.log(state.points);
  }
}