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
          component: HomeTopicList
        },
        {
          path: 'good',
          component: HomeTopicList
        },
        {
          path: 'share',
          component: HomeTopicList
        },
        {
          path: 'ask',
          component: HomeTopicList
        },
        {
          path: 'job',
          component: HomeTopicList
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
