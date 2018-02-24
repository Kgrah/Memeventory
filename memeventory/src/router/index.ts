import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/SideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SideBar',
      component: SideBar
    }
  ]
})
