import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'RootPage',
        component: () => import('../pages/RootPage.vue')
    }
]

export default createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)