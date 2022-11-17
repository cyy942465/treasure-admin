/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  setArticles(state,payload) {
    state.articles = payload;
  },
  deleteArticle(state, payload) {
    const index = state.articles.findIndex( article => article.id === payload );
    state.articles.splice(index, 1);
  },
  setEditingId(state, payload) {
    state.editingId = payload;
  },
  changeArticleType(state, payload) {
    state.type = payload;
  }
}