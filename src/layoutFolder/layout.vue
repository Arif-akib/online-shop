<template>
    <div>
        <div 
        @click="router.push({name:'CartView'})"
        class="h-[50px] flex items-center"
        >
            <h1>items in cart {{ store.cart.length }}</h1>
        </div>
        <div>
            <router-view/>  
        </div>
    </div>
    
</template>

<script setup>
    import {useRoute , useRouter} from 'vue-router'
    // import router from '../router';
    import { productsStore } from '../store';
    
    const route = useRoute();
    const router = useRouter()
    const store = productsStore()
    
</script>

