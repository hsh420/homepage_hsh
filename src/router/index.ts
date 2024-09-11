import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverviewView.vue')
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillView.vue')
    },
    {
      path: '/references',
      name: 'references',
      component: () => import('../views/ReferencesView.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue')
    }
  ]
})

export default router
