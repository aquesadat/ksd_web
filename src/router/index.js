import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomeIntraDay.vue'
import ChartSuggest from '../views/ChartSuggest.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crypto/:id',
    name: 'chart',
    component: ChartSuggest,
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