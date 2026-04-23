import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/home/views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: () => import('@/features/auth/views/LoginView.vue') },
  {path: '/register', component: () => import('@/features/auth/views/RegisterView.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router