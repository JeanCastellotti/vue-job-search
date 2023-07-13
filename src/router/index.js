import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import JobsPage from '@/pages/JobsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/jobs', name: 'jobs', component: JobsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
