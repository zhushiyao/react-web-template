import Index from '@pages/Demo/index'
import Detail from '@pages/Demo/detail'
import Demo from '@pages/Demo/demo'
/**
 * path 路由路径
 * component 组件
 * type 路由类型， type=menu时，将会在左侧菜单上显示
 * icon 菜单图标 type=menu时生效
 * title 菜单标题 type=menu时生效
 */
export default [
  {
    path: '/',
    component: Index,
    type: 'menu',
    icon: 'home',
    title: 'Index页面'
  },
  {
    path: '/demo',
    component: Demo,
    type: 'menu',
    icon: 'home',
    title: 'Demo页面'
  },
  {
    path: '/demo/detail/:id',
    component: Detail
  }
]
