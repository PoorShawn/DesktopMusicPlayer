import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'RootPage',
        component: () => import('@renderer/pages/RootPage.vue')
    },
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('@renderer/pages/home/MainPage.vue')
    }
]

export default createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)