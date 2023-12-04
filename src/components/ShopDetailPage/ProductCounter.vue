<script setup>
import { ref } from "vue";
import { useProductCounterStore } from "../../stores/productCounter";
import { storeToRefs } from "pinia";

const props = defineProps(["quantity"]);

const store = useProductCounterStore();

const { productCounter } = storeToRefs(store);

const { incrementQuantity, decrementQuantity } = store;
</script>

<template>
  <div
    class="w-full flex justify-between items-center h-14 px-5 rounded-full shadow-xl mt-10"
  >
    <button :disabled="productCounter === 1" @click="decrementQuantity">-</button
    ><span>{{ productCounter }} db</span
    ><button @click="incrementQuantity">+</button>
  </div>
</template>
