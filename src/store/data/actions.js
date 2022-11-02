/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import { getPhotos } from "../../api/api"

export default {
  async getPhotosMessage(context, payload) {
    const response = await getPhotos(payload);
    console.log(response);

    if (response.data.code === '200') {
      // 数据处理
      const photos = response.data.data;
      let payload = [];
      for (let photo of photos) {
        payload.push({
          id: photo.id,
          accept: photo.accept,
          accuracy: photo.accuracy,
          category: photo.category,
          email: photo.email,
          image: photo.image
        })
      }
      context.commit('setPhotoList', payload);
    } else {
      return;
    }
  }
}