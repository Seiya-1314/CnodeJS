<template>
  <div class="home-wrapper">
    <div class="topic-table">
      <router-link to="/all">全部</router-link>
      <router-link to="/good">精华</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/ask">问答</router-link>
      <router-link to="/job">招聘</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    components: {
    }
  };
</script>

<style lang="scss">
  .home-wrapper {
    margin: auto;
    margin-top: 70px;
    padding: 20px 30px;
    width: 900px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    .topic-table {
      margin-bottom: 15px;
      border-bottom: 2px solid #E4E7ED;
      a {
        font-size: 14px;
        color: #303133;
        line-height: 40px;
        font-weight: 500;
        padding-right: 40px;
        &:last-child {
          padding-right: 0;
        }
        &:hover {
          color: #409eff;
          cursor: pointer;
        }
      }
    }
  }
</style>
