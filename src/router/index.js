import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/foo'
import Bar from '@/components/bar'
import User from '@/components/user'
import Table from '@/components/table'
import pageerror from '@/components/pageerror'
import Manage from '@/components/manage'
import My from '@/components/manage/my'
import Product from '@/components/manage/product'
import Main from '@/components/main'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requireAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    {
      path: '/user/:userid',
      name: 'User',
      component: User
    },
    {
      path: '*',
      component: pageerror
    },
    {
      path: '/manage',
      component: Manage,
      redirect: '/manage/my',
      children: [
        {
          path: 'my',
          component: My
        },
        {
          path: 'product',
          component: Product
        },
      ]
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
