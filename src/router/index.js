import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layoutFolder/layout.vue";

// import Login from "../login/login.vue"
import Landing from "../pages/landing.vue"
import Product from "../pages/ProductDetail.vue" 
import Cart from "../pages/Cart.vue"

const routes=[
    {   path:'/',
        component:Landing,
        name:'Landing',
    },

    {
        path:'/Product/:id',
        component:Product,
        name:'ProductView',
    },
    {
        path:'/Cart',
        component:Cart,
        name:'CartView',
    },


]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router;