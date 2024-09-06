import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunfactView from '../views/FunfactView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import AccountView from '../views/AccountView.vue'

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
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: {
        title: 'Account'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Doggram'
})

export default router
