<template>
    <div class="flex gap-5 px-[5%]">
        <div>
            <img :src="selectedProduct.thumbnail" alt="">
        </div>
        <div class="py-5">
            <h2 class="font-semibold text-lg">Brand : {{ selectedProduct.brand }}</h2>
            <p class="">Details : {{ selectedProduct.description }}</p>
            <p class="font-semibold">Price : {{ selectedProduct.price }}</p>
            <button @click="addToCart()" class="border">Add to Cart</button>
        </div>
    </div>
    
</template>

<script setup>
import { productsStore } from '../store/index';
import { computed,} from "vue"
import { useRoute, useRouter } from 'vue-router';

const store = productsStore()
const router = useRouter()
const route = useRoute()



const selectedProduct = computed(()=> {
    return store.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () => {
    store.addToCart(selectedProduct.value)
}
</script>