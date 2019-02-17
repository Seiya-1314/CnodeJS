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
      <span @click="dialogVisible = true">
        关于
      </span>
    </div>
    <el-dialog
      title="作者"
      :visible.sync="dialogVisible"
      width="30%">
      <span>Seiya-1314</span>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
  };
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
      span {
        color: #fff;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        line-height: 50px;
      }
    }
    .el-dialog__body {
      padding-top: 10px;
      padding-bottom: 0;
      .inside-dialog {
        p {
          margin: auto;
        }
        .el-icon-star-off::before {
          color: #eb2f96;
        }
      }
    }
  }
</style>
