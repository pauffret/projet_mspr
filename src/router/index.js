import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resultat from "@/views/Resultat";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/resultat',
        name: 'Resultat',
        component: Resultat
    }
]

const router = new VueRouter({
    routes
})

export default router
