import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home/Home.vue';
import Article from '../views/Article/Article.vue';
import User from '../views/User/User.vue';

Vue.use(Router);

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
/*      children: [
        {
          path: 'all',
          component: UserProfile
        }
      ]*/
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
