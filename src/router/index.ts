import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/Layout/index.vue'),
      redirect: '/mine',
      children: [
        {
          path: 'mine',
          name: 'mine',
          component: () => import('../views/Mine/MyPage.vue'),
          meta: { title: '我的' }
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/Home/HomeFirst.vue'),
          meta: { title: '首页' }
        }
      ]
    }
  ]
})

export default router
