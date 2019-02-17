<template>
  <div class="user-panel panel">
    <router-link class="user" :to="'/user/' + user.loginname">
      <img width="48" height="48" :src="user.avatar_url" alt="头像">
      <span class="userID">{{ user.loginname }}</span>
    </router-link>
    <div class="integral">积分：{{user.score}}</div>
    <div class="github">
      Github：
      <a :href='"https://github.com/" + user.githubUsername' target="_blank" rel="nofollow noopener noreferrer">
        {{user.githubUsername}}
      </a>
    </div>
    <div class="regdate">
      注册时间：
      {{$moment(user.create_at, 'YYYY-MM-DD')
      .startOf('day')
      .fromNow()}}
    </div>
  </div>
</template>

<script>
  /**
   * 话题页面右侧上面的个人信息展示panel
   */
  import { getUserByName } from "../../http/api";

  export default {
    data() {
      return {
        user: {}
      };
    },
    props: {
      loginname: {
        type: String,
      }
    },

    methods: {
      /**
       * 获取用户信息数据的函数
       */
      fetchData(loginname) {
        getUserByName(loginname).then(res => {
          this.user = res.data;
          // 同时向父组件传递用户信息数据
          this.$emit('transferData', res.data);
        });
      }
    },

    watch: {
      loginname(newVlaue) {
        this.fetchData(newVlaue);
      }
    },

    created() {
      if (!this.loginname) {
        return;
      }
      // 获取用户信息
      this.fetchData(this.loginname);
    }
  };
</script>

<style lang="scss">
  .user-panel {
    color: black;
    .user {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      img {
        margin-right: 20px;
        border-radius: 5px;
      }
      .userID {
        color: #42b983;
        font-weight: 500;
        padding: 0px 2px;
        text-decoration: none;
      }
    }
    .github {
      a {
        color: #42b983;
        font-weight: 500;
        padding: 0px 2px;
        text-decoration: none;
      }
    }
    div {
      height: 25px;
      line-height: 25px;
    }
  }
</style>
