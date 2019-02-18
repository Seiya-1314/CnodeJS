const mutations = {
  /**
   * 切换 tab
   **/
  tabChanged(state, tab) {
    state.tab = tab;
  },

  /**
   * 更新文章列表
   **/
  addArticleLists(state, articleLists) {
    state.articleLists = articleLists;
  },

  /**
   * 每次loading需要加载的文章数量
   **/
  addArticleNumber(state) {
    state.articleNumber += 10;
  },

  /**
   * 重置loading时加载的文章数量
   **/
  clearArticleNumber(state) {
    state.articleNumber = 0;
  },

  /**
   * 更新文章信息
   **/
  addArticle(state, article) {
    state.article = article;
  },

  /**
   * 更新作者信息
   **/
  addArticleAuthor(state, loginName) {
    state.articleAuthor = loginName;
  },

  /**
   * 更新用户详情信息
   **/
  addUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default mutations;
