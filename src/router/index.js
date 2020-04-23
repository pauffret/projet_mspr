import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resultat from "@/views/Resultat";
import DemandeInfo from "@/views/DemandeInfo";
import DemandeNonInscrite from "@/views/DemandeNonInscrite";

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
    },
    {
        path: '/demandeInfo',
        name: 'DemandeInfo',
        component: DemandeInfo
    },
    {
        path: '/demandenoninscrite',
        name: 'DemandeNonInscrite',
        component: DemandeNonInscrite
    }
]

const router = new VueRouter({
    routes
})

export default router
