<template>
  <div class="home-wrapper">
    <div class="topic-table">
      <router-link to="/all">全部</router-link>
      <router-link to="/good">精华</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/ask">问答</router-link>
      <router-link to="/job">招聘</router-link>
    </div>
    <keep-alive>
      <router-view :list="articleLists" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
/**
 * 首页Tabs标签组件
 */

/**
 * 定义组件内的常量 (引用 vuex 后，注释了)
 */
// const PAGE = 1;
// const LIMIT = 20;               // 首次话题数据获取条目数
// const REFRESH_NUM = 10;         // 话题加载条目数

export default {
  /**
   * 当前组件的‘数据中心'(引用 vuex 后，注释了)
   */
  // data() {
  //   return {
  //     page: PAGE,
  //     list: [],
  //     tab: 'all',
  //     limit: LIMIT,
  //     refreshNum: REFRESH_NUM
  //   };
  // },

  computed: {
    articleLists() {
      return this.$store.getters.getArticleLists;
    }
  },

  /**
   * 任何属于此组件的方法都定义在这里
   */
  methods: {
    /**
     * 封装好的获取首页数据的函数
     */
    getTopics() {
      this.$store.dispatch('getTopicLists');
    },

    /**
     * 当路由发生切换时，更新list数据
     */
    tabChanged() {
      this.$store.commit('tabChanged', this.$route.name);
      this.$store.commit('clearArticleNumber');
      this.getTopics();
    },

    /**
     * 滚动函数，判断当前滚动条是否到了底部来决定是否重新拉取数据
     */
    scrollMethod() {
      let sumH = document.body.scrollHeight || document.documentElement.scrollHeight;   // 文档高度
      let viewH = document.documentElement.clientHeight;                                // 视图高度
      let scrollH = document.body.scrollTop || document.documentElement.scrollTop;      // 滚动条的垂直高度

      // 判断滚动条是否到达文档底部
      if(viewH + scrollH >= sumH){
        this.getTopics();
      }
    }
  },

  /**
   * 监听路由变化，随时更新话题信息
   */
  watch: {
    '$route': 'tabChanged'
  },

  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    this.getTopics();
    window.addEventListener("scroll", this.scrollMethod);        // 添加scroll事件句柄
  },

  /**
   * 组件被销毁的钩子：移除绑定的滚动事件
   */
  destroyed() {
    window.removeEventListener("scroll", this.scrollMethod);
  }
};
</script>

<style lang="scss">
.home-wrapper {
  margin: auto;
  padding: 20px 30px;
  width: 900px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  .topic-table {
    margin-bottom: 15px;
    border-bottom: 2px solid #E4E7ED;
    .router-link-active {
      color: #409eff;
      border-bottom: 2px solid #409eff;
    }
    a {
      display: inline-block;
      margin: 0 20px;
      height: 40px;
      font-size: 14px;
      color: #303133;
      line-height: 40px;
      font-weight: 500;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        marging-right: 0;
      }
      &:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
</style>
