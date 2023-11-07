<script setup>

    import { onMounted } from 'vue';
    import { productsStore } from '../store/index';
    import { useRoute, useRouter } from 'vue-router';

    const router =useRouter()
    const store = productsStore()

    onMounted(async()=>{
        // console.log('monted>>>')
        await store.fetchProductsfromDB()
    });

    const goToProductPage =(id) => {
        router.push({name:'ProductView',params:{id}})
    }
</script>
<template>
    <div>
        <div class="h-screen bg-cover bg-center flex items-center justify-center pt-[70px] px-[5%] ban-img-one" id="top">
            <div class="w-full md:w-1/2 text-center text-white px-[5%] py-10 backdrop-blur-sm rounded-lg bg-[#0000003d] shadow-md">
                <h1 class="text-5xl font-semibold py-5">COSMOPOLIS</h1>
                <p class="w-[40px] h-[3px] bg-white m-auto"></p>
                <p class="py-5">Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</p>
                <button class="py-3 px-10  text-white font-[700] border border-black bg-black hover:bg-white hover:text-black duration-300">SHOP NOW</button>
            </div>
        </div>

        <div class="mx-[5%] mt-[30px] h-[2px] bg-black flex items-center justify-center">
            <h1 class="text-2xl text-center font-[700] py-5 px-[10px] sm:px-[70px] bg-white uppercase" id="women">Women's Collection</h1>
        </div>
        <div class="flex justify-center">
            <span class="border-b border-black my-10 text-sm cursor-pointer">View All</span>
        </div>

        <div class="px-[5%] flex flex-wrap justify-between gap-5">
            <div 
                class="basis-[20%]"
                v-for="product in store.products"
                :key="product.id"
                @click="goToProductPage(product.id)"
                >
                <img :src="product.thumbnail" alt="" class="">
                <h6 class="text-gray-500 text-center py-3">{{ product.brand }}</h6>
                <p class="text-sm text-center px-3">This approach ensures that the general people of Bangladesh get to fully utilise and benefit from the IT.</p>
            </div>
        </div>
    </div>
</template>

<style>
    html{
        scroll-behavior: smooth;
        scroll-padding-top: 120px;
    }
    ::-webkit-scrollbar {
        width: 7px;
        
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .ban-img-one{
        animation: 10s ban-animate1 linear infinite;
    }
    @keyframes ban-animate1{
        0%{
            background-image: url(../assets/landing/1.png);
        }
        46%{
            background-image: url(../assets/landing/1.png);
        }
        50%{
            background-image: url(../assets/landing/2.png);
        }
        96%{
            background-image: url(../assets/landing/2.png);
        }
        100%{
            background-image: url(../assets/landing/1.png);
        }
    }

    .ban-img-two{
        animation: 10s ban-animate2 linear infinite;
    }
    @keyframes ban-animate2{
        0%{
            background-image: url(../assets/landing/3.png);
        }
        46%{
            background-image: url(../assets/landing/3.png);
        }
        50%{
            background-image: url(../assets/landing/4.png);
        }
        96%{
            background-image: url(../assets/landing/4.png);
        }
        100%{
            background-image: url(../assets/landing/3.png);
        }
    }
</style>