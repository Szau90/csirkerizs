<script setup>
import CartItemImage from "./CartItemImage.vue";
import CartItemContent from "./CartItemContent.vue";
import CartitemQuantity from "./CartitemQuantity.vue";
import CartItemPrice from "./CartItemPrice.vue";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();

const cart = storeToRefs(cartStore);

const cartItems = cart.cartItems;
</script>

<template>
  <section class="lg:w-[938px] xl:w-[850px] 2xl:w-[938px]">
    <template v-for="item in cartItems" :key="item.id">
      <div class="flex flex-row items-center  text-center xl:flex-row w-[360px] py-2 md:w-[757px] lg:max-xl:w-[938px] xl:w-[850px] 2xl:w-[938px]">
        <CartItemImage :image="item.image" />
        <CartItemContent
          :name="item.name"
          :description="item.description"
          :energy="item.energy"
          :is-meal="item.isMeal"
        />
       <div class="hidden md:block w-px h-[130px] bg-lightBorder"/>
        <CartitemQuantity
          :item="item"
          :quantity="item.quantity"
          :is-meal="item.isMeal"
        />
        <div class="hidden md:block w-px h-[130px] bg-lightBorder"/>
        <CartItemPrice
          :quantity="item.quantity"
          :is-meal="item.isMeal"
          :calculated-price="item.calculatedPrice"
        />
      </div>
      <div class="hidden md:block h-px mx-4  bg-lightBorder"/>
    </template>
  </section>
</template>
