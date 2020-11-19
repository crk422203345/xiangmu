import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
//   mode: 'hash',
//   routes: [
//     {
//       path: '/',
//       name:'modification',
//       component: () => import('./components/modification.vue')
//     }
//   ]
// })



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
        },
        {
          path: 'index1',
          component: () => import('./query/index1.vue')
        },
        {
          path: 'index2',
          component: () => import('./query/index2.vue')
        },
        {
          path: 'index3',
          component: () => import('./query/index3.vue')
        },
        {
          path: 'index4',
          component: () => import('./query/index4.vue')
        },
        {
          path: 'index5',
          component: () => import('./query/index5.vue')
        },
        {
          path: 'index6',
          component: () => import('./query/index6.vue')
        },
        {
          path: 'index7',
          component: () => import('./query/index7.vue')
        },
        {
          path: 'index8',
          component: () => import('./query/index8.vue')
        },
        {
          path: 'index9',
          component: () => import('./query/index9.vue')
        },
        {
          path: 'index10',
          component: () => import('./query/index10.vue')
        },
        {
          path: 'index11',
          component: () => import('./query/index11.vue')
        },
        {
          path: 'index12',
          component: () => import('./query/index12.vue')
        },
        {
          path: 'index13',
          component: () => import('./query/index13.vue')
        },
        {
          path: 'index14',
          component: () => import('./query/index14.vue')
        },
        {
          path: 'index15',
          component: () => import('./query/index15.vue')
        },
        {
          path: 'index16',
          component: () => import('./query/index16.vue')
        },
        {
          path: 'index17',
          component: () => import('./query/index17.vue')
        },
        {
          path: 'index18',
          component: () => import('./query/index18.vue')
        },
        {
          path: 'index19',
          component: () => import('./query/index19.vue')
        },
        {
          path: 'index20',
          component: () => import('./query/index20.vue')
        },
        {
          path: 'index21',
          component: () => import('./query/index21.vue')
        },
        {
          path: 'index22',
          component: () => import('./query/index22.vue')
        },
        {
          path: 'index23',
          component: () => import('./query/index23.vue')
        },
        {
          path: 'index24',
          component: () => import('./query/index24.vue')
        },
        {
          path: 'index25',
          component: () => import('./query/index25.vue')
        },
        {
          path: 'index26',
          component: () => import('./query/index26.vue')
        },
        {
          path: 'index27',
          component: () => import('./query/index27.vue')
        },
        {
          path: 'index28',
          component: () => import('./query/index28.vue')
        },
        {
          path: 'select',
          component: () => import('./components/select.vue')
        },
        {
          path: 'reply',
          component: () => import('./components/reply.vue')
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