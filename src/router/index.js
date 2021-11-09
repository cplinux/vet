import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome'
import Subpage1 from '../components/subPage/Subpage1.vue'
import Subpage2 from '../components/subPage/Subpage2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome', // 访问home重定向到welcome
    children: [
      {
        // 当 /welcome 匹配成功，
        // Welcome 会被渲染在 Home 的 <router-view> 中
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/page1',
        component: Subpage1
      },
      {
        path: '/page2',
        component: Subpage2
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 没有token（第一次登陆/登陆失效）将重定向到/login
router.beforeEach((to, from, next) => {
  // console.log(to) // 去哪里
  // console.log(from) // 从哪里来
  // console.log(next) // 勾子函数，如果成功了就执行该函数
  if (to.path === '/login') {
    next() // 放行的意思
  } else {
    const token = window.localStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
