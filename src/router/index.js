import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'

Vue.use(Router)

// 注册路由
export default new Router({
  mode:'history',
  // linkActiveClass:'act', //路由激活的样式
  routes: [
    {
      path: '/',  //路由路径
      name: 'index', // 路由名称
      component: index // 组件
    }
  ]
})
