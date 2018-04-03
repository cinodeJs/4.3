import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import qxlp from './views/qxlp.vue'
import eslp from './views/qxlp.vue'
import qxsp from './views/qxlp.vue'
import lsdt from './views/lsdt.vue'
import lxwm from './views/lxwm.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qxlp/:fenlei',
      name: 'about',
      component: qxlp
    },
    {
      path: '/lsdt',
      name: 'about',
      component: lsdt
    },
    {
      path: '/lxwm',
      name: 'about',
      component: lxwm
    }
  ]
})