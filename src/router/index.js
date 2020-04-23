import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemandeInfo from "@/views/DemandeInfo";
import NbTourneesRealisees from "@/views/NbTourneesRealisees";
import DemandeNonInscrite from "@/views/DemandeNonInscrite";
import DemandeApresDate from "@/views/DemandeApresDate";
import QteRecupTypeDechet from "@/views/QteRecupTypeDechet";
import InfosEntreprise from "@/views/InfosEntreprise";
import QuantiteDechetsSite from "@/views/QuantiteDechetsSite";
import QuantiteDechetsNational from "@/views/QuantiteDechetsNational";

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
    },
    {
        path: '/demandeapresdate',
        name: 'DemandeApresDate',
        component: DemandeApresDate
    },
    {
        path: '/qterecuptypedechet',
        name: 'QteRecupTypeDechet',
        component: QteRecupTypeDechet
    },
    {
        path: '/infosEntreprise',
        name: 'InfosEntreprise',
        component: InfosEntreprise
    },
    {
        path: '/quantiteDechetsSite',
        name: 'QuantiteDechetsSite',
        component: QuantiteDechetsSite
    },
    {
        path: '/quantiteDechetsNational',
        name: 'QuantiteDechetsNational',
        component: QuantiteDechetsNational
    }
]

const router = new VueRouter({
    routes
})

export default router
