/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
export default {
  getArticlesList(state) {
    return state.articles;
  },
  
  getArticleType(state) {
    return state.type;
  },

  getEditingId(state) {
    return state.editingId; 
  },

  getArticleById(state) {
    return (id) => {
      const index = state.articles.findIndex( article => article.id === id );
      return state.articles[index];
    }
  }
}