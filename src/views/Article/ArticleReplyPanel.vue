<template>
  <ul class="reply-wrapper">
    <div>
      <span>{{ reply.length }}</span>&nbsp;回复
    </div>
    <li class="reply-item" v-for="(item, index) in reply" :key="item.id">
      <router-link :to='"/user/" + item.author.loginname' class="avater">
        <img width="50" height="50" :src='item.author.avatar_url' alt="头像" />
      </router-link>
      <div>
        <div class="reply-info">
          <p>
            <span>{{ index + 1 }}楼&nbsp;</span>
            <router-link :to='"/user/" + item.author.loginname'>
              {{ item.author.loginname }}
            </router-link>
            <span>
              &nbsp;
              {{$moment(item.create_at, 'YYYY-MM-DD').startOf('day').fromNow()}}
            </span>
          </p>
          <span class="thumbs">
            <img width="12" height="15" v-if='item.ups.length' src="../../../static/thumbs-up.svg" alt="点赞" />
            {{ item.ups.length !== 0 ? item.ups.length : '' }}
          </span>
        </div>
        <p v-html="item.content"></p>
      </div>
    </li>
  </ul>
</template>

<script>
/**
 * 评论组件
 **/
export default {
  props: {
    reply: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
.reply-wrapper {
  width: 100%;
  > div {
    display: flex;
    padding: 10px 20px;
    border: 1px solid #ebedf0;
    border-bottom-width: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    span {
      font-weight: bold;
    }
  }
  .reply-item {
    display: flex;
    border: 1px solid #ebedf0;
    border-bottom-width: 0;
    color: rgba(0, 0, 0, 0.65);
    padding: 10px 20px;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      .reply-info {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .thumbs {
          font-size: 15px;
          display: flex;
          align-items: center;
          img {
            margin-right: 5px;
            transform: rotate(-15deg);
          }
        }
      }
      p {
        /deep/ img {
          width: 100%;
        }
      }
    }
    a {
      color: #42b983;
      font-weight: 500;
      padding: 0px 2px;
      text-decoration: none;
    }
    .avater {
      img {
        border-radius: 5px;
        margin-right: 15px;
      }
    }
    &:last-child {
      border-bottom: 1px solid #ebedf0;
    }
  }
}
</style>
