import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import SideBarItem from '@/components/SideBarItem.vue'
import Banner from '@/components/Banner.vue'
import Dashboard from '@/components/Dashboard.vue'
import CardMat from '@/components/CardMat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Dashboard,
      children: [
        { path: '', components: {sidebar: SideBar, banner: Banner}, children: [
          { path: '', component: SideBarItem }
        ]}
      ]
    },
    {
      path: '/memes',
      component: Dashboard,
      children: [
        { path: '/memes', components: { sidebar: SideBar, banner: Banner, cardmat: CardMat }, children: [
          { path: '', component: SideBarItem },
          { path: '', component: Banner }
        ]}
      ]
    }
  ]
})
