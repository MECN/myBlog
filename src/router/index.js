import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import notes from '@/components/pages/notes'
import life from '@/components/pages/life'
import link from '@/components/pages/link'
import about from '@/components/pages/about'
import web from '@/components/pages/web'

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
    },{
      path:'/notes',
      name:'notes',
      component:notes
    },{
      path:'/life',
      name:'life',
      component:life
    },{
      path:'/link',
      name:'link',
      component:link,
    },{
      path:'/web',
      name:'web',
      component:web,
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
})
