import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'RootPage',
    component: () => import('@renderer/pages/rootPage/RootPage.vue')
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('@renderer/pages/homePage/HomePage.vue')
  },
  {
    path: '/top',
    name: 'Top Music',
    component: () => import('@renderer/pages/topPage/TopPage.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
