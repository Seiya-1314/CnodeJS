<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <a href="/home">
        <img
          src="../../../static/cnodejs.svg"
          alt="logo"
          height="50"
          width="120"
        >
      </a>
    </div>
    <div class="header-tips">
      <a href="">
        关于
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss">
  .header-wrapper {
    position: relative;
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    .header-logo {
      padding: 0 2px;
    }
    .header-tips {
      position: absolute;
      top: 0;
      right: 0;
      a {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        line-height: 50px;
      }
    }
  }
</style>
