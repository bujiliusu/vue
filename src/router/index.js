import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/foo'
import Bar from '@/components/bar'
import User from '@/components/user'
import Table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requireAuth: true }
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
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
