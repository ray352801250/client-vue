import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Emp from '@/components/Emp'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/emp',
      name: 'emp',
      component: Emp
    }
  ]
})
