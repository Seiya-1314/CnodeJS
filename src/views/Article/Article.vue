<template>
  <div class="article-wrapper">
    <div class="leftSide">
      <div class="title">midway v1.0 社区正式发布 - 面向未来的全栈开发方案</div>
      <div class="info">
        <span>
          发布于&nbsp;1 个月前
        </span>
        &nbsp;•&nbsp; 作者：
        <router-link to="user/111">
          czy88888
        </router-link>
        &nbsp;•&nbsp;
        <span>2653次浏览&nbsp;•&nbsp;</span>
        <span>
          来自：
          分享
        </span>
      </div>
      <divider />
      <div class="content" v-html='s' />
    </div>
    <div class="rightSide"></div>
  </div>
</template>

<script>
  import Divider from '../../commponents/common/Divider';

  export default {
    components: {
      Divider
    }
  };
</script>

<style lang="scss">

</style>
