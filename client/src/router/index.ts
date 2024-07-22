import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CreatePage from '@/views/CreatePage.vue'
import JoinPage from '@/views/JoinPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/create-meeting',
    name: 'CreatePage',
    component: CreatePage
  },
  {
    path: '/join-meeting',
    name: 'JoinPage',
    component: JoinPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
