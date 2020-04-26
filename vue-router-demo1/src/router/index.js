import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CatMain from '@/components/CatMain'
import BlueCat from '@/components/BlueCat'
import JuCat from '@/components/JuCat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/catMain',
      name: 'CatMain',
      component: CatMain
    },
    {
      path: '/blueCat',
      name: 'BlueCat',
      component: BlueCat
    },
    {
      path: '/juCat',
      name: 'JuCat',
      component: JuCat
    }
  ]
})
