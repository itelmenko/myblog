import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    {
      path: '/nested-components-with-styles',
      name: 'nested-with-styles',
      component: () => import('../views/NestedComponentsWithStylesView.vue')
    },
    {
      path: '/nested-components-with-props',
      name: 'nested-with-props',
      component: () => import('../views/NestedComponentsWithPropsView.vue')
    }
  ]
})

export default router
