import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemandeInfo from "@/views/DemandeInfo";
import DemandeNonInscrite from "@/views/DemandeNonInscrite";
import DemandeApresDate from "@/views/DemandeApresDate";

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
        path: '/demandenoninscrite',
        name: 'DemandeNonInscrite',
        component: DemandeNonInscrite
    },
    {
        path: '/demandeapresdate',
        name: 'DemandeApresDate',
        component: DemandeApresDate
    }
]

const router = new VueRouter({
    routes
})

export default router
