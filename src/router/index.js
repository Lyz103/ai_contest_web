import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/contest', name: 'contest', component: () => import('../views/ContestView.vue') },
  { path: '/rank', name: 'rank', component: () => import('../views/RankView.vue') },
  { path: '/project', name: 'project', component: () => import('../views/ProjectView.vue') },
  { path: '/support', name: 'support', component: () => import('../views/SupportView.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
