<script setup>
import ProductActions from "./ProductActions.vue";
import ProductTable from "./ProductTable.vue";
import { useProductCounterStore } from "@/stores/productCounter";
import { storeToRefs } from "pinia";

const store = useProductCounterStore();

const { productCounter } = storeToRefs(store);

const { incrementQuantity, decrementQuantity } = store;

defineProps([
  "id",
  "title",
  "subtitle",
  "description",
  "weight",
  "flavour",
  "price",
  "image",
]);
</script>

<template>
  <section class="flex flex-col w-[24.5rem] items-center gap-4 text-center">
    <div class="max-w-[20rem]">
      <h1 class="text-product-title font-semibold">{{ title }}</h1>
      <p class="text-content-md text-textColor">{{ subtitle }}</p>
      <p class=" mt-2 text-content-md text-[#B4B4B4]">{{ description }}</p>
      <ProductTable :flavour="flavour" :weight="weight" />
      <div
        class="w-full flex justify-between items-center h-14 px-5 rounded-full shadow-xl mt-10"
      >
        <button :disabled="productCounter === 1" @click="decrementQuantity">
          -</button
        ><span>{{ productCounter }} db</span
        ><button @click="incrementQuantity">+</button>
      </div>
      <ProductActions
        :id="id"
        :title="title"
        :description="description"
        :price="price"
        :product-counter="productCounter"
        :image="image"
        class="mt-5"
      />
    </div>
  </section>
</template>

