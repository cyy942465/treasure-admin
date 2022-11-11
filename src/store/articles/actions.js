/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
import { getArticles } from "../../api/api"
import { deleteArticle } from "../../api/api";

export default {
  async getArticlesMessage(context, payload) {
    const response = await getArticles(payload);
    console.log(response);

    if (response.data.code === "200") {
      // 数据处理
      const articles = response.data.data;
      let payload = [];
      for (let article of articles) {
        payload.push({
          id: article.id,
          title: article.title,
          author: article.author,
          content: article.content,
          likeNum: article.likeNum,
          dislikeNum: article.dislikeNum,
          createTime: article.createTime,
          imageUrl: article.imageUrl
        });
      }
      // 存储数据
      context.commit('setArticles', payload);
    } else {
      return;
    }
  },

  async deleteArticle(context, payload) {
    const response = await deleteArticle(payload.token, payload.id);
    if (response.data.code === '200') {
      // 修改本地程序数据
      context.commit('deleteArticle', payload.id);
    } else {
      return;
    }
  }
}