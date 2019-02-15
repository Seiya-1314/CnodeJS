import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home/Home.vue';
import HomeTopicList from '../views/Home/HomeTopicList.vue';
import Article from '../views/Article/Article.vue';
import User from '../views/User/User.vue';

Vue.use(Router);

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      redirect: '/all',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'all',
          name: 'all',
          component: HomeTopicList,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: 'good',
          name: 'good',
          component: HomeTopicList,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: 'share',
          name: 'share',
          component: HomeTopicList,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: 'ask',
          name: 'ask',
          component: HomeTopicList,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: 'job',
          name: 'job',
          component: HomeTopicList,
          meta: {
            keepAlive: true // 需要被缓存
          }
        }
      ]
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});
