import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/pages/Homepage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/2015',
      beforeEnter() { location.href = 'http://mariajoaomiranda/2015/'; },
    },
  ],
});
