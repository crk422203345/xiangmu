import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/workbench',
      component: () => import('./views/workbench.vue'),
      children: [{
          path: 'bench',
          component: () => import('./commodity/bench.vue')
        },
        {
          path: 'shangpin',
          component: () => import('./commodity/shangpin.vue')
        },
        {
          path: 'fabu',
          component: () => import('./commodity/fabu.vue')       },
        {
          path: 'fenlei',
          component: () => import('./commodity/fenlei.vue')
        },
        {
          path: 'pinpai',
          component: () => import('./commodity/pinpai.vue')
        },
        {
          path: 'guige',
          component: () => import('./commodity/guige.vue')
        },
        {
          path: 'leixing',
          component: () => import('./commodity/leixing.vue')
        },
        {
          path: 'zixuen',
          component: () => import('./commodity/zixuen.vue')
        },
        {
          path: 'pingjia',
          component: () => import('./commodity/pingjia.vue')
        },
        {
          path: 'rexiao',
          component: () => import('./commodity/rexiao.vue')
        },
        {
          path: 'kucuen',
          component: () => import('./commodity/kucuen.vue')
        },
        {
          path: 'dingdan',
          component: () => import('./orderForm/dingdan.vue')
        },
        {
          path: 'dayin',
          component: () => import('./orderForm/dayin.vue')
        },
        {
          path: 'fahuo',
          component: () => import('./orderForm/fahuo.vue')
        },
        {
          path: 'tuihuo',
          component: () => import('./orderForm/tuihuo.vue')
        },
        {
          path: 'guanliyuan',
          component: () => import('./operation/guanliyuan.vue')
        },
        {
          path: 'juese',
          component: () => import('./operation/juese.vue')
        },
        {
          path: 'guanggao1',
          component: () => import('./operation/guanggao1.vue')
        },
        {
          path: 'guanggao2',
          component: () => import('./operation/guanggao2.vue')
        },
        {
          path: 'youhuijuan',
          component: () => import('./operation/youhuijuan.vue')
        },
        {
          path: 'kefu',
          component: () => import('./operation/kefu.vue')
        },
        {
          path: 'haibao',
          component: () => import('./operation/haibao.vue')
        },
        {
          path: 'caozuo',
          component: () => import('./operation/caozuo.vue')
        },
        {
          path: 'yonghu1',
          component: () => import('./user/yonghu1.vue')
        },
        {
          path: 'dengji',
          component: () => import('./user/dengji.vue')
        },
        {
          path: 'zidian',
          component: () => import('./user/zidian.vue')
        },
        {
          path: 'zidianleixing',
          component: () => import('./user/zidianleixing.vue')
        },
        {
          path: 'zhanneixin',
          component: () => import('./user/zhanneixin.vue')
        },
        {
          path: 'lanmu',
          component: () => import('./interface/lanmu.vue')
        },
        {
          path: 'wenzhang',
          component: () => import('./interface/wenzhang.vue')
        },
        {
          path: 'quyu',
          component: () => import('./set/quyu.vue')
        },
        {
          path: 'wuliou',
          component: () => import('./set/wuliou.vue')
        },
        {
          path: 'ftp',
          component: () => import('./set/ftp.vue')
        },
        {
          path: 'jilu',
          component: () => import('./set/jilu.vue')
        },
        {
          path: 'jiekou',
          component: () => import('./set/jiekou.vue')
        },
        {
          path: 'zhanghu',
          component: () => import('./set/zhanghu.vue')
        },
        {
          path: 'peisong',
          component: () => import('./set/peisong.vue')
        },
        {
          path: 'gonzhonghao',
          component: () => import('./set/gonzhonghao.vue')
        },
        {
          path: 'zhifu',
          component: () => import('./set/zhifu.vue')
        },
        {
          path: 'denglu',
          component: () => import('./set/denglu.vue')
        },
        {
          path: 'dandian',
          component: () => import('./set/dandian.vue')
        },
        {
          path: 'quanju',
          component: () => import('./set/quanju.vue')
        },
        {
          path: 'youxiang',
          component: () => import('./set/youxiang.vue')
        },
        {
          path: 'jichu',
          component: () => import('./set/jichu.vue')
        }
      ]
    },
    {
      path: '/',
      name:'register',
      component: () => import('./components/register.vue')
    }
  ]
})