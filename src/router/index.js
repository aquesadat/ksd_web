import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeIntraDay.vue'
import ChartSimulator from '../views/ChartSimulator.vue'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/crypto/:id',
    name: 'chart',
    component: ChartSimulator,
    props: (route) =>{
      return {
        id: route.params.id
      }
    }
  },
  {
    path: '/:pathMatch(.*)*', component: PageNotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router