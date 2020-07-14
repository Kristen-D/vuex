import Vue from 'vue'
import Router from 'vue-router'
import indexVuex from '../components/indexVuex';
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'indexVuex',
      component: indexVuex
    }
  ]
})
// {
//   path: '/',
//   name: 'HelloWorld',
//   component: HelloWorld
// }
//import HelloWorld from '@/components/HelloWorld'

