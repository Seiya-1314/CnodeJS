import { getTopics, getTopicById, getUserByName} from '../http/api';

const actions = {
  /**
   *  获取文章列表的 action
   **/
  getTopicLists(context) {
    // 提交 mutation 修改loading时需要加载的文章数量
    context.commit('addArticleNumber');
    getTopics({
      page: 1,
      limit: context.state.articleNumber + 20,
      tab: context.state.tab
    }).then(res => {
      context.commit('addArticleLists', res.data);
    }).catch(res => {
      console.log('HomeTopicTable.vue: ', res);
    });
  },

  /**
   *  获取文章详情和作者信息的 action
   **/
  getArticle(context, id) {
    getTopicById(id).then(res => {
      // 如果返回成功，提交 mutation 修改文章信息和作者信息
      if (res.success === true) {
        context.commit('addArticle', res.data);
        context.commit('addArticleAuthor', res.data.author.loginname);
      } else {
        console.log('Sorry, Something wrong happened when getting the remote data');
      }
    }).catch((res) => {
      console.log('Article.vue: ', res);
    });
  },

  /**
   *  获取用户信息的 action
   **/
  getUserInfo(context, loginname) {
    getUserByName(loginname).then((res) => {
      context.commit('addUserInfo', res.data);
    }).catch((res) => {
      console.log('User.vue :', res);
    });
  }
};

export default actions;
