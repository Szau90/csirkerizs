<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const { addToCart } = cartStore;

defineProps(["id", "title", "description", "price", "productCounter", "image"]);
</script>

<template>
  <div class="flex flex-row justify-center md:w-52 md:mx-auto lg:w-full">
    <div
      class="w-28 h-10 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
    >
      {{ price }}
    </div>
    <PrimaryBtn
      title="kosárba"
      :isCartBtn="true"
      class="w-32 h-10 rounded-l-none text-content"
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
