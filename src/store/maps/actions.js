/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import { getPoints } from "../../api/api.js";
import { editPoints } from "../../api/api.js";

export default {
  async getPointsMessage(context, payload) {
    const response = await getPoints(payload);
    console.log(response);

    if (response.data.code === '200') {
      // 数据处理
      const points = response.data.data;
      let payload = [];
      for (let i = 0 ; i < points.length; i++) {
        const curPoint = points[i];
        payload.push({
          id: curPoint.id,
          lng: curPoint.lng,
          lat: curPoint.lat,
          createTime: curPoint.createTime,
          image: curPoint.image,
          status: curPoint.status
        });
      }

      // 设置state
      context.commit('setPoints', payload);
    } else {
      return;
    }
  },

  async changePointsStatus(context, payload) {
    const response = await editPoints(payload.token, payload.id, payload.data);
    console.log(response);
    if (response.data.code === '200') {
      // 修改本地程序中的数据
      const changeMessage = {
        id: payload.id,
        status: payload.data.status
      }
      context.commit('changePoints', changeMessage);
    }
  }
}