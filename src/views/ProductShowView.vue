<script setup>
import { computed, watchEffect } from "vue";
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
import { useRoute } from 'vue-router';
import NotFoundView  from '../views/NotFoundView.vue'

const route  = useRoute();

const store = useProductStore();

const { products } = storeToRefs(store);

const productId = computed(() => {
  return parseInt(route.params.productId);
});

const currentProduct = computed(() => {
    return products.value.find(product => product.id === productId.value )
});

watchEffect(route, currentProduct)
</script>

<template>
  <div v-if="currentProduct">
    <h2>{{ currentProduct.name }}</h2>
    <p>{{ currentProduct.id }}</p>
    <p>{{ currentProduct.description }}</p>
  <v-img :src="currentProduct.src" width="300"></v-img>
  <router-link :to="`/shop/${Math.floor(Math.random() *1000 )}`" > click</router-link>
  </div>

  <NotFoundView v-else/>
  
</template>
