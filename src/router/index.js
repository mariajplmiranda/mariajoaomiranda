import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/pages/Homepage';
import Edition2015 from '../../static/2015/index.html';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    { path: '/2015', component: { template: Edition2015 } },
  ],
});
