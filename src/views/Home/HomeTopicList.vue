<template>
  <div class="topic-lists">
    <ul class="lists-wrapper">
      <li class="topic-item" v-for="item in list" :key="item.id">
        <router-link :to='{path: "/user/"+item.author.loginname}'>
          <img width="50" height="50" :src="item.author.avatar_url">
        </router-link>
        <span class="comment">
            <em>{{ item.reply_count }}</em><em>/{{ item.visit_count }}</em>
          </span>
        <el-tag
          :type="$tabs[item.tab].type">
          {{ $tabs[item.tab].name }}
        </el-tag>
        <router-link :to="{path: '/article/' + item.id }" class="title">
          {{ item.title }}
        </router-link>
        <span class="time">
          {{$moment(item.last_reply_at, 'YYYY-MM-DD')
          .startOf('day')
          .fromNow()}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  /**
   *
   */
  export default {
    props: {
      list: {
        type: Array
      }
    }
  };
</script>

<style lang="scss">
  .topic-lists {
    .lists-wrapper {
      .topic-item {
        display: flex;
        margin: 15px;
        align-items: center;
        justify-content: space-between;
        img {
          border-radius: 50%;
        }
        .comment {
          width: 50px;
          text-align: center;
          em:first-child {
            font-size: 18px;
            font-weight: 200;
            color: purple;
          }
          em:last-child {
            font-size: 13px;
            font-weight: 200;
            color: grey;
          }
        }
        .title {
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        a {
          color: #42b983;
          font-weight: 500;
          padding: 0px 2px;
          text-decoration: none;
        }
        .time {
          width: 70px;
          font-size: 14px;
          color: rgba(0, 0, 0, .65);
          text-align: right;
        }
      }
    }
  }
</style>
