import Vue from 'vue';
import VueRouter from 'vue-router';
import VideoEdit from '../views/VideoEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/videos',
  },
  {
    path: '/videos',
    component: () => import('../views/Videos.vue'),
  },
  {
    path: '/videos/add',
    component: () => import('../views/VideoAdd.vue'),
  },
  {
    path: '/videos/edit/:id',
    component: VideoEdit,
  },
  {
    path: '/videos/details/:id',
    component: () => import('../views/VideoDetails.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
