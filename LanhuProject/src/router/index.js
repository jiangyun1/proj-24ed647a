import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_wanghaijingli from '../views/lanhu_wanghaijingli/index.vue'
import lanhu_qihuobaozhengjin from '../views/lanhu_qihuobaozhengjin/index.vue'
import lanhu_shouye from '../views/lanhu_shouye/index.vue'
import lanhu_youwenbida from '../views/lanhu_youwenbida/index.vue'
import lanhu_wodezhanghugerenziliao from '../views/lanhu_wodezhanghugerenziliao/index.vue'
import lanhu_denglux2fzhuce from '../views/lanhu_denglux2fzhuce/index.vue'
import lanhu_wodezhanghuyouwenbida from '../views/lanhu_wodezhanghuyouwenbida/index.vue'
import lanhu_wodezhanghu from '../views/lanhu_wodezhanghu/index.vue'
import lanhu_shouyezixun from '../views/lanhu_shouyezixun/index.vue'
import lanhu_wodezhanghufabuwenzhang from '../views/lanhu_wodezhanghufabuwenzhang/index.vue'
import lanhu_qihuobaozhengjin_2 from '../views/lanhu_qihuobaozhengjin_2/index.vue'
import lanhu_shouyeyouwenbida2 from '../views/lanhu_shouyeyouwenbida2/index.vue'
import lanhu_dankuangdaohang from '../views/lanhu_dankuangdaohang/index.vue'
import lanhu_qihuoshouxufei_1 from '../views/lanhu_qihuoshouxufei_1/index.vue'
import lanhu_denglux2fzhuce_1 from '../views/lanhu_denglux2fzhuce_1/index.vue'
import lanhu_qihuoshouxufei from '../views/lanhu_qihuoshouxufei/index.vue'
import lanhu_qihuobaozhengjin_1 from '../views/lanhu_qihuobaozhengjin_1/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_wanghaijingli"
  },
  {
    path: '/lanhu_wanghaijingli',
    name: 'lanhu_wanghaijingli',
    component: lanhu_wanghaijingli
  },
  {
    path: '/lanhu_qihuobaozhengjin',
    name: 'lanhu_qihuobaozhengjin',
    component: lanhu_qihuobaozhengjin
  },
  {
    path: '/lanhu_shouye',
    name: 'lanhu_shouye',
    component: lanhu_shouye
  },
  {
    path: '/lanhu_youwenbida',
    name: 'lanhu_youwenbida',
    component: lanhu_youwenbida
  },
  {
    path: '/lanhu_wodezhanghugerenziliao',
    name: 'lanhu_wodezhanghugerenziliao',
    component: lanhu_wodezhanghugerenziliao
  },
  {
    path: '/lanhu_denglux2fzhuce',
    name: 'lanhu_denglux2fzhuce',
    component: lanhu_denglux2fzhuce
  },
  {
    path: '/lanhu_wodezhanghuyouwenbida',
    name: 'lanhu_wodezhanghuyouwenbida',
    component: lanhu_wodezhanghuyouwenbida
  },
  {
    path: '/lanhu_wodezhanghu',
    name: 'lanhu_wodezhanghu',
    component: lanhu_wodezhanghu
  },
  {
    path: '/lanhu_shouyezixun',
    name: 'lanhu_shouyezixun',
    component: lanhu_shouyezixun
  },
  {
    path: '/lanhu_wodezhanghufabuwenzhang',
    name: 'lanhu_wodezhanghufabuwenzhang',
    component: lanhu_wodezhanghufabuwenzhang
  },
  {
    path: '/lanhu_qihuobaozhengjin_2',
    name: 'lanhu_qihuobaozhengjin_2',
    component: lanhu_qihuobaozhengjin_2
  },
  {
    path: '/lanhu_shouyeyouwenbida2',
    name: 'lanhu_shouyeyouwenbida2',
    component: lanhu_shouyeyouwenbida2
  },
  {
    path: '/lanhu_dankuangdaohang',
    name: 'lanhu_dankuangdaohang',
    component: lanhu_dankuangdaohang
  },
  {
    path: '/lanhu_qihuoshouxufei_1',
    name: 'lanhu_qihuoshouxufei_1',
    component: lanhu_qihuoshouxufei_1
  },
  {
    path: '/lanhu_denglux2fzhuce_1',
    name: 'lanhu_denglux2fzhuce_1',
    component: lanhu_denglux2fzhuce_1
  },
  {
    path: '/lanhu_qihuoshouxufei',
    name: 'lanhu_qihuoshouxufei',
    component: lanhu_qihuoshouxufei
  },
  {
    path: '/lanhu_qihuobaozhengjin_1',
    name: 'lanhu_qihuobaozhengjin_1',
    component: lanhu_qihuobaozhengjin_1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
