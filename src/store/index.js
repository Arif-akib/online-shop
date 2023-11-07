import { defineStore } from "pinia";

export const productsStore = defineStore( 'products',{
    state:()=>({
        products: [],
        cart:[],
    }),
    actions:{
        fetchProductsfromDB(){
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json =>{
                this.products=json.products;
            });
        },
        addToCart(products) {
            this.cart.push(products)
        },

        removeFromCart(id) {
           this.cart=this.cart.filter((item)=>item.id !==id)
        }
    }
})