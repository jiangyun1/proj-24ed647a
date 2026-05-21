import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_shouyezixun from '../views/lanhu_shouyezixun/index.vue'
import lanhu_youwenbida2 from '../views/lanhu_youwenbida2/index.vue'
import lanhu_wanghaijingli from '../views/lanhu_wanghaijingli/index.vue'
import lanhu_denglux2fzhuce from '../views/lanhu_denglux2fzhuce/index.vue'
import lanhu_denglux2fzhuce_1 from '../views/lanhu_denglux2fzhuce_1/index.vue'
import lanhu_shouyezixun_1 from '../views/lanhu_shouyezixun_1/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_shouyezixun"
  },
  {
    path: '/lanhu_shouyezixun',
    name: 'lanhu_shouyezixun',
    component: lanhu_shouyezixun
  },
  {
    path: '/lanhu_youwenbida2',
    name: 'lanhu_youwenbida2',
    component: lanhu_youwenbida2
  },
  {
    path: '/lanhu_wanghaijingli',
    name: 'lanhu_wanghaijingli',
    component: lanhu_wanghaijingli
  },
  {
    path: '/lanhu_denglux2fzhuce',
    name: 'lanhu_denglux2fzhuce',
    component: lanhu_denglux2fzhuce
  },
  {
    path: '/lanhu_denglux2fzhuce_1',
    name: 'lanhu_denglux2fzhuce_1',
    component: lanhu_denglux2fzhuce_1
  },
  {
    path: '/lanhu_shouyezixun_1',
    name: 'lanhu_shouyezixun_1',
    component: lanhu_shouyezixun_1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
