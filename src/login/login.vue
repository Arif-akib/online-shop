<template>
    <div class="w-full h-screen flex justify-center items-center">
        <form @submit.prevent="doLogin">
            <div class="max-h-[750px] max-w-[300px] bg-white p-5 rounded-lg border drop-shadow-md">
                <h1 class="text-2xl font-bold text-center">{{ route.name }}</h1>
                <p class="font-semibold py-1.5">Email</p>
                <input type="email" v-model="schema.email" class="border border-blue-300 focus:outline-blue-600 rounded-md w-full py-1.5 px-3">
                <p class="font-semibold py-1.5">Password</p>
                <input type="password" v-model="schema.password" class="border border-blue-300 focus:outline-blue-600 rounded-md w-full py-1.5 px-3">
                <div class="flex justify-between items-center gap-5 my-3">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="">
                        <p class="text-xs">Remember me</p>
                    </div>
                    <p class="text-xs text-gray-400">Forgot Password?</p>
                </div>
                <button type="submit" @click ="login()" class="bg-green-600 w-full px-3 py-2 rounded-md my-3 text-white font-semibold">Login</button>
                <p class="text-center text-gray-600">OR</p>
                <button class="border border-blue-600 w-full px-3 py-2 rounded-md my-3 font-bold text-gray-400 flex items-center justify-center gap-2"><ion-icon name="logo-google"></ion-icon>Sign in with Google</button>
                <div class="flex text-sm justify-between gap-2">
                    <p class="text-gray-500">Don't have an account ? </p>
                    <router-link to="/register" class="text-gray-500 font-semibold hover:text-blue-600 cursor-pointer">Register</router-link>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
    import { computed, ref} from "vue";
    import {useRoute} from 'vue-router'
    const route = useRoute();

    const schema = ref({
        email:'',
        password:''
    })


    const doLogin = () => {
        const data = schema.value
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',data
        })
    };
</script>