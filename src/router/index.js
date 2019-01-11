import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: { title: '跳转控件' },
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/index.vue'], resolve),
          name: 'index',
          meta: { title: '首页' }
        }
        // {
        //   path: '/detail/:id',
        //   component: resolve => require(['../components/page/detail.vue'], resolve),
        //   name: 'detail',
        //   meta: { title: '产品详情' }
        // }
      ]
    },
    {
      path: '/404',
      component: resolve => require(['../components/page/404.vue'], resolve),
      name: '404',
      meta: { title: '404' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
