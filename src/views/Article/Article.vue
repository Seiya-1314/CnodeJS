<template>
  <div class="article-wrapper">
    <div class="leftSide">
      <div class="title">{{ topic.title }}</div>
      <div class="info">
        <span>
          发布于&nbsp;
          {{$moment(topic.last_reply_at, 'YYYY-MM-DD')
          .startOf('day')
          .fromNow()}}
        </span>
        &nbsp;•&nbsp;
        作者：
        <router-link :to="'/user/' + topic.loginname">
          {{topic.loginname}}
        </router-link>
        &nbsp;•&nbsp;
        <span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
        <span>
          来自：
          {{$tabs[topic.tab] && $tabs[topic.tab].name}}
        </span>
      </div>
      <divider />
      <div class="content" v-html='topic.content' />
      <article-reply-panel :reply="topic.replies"></article-reply-panel>
    </div>
    <div class="rightSide">
      <article-user-panel
        v-if="topic.loginname !== undefined"
        :loginname="topic.loginname" @transferData="getUserData">
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
  </div>
</template>

<script>
  /**
   * 话题详情页
   */
  import ArticleReplyPanel from './ArticleReplyPanel';
  import ArticleUserPanel from './ArticleUserPanel';
  import ArticleTopicPanel from './ArticleTopicPanel';
  import Divider from '../../commponents/common/Divider';
  import { getTopicById } from '../../http/api';

  export default {
    components: {
      ArticleReplyPanel,
      ArticleUserPanel,
      ArticleTopicPanel,
      Divider
    },

    data() {
      return {
        topic: {},
        userData: {}
      };
    },

    methods: {
      /**
       * 获取话题详情的函数
       */
      fetchData(id) {
        getTopicById(id).then(res => {
          this.topic = {
            ...res.data,
            ...res.data.author
          };
        });
      },

      getUserData(userData) {
        this.userData = userData;
      },

      /**
       * 当路由发生切换时，更新页面数据
       */
      routerChanged() {
        this.fetchData(this.$route.params.id);
      },
    },

    /**
     * 监听路由变化，随时更新话题信息
     */
    watch: {
      '$route': 'routerChanged'
    },

    /**
     * 一般此钩子下面调用接口获取数据
     */
    created() {
      this.fetchData(this.$route.params.id);
    }
  };
</script>

<style lang="scss">
  $grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .article-wrapper {
    display: flex;
    margin-bottom: 100px;
    .leftSide {
      width: 72%;
      float: left;
      box-shadow: $grey-shadow;
      padding: 20px;
      .title {
        color: black;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 8px;
      }
      .info {
        display: flex;
        height: 25px;
        align-items: center;
        color: #838383;
        font-size: 12px;
        a {
          color: #42b983;
          font-weight: 500;
          padding: 0px 2px;
          text-decoration: none;
        }
      }
      .content {
        color: #333;
        line-height: 1.6;
        margin-bottom: 50px;
        p {
          /deep/ img {
            width: 100%;
          }
        }
      }
    }
    .rightSide {
      float: right;
      width: 25%;
      height: 100%;
      margin-left: 2%;
      .panel {
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
