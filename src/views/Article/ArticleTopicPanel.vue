<template>
  <div class="topic-panel panel">
    <div class="panel-header">最近创建的话题</div>
    <divider></divider>
    <ul class="recent-topic">
      <li v-for="item in userTopic" :key="item.id">
        <router-link :to="{path: '/article/' + item.id}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  /**
   * 用户的话题组件
   */
  import Divider from '../../commponents/common/Divider';

  export default {
    components: {
      Divider
    },

    props: {
      topicType: {
        type: Number
      },
      userTopic: {
        type: Array
      }
    }
  };
</script>

<style lang="scss">
  .topic-panel {
    margin: 20px 0;
    .panel-header {
      color: black;
      font-weight: bold;
      line-height: 25px;
    }
    .recent-topic {
      margin: 0;
      li {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          padding: 0px 2px;
          color: #42b983;
          font-weight: 500;
          line-height: 26px;
          text-decoration: none;
        }
      }
    }
    .divider {
      margin: 12px 0;
    }
  }
</style>
