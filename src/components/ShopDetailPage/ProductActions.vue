<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { useCartStore } from "@/stores/cart";
import { useProductCounterStore } from "../../stores/productCounter";
import { storeToRefs } from "pinia";

const store = useProductCounterStore();

const { productCounter } = storeToRefs(store);

const cartStore = useCartStore();

const { addToCart } = cartStore;

defineProps(["id", "title", "description", "price", "quantity", "image"]);
</script>

<template>
  <div class="flex flex-row justify-center md:w-full md:mx-auto ">
    <div
      class="w-36 h-14 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
    >
      {{ price }} Forint
    </div>
    <PrimaryBtn
      title="kosárba"
      :isCartBtn="true"
      class="w-40 h-14 rounded-l-none text-content"
      @click="
        addToCart({
          id: id,
          name: title,
          description: description,
          price: price,
          quantity: productCounter,
          image: image,
        })
      "
    />
  </div>
</template>
