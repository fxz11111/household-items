import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/index.vue'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/userInfo',
    component: Layout,
    name: 'userInfo',
    redirect: '/userInfo/userList',
    meta: { title: '用户信息', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/userInfo/userList/index.vue'),
        meta: { title: '用户列表', icon: 'product-list' }
      },
      {
        path: '',
      }
    ]
  },

  {
    path: '/goodInfo',
    component: Layout,
    name: 'goodInfo',
    redirect: '/goodInfo/goodList',
    meta: { title: '商品管理', icon: 'product' },
    children: [
      {
        path: 'goodList',
        name: 'goodList',
        component: () => import('@/views/goodInfo/goodList/index.vue'),
        meta: { title: '商品列表', icon: 'product-list' }
      },
      {
        path: 'addGood',
        name: 'addGood',
        component: () => import('@/views/goodInfo/addGood/index.vue'),
        meta: { title: '新增商品', icon: 'good_add' }
      }
    ]
  },

  {
    path: '/orderInfo',
    component: Layout,
    name: 'orderInfo',
    meta: { title: '订单管理', icon: 'order' },
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/orderInfo/orderList/index.vue'),
        meta: { title: '订单列表', icon: 'product-list' }
      },
      {
        path: '',
      }
    ]
  },

  {
    path: '/cust-service',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Cust-service',
        component: () => import('@/views/cust-service/index.vue'),
        meta: { title: '客服管理', icon: 'eye-open' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// export const asyncRouterMap = [
//   {
//     path: '/userInfo',
//     component: Layout,
//     name: 'userInfo',
//     redirect: '/userInfo/userList',
//     meta: { title: '用户信息', icon: 'el-icon-s-help' },
//     children: [
//       {
//         path: 'userList',
//         name: 'userList',
//         component: () => import('@/views/userInfo/userList/index.vue'),
//         meta: { title: '用户列表', icon: 'product-list' }
//       },
//       {
//         path: '',
//       }
//     ]
//   },

//   {
//     path: '/goodInfo',
//     component: Layout,
//     name: 'goodInfo',
//     redirect: '/goodInfo/goodList',
//     meta: { title: '商品管理', icon: 'product' },
//     children: [
//       {
//         path: 'goodList',
//         name: 'goodList',
//         component: () => import('@/views/goodInfo/goodList/index.vue'),
//         meta: { title: '商品列表', icon: 'product-list' }
//       },
//       {
//         path: '',
//       }
//     ]
//   },

//   {
//     path: '/orderInfo',
//     component: Layout,
//     name: 'orderInfo',
//     meta: { title: '订单管理', icon: 'order' },
//     children: [
//       {
//         path: 'orderList',
//         name: 'orderList',
//         component: () => import('@/views/orderInfo/orderList/index.vue'),
//         meta: { title: '订单列表', icon: 'product-list' }
//       },
//       {
//         path: '',
//       }
//     ]
//   },

//   {
//     path: '/cust-service',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Cust-service',
//         component: () => import('@/views/cust-service/index.vue'),
//         meta: { title: '客服管理', icon: 'eye-open' }
//       }
//     ]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
