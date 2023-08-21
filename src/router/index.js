import { createRouter, createWebHashHistory } from 'vue-router'
import Waste from '../views/Waste.vue'
import Picture from '../components/Picture/Picture.vue'
import Search from '../components/Search.vue'

const routes = [
  { path: '/', redirect: '/waste' },
  {
    path: '/waste',
    name: 'waste',
    component: Waste,
    redirect: '/picture',
    children: [
      { path: '/picture', name: 'picture', component: Picture },
      { path: '/search', name: 'search', component: Search },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
