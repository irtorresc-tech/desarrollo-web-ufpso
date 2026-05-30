import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'
import ProductEditView from '../views/ProductEditView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },

  {
    path: '/',
    name: 'ProductList',
    component: ProductListView
  },

  {
    path: '/products/new',
    name: 'ProductCreate',
    component: ProductCreateView
  },

  {
    path: '/products/edit/:id',
    name: 'ProductEdit',
    component: ProductEditView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn =
    localStorage.getItem('isAuthenticated') === 'true'

  if (to.name !== 'Login' && !isLoggedIn) {
    next('/login')
    return
  }

  if (to.name === 'Login' && isLoggedIn) {
    next('/')
    return
  }

  next()
})

export default router