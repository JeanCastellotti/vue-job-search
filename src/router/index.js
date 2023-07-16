import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import JobsPage from '@/pages/JobsPage.vue'
import JobPage from '@/pages/JobPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/jobs', name: 'jobs', component: JobsPage },
  { path: '/jobs/:id', name: 'job', component: JobPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
