<script setup>
import { useCartStore } from "../../stores/cart"
import { storeToRefs } from "pinia";

defineProps(['quantity'])

const store = useCartStore();

const productCounter = storeToRefs(store.productCounter)



const { incrementQuantity, decrementQuantity } = store;
</script>

<template>
  <div
    class="w-full flex justify-between items-center h-14 px-5 rounded-full shadow-xl mt-10"
  >
    <button :disabled="productCounter === 1" @click="decrementQuantity">
      -</button
    ><span>{{ productCounter }} db</span
    ><button @click="incrementQuantity">+</button>
  </div>
</template>
