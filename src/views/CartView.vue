<script setup>
import {useCartStore} from "../stores/cart"
import { storeToRefs } from "pinia";

const cartStore = useCartStore()

const cartItems = storeToRefs(cartStore)

const tömb = cartItems.items

</script>

<template>
<h1>{{ cartItems.items }}</h1>

 <div v-for="item in tömb" :key="item.id" class="flex flex-col ">
    <v-img :src="item.image" max-width="300"></v-img>
    {{ item.name }}
    {{ item.description }}
    {{ item.price }}

    
</div>
</template>