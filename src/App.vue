<template>
  <el-container>
    <el-header
      height="50px"
      class="header"
    >
      <v-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
  import VHeader from './commponents/header/VHeader';

  export default {
    components: {
      VHeader
    }
  };
</script>

<style lang="scss">
  @import "assets/css/reset.css";

  .header {
    position: fixed;
    z-index: 2999;
    top: 0px;
    left: 0px;
    width: 100%;
    background: #444444;
  }
  .el-main {
    margin: auto;
    margin-top: 70px;
    width: 1240px;
  }
  .el-custom-message {
    margin-top: 50px;
  }
</style>
