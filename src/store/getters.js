const getters = {
  getArticleLists(state) {
    return state.articleLists;
  },

  getArticleNumber(state) {
    return state.articleNumber;
  },

  getArticles(state) {
    return state.article;
  },

  getArticleAuthor(state) {
    return state.articleAuthor;
  },
  getUserInfo(state) {
    return state.userInfo;
  }
};

export default getters;
