<script setup>
import ProductActions from "./ProductActions.vue";
import ProductTable from "./ProductTable.vue";
import ProductCounter from "./ProductCounter.vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import {computed, watch} from 'vue'
const props = defineProps([
  "id",
  "title",
  "subtitle",
  "description",
  "weight",
  "flavour",
  "price",
  "image",
]);

const store = useCartStore();

const { cartItems } = storeToRefs(store);



const itemInCart = computed(()=>{
  cartItems.value.find(item => item.id === props.id)
})

const quantity = computed(()=>{

if(itemInCart.value) {
  return itemInCart.value.quantity
}else {
  return 1
}
})



console.log(quantity.value)

</script>

<template>
  <section class="flex flex-col w-[24.5rem] items-center gap-4 text-center">
    <div class="max-w-[20rem]">
      <h1 class="text-product-title font-semibold">{{ title }}</h1>
      <p class="text-content-md text-textColor">{{ subtitle }}</p>
      <p class=" mt-2 text-content-md text-[#B4B4B4]">{{ description }}</p>
      <ProductTable :flavour="flavour" :weight="weight" />
      <ProductCounter :quantity="quantity" :id="props.id" />
      <ProductActions
        :id="id"
        :title="title"
        :description="description"
        :price="price"
        :quantity="quantity"
        :image="image"
        class="mt-5"
      />
    </div>
  </section>
</template>

