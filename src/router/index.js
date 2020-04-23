import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemandeInfo from "@/views/DemandeInfo";
import NbTourneesRealisees from "@/views/NbTourneesRealisees";
import DemandeNonInscrite from "@/views/DemandeNonInscrite";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/demandeInfo',
        name: 'DemandeInfo',
        component: DemandeInfo
    },
    {
        path: '/nbTourneesRealisees',
        name: 'NbTourneesRealisees',
        component: NbTourneesRealisees
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
