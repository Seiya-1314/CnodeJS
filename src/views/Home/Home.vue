<template>
  <home-topic-table />
</template>

<script>
  import HomeTopicTable from './HomeTopicTable';

  export default {
    components: {
      HomeTopicTable
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
  }
</style>
