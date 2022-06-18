import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MusicList from '../views/MusicList.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/musicList',
        name: 'MusicList',
        component: MusicList,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
