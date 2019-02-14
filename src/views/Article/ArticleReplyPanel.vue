<template>
  <div class="reply-wrapper">
    <div>
      <span>37</span>&nbsp;回复
    </div>
    <div class="reply-item">
      <router-link to="user/111" class="avater">
        <img src='https://gravatar.com/avatar/c4e414b7264b513a00bbd8ec3e9a0d66?s=48' alt="头像" />
      </router-link>
      <div>
        <div class="info">
          <p>
            <span>1楼&nbsp;</span>
            <router-link to="user/111">
              czy88888
            </router-link>
            <span>
              &nbsp;
              1 个月前
            </span>
          </p>
          <span class="thumbs">
            <img src="../../../static/thumbs-up.svg" alt="点赞" />
            3
          </span>
        </div>
        <p class="content">
          赞一个! 我之前也写了一个, 不过是插件扩展的, 基本上把 nest 的核心都抄了过来，不过 inject 保留了, 个人不喜欢依赖来依赖去.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 评论组件
 **/
export default {};
</script>

<style>

</style>
