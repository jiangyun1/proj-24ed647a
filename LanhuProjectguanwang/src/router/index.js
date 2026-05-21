import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_shouyezixun from '../views/lanhu_shouyezixun/index.vue'
import lanhu_denglux2fzhuce from '../views/lanhu_denglux2fzhuce/index.vue'
import lanhu_shouyegerenziliao from '../views/lanhu_shouyegerenziliao/index.vue'
import lanhu_wanghaijingli from '../views/lanhu_wanghaijingli/index.vue'
import lanhu_shouyewenzhangyuzixun from '../views/lanhu_shouyewenzhangyuzixun/index.vue'
import lanhu_denglux2fzhuce_1 from '../views/lanhu_denglux2fzhuce_1/index.vue'

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
    path: '/lanhu_denglux2fzhuce',
    name: 'lanhu_denglux2fzhuce',
    component: lanhu_denglux2fzhuce
  },
  {
    path: '/lanhu_shouyegerenziliao',
    name: 'lanhu_shouyegerenziliao',
    component: lanhu_shouyegerenziliao
  },
  {
    path: '/lanhu_wanghaijingli',
    name: 'lanhu_wanghaijingli',
    component: lanhu_wanghaijingli
  },
  {
    path: '/lanhu_shouyewenzhangyuzixun',
    name: 'lanhu_shouyewenzhangyuzixun',
    component: lanhu_shouyewenzhangyuzixun
  },
  {
    path: '/lanhu_denglux2fzhuce_1',
    name: 'lanhu_denglux2fzhuce_1',
    component: lanhu_denglux2fzhuce_1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
