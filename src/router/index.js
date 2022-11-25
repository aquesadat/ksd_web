import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeIntraDay.vue'
import ChartSimulator from '../views/ChartSimulator.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router