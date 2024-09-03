import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunfactView from '../views/FunfactView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Doggram'
      }
    },
    {
      path: '/fact',
      name: 'fact',
      component: FunfactView,
      meta: {
        title: 'Funfact'
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      meta: {
        title: 'Favorites'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
