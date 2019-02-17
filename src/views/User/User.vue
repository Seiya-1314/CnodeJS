<template>
  <div class="user-center">
    <article-user-panel
      :loginname="loginname" @transferData="getUserData">
    </article-user-panel>
    <article-topic-panel
      v-if="userData.recent_topics !== undefined && userData.recent_topics.length"
      :userTopic="userData.recent_topics">
      最近创建的话题
    </article-topic-panel>
    <article-topic-panel
      v-if="userData.recent_replies !== undefined && userData.recent_replies.length"
      :user-topic="userData.recent_replies">
      最近参与的话题
    </article-topic-panel>
  </div>
</template>

<script>
  /**
   * 个人中心页
   */
  import ArticleUserPanel from '../Article/ArticleUserPanel';
  import ArticleTopicPanel from '../Article/ArticleTopicPanel';

  export default {
    components: {
      ArticleUserPanel,
      ArticleTopicPanel
    },

    data() {
      return {
        loginname: "",
        userData: {}
      };
    },

    methods: {
      getUserData(userData) {
        this.userData = userData;
      }
    },

    created() {
      this.loginname = this.$route.params.id;
    },

    /**
     * 在当前路由改变，但是该组件被复用时调用
     * 举例来说，对于一个带有动态参数的路径 /user/:id，在 /user/shuiRong 和 /user/martin 之间跳转的时候，
     * 由于会渲染同样的 User 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
     * 可以访问组件实例 `this`
     */
    beforeRouteUpdate(to, from, next) {
      this.loginname = to.params.id;
      next();
    }
  };
</script>

<style lang="scss">
  .user-center {
    width: 75%;
    margin: auto;
    .panel {
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
</style>
