import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

const routes = [
  // 定义首页路由
  { path: '/', component: Home },
  // 定义我的路由规则
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
