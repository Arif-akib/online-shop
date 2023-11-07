<template>
    <div>
        <div v-if="!store.cart.length">
            <h1 class="text-center">No Items Added</h1>
        </div>
        <div v-else>
            <div v-for="item in store.cart" :key="item.id" class="py-5">
                <div class="grid grid-cols-5 gap-5 items-center">
                    <img :src="item.thumbnail" alt="" class="w-[30%]">
                    <p>Brand : {{ item.brand }}</p>
                    <p>Model : {{ item.title}}</p>
                    <p>Price : {{ item.price }}</p>
                    <button @click="removeFromCart(item.id)" class="border">Remove Item</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { productsStore } from '../store';

const store = productsStore()

const removeFromCart = (id) => {
       store.removeFromCart(id) 
    }
</script>