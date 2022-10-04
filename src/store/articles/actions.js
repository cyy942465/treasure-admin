import { getArticles } from "../../api/api"

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
          likeNum: article.likeNum,
          dislikeNum: article.dislikeNum,
          createTime: article.createTime
        });
      }
      // 存储数据
      context.commit('setArticles', payload);
    } else {
      return;
    }
  }
}