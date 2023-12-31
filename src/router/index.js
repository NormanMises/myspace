import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserListVIew from "@/views/UserListView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }, {
    path: '/UserList/',
    name: 'UserList',
    component: UserListVIew
  }, {
    path: '/UserProfile/:userId/',
    name: 'UserProfile',
    component: UserProfileView
  }, {
    path: '/Login/',
    name: 'Login',
    component: LoginView
  }, {
    path: '/Register/',
    name: 'Register',
    component: RegisterView
  }, {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path:'/:catchAll(.*)',
    redirect:'/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
