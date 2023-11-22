<script setup>
import { computed, watchEffect, provide } from "vue";
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import NotFoundView from "../views/NotFoundView.vue";
import ProductDetails from "@/components/ShopDetailPage/ProductDetails.vue";




const route = useRoute();

const store = useProductStore();

const { products } = storeToRefs(store);

const productId = computed(() => {
  return parseInt(route.params.productId);
});

const currentProduct = computed(() => {
  return products.value.find((product) => product.id === productId.value);
});

const similarProducts = products.value.filter(item => item.category === currentProduct.value.category)

watchEffect(route, currentProduct);

provide('product', currentProduct)
</script>

<template>
  <ProductDetails
    v-if="currentProduct"
    :id="currentProduct.id"
    :title="currentProduct.name"
    :subtitle="currentProduct.description"
    :description="currentProduct.description"
    :price="currentProduct.price"
    :image="currentProduct.src"
    :flavour="currentProduct.flavour"
    :weight="currentProduct.weight"
    :gallery="currentProduct.galery"
    :similarProducts="similarProducts"
  />

  <NotFoundView v-else />
</template>
