<template>
  <div class="user-center">
    <article-user-panel
      :loginname="getUser" @transferData="getUserData">
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

    computed: {
      getUser() {
        return this.$store.getters.getArticleAuthor;
      }
    },

    data() {
      return {
        // loginname: "",
        userData: {}
      };
    },

    methods: {
      /**
       * 通过 transferData 事件接收子组件抛出的用户信息数据
       */
      getUserData(userData) {
        this.userData = userData;
      },

      /**
       * 当路由发生切换时，更新用户id
       */
      userChanged() {
        this.$store.commit('addArticleAuthor', this.$route.params.id);
      }
    },

    /**
     * 监听路由变化，随时用户信息
     */
    watch: {
      '$route': 'userChanged'
    },

    created() {
      this.$store.commit('addArticleAuthor', this.$route.params.id);
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
