import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from '../pages/WelcomePage.vue'
import HomePage from '@/pages/HomePage.vue'
import AddInvoicePage from '@/pages/AddInvoicePage.vue'

import store from '@/store'


const router = createRouter({

    history:createWebHistory(),
    routes: [
        {
            path:"/",
            component: WelcomePage,

            // Navigation guard:
            // wenn der token gesezt ist, heiss dass der user bereits angemeldet ist,
            // der wird man direkt zum homepage geleitet, anderfalls muss sich der user anmelden
            beforeEnter:(to,from,next) => {
                if (store.getters.isAuthenticated){
                    next('/homepage')
                }else{
                    next()
                }
            }
        },
        {
            path:'/homepage',
            component: HomePage,

            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/homepage/newinvoice/',
            component: AddInvoicePage
        }
    ]
})

//Globale navigation guard
// hier wird überprüft ob der user authentifiziert ist

router.beforeEach((to,from,next)=> {
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/')
    }else{
        next()
    }
})

export default router