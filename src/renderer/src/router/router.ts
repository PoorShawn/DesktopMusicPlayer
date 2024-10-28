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
    name: 'TopMusic',
    component: () => import('@renderer/pages/topPage/TopPage.vue')
  },
  {
    path: '/saved_tracks',
    name: 'SavedTracks',
    component: () => import('@renderer/pages/savedTacksPage/SavedTracksPage.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('@renderer/pages/radioPage/RadioPage.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('@renderer/pages/playlistsPage/PlaylistsPage.vue')
  },
  {
    path: '/Communities',
    name: 'Communities',
    component: () => import('@renderer/pages/communitiesPage/CommunitiesPage.vue')
  },
  {
    path: '/multitag',
    name: 'Multitag',
    component: () => import('@renderer/pages/tagSearchPage/TagSearchPage.vue')
  },
  {
    path: '/releases',
    name: 'Releases',
    component: () => import('@renderer/pages/releasesPage/ReleasesPage.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@renderer/pages/historyPage/HistoryPage.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
