<template>
  <div class="home-wrapper">
    <div class="topic-table">
      <router-link to="/all">全部</router-link>
      <router-link to="/good">精华</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/ask">问答</router-link>
      <router-link to="/job">招聘</router-link>
    </div>
    <div class="topic-lists">
      <ul class="lists-wrapper">
        <li class="topic-item">
          <img width="50" height="50" src="https://gravatar.com/avatar/c4e414b7264b513a00bbd8ec3e9a0d66?s=48">
          <span class="comment">
            <em>306</em><em>/5516</em>
          </span>
          <el-tag
            type="warning">
            分享
          </el-tag>
          <a href="" class="title">midway v1.0 社区正式发布 - 面向未来的全栈开发方案</a>
          <span class="time">1天前</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .home-wrapper {
    margin: auto;
    margin-top: 90px;
    padding: 20px 30px;
    width: 900px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    .topic-table {
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
    .topic-lists {
      .lists-wrapper {
        .topic-item {
          display: flex;
          margin: 10px;
          align-items: center;
          justify-content: space-between;
          img {
            border-radius: 50%;
          }
          .comment {
            width: 50px;
            text-align: center;
            em:first-child {
              font-size: 16px;
              font-weight: 200;
              color: purple;
            }
            em:last-child {
              font-size: 14px;
              font-weight: 200;
              color: grey;
            }
          }
        }
      }
    }
  }
</style>
