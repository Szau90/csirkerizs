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
  <section>
    <template v-for="item in cartItems" :key="item.id">
      <v-row class="w-[1110px]">
        <CartItemImage :image="item.image" />
        <CartItemContent
          :name="item.name"
          :description="item.description"
          :energy="item.energy"
          :is-meal="item.isMeal"
        />
        <v-divider
          class="border-opacity-100"
          color="#D9D9E5"
          vertical
          inset
        ></v-divider>
        <CartitemQuantity
          :item="item"
          :quantity="item.quantity"
          :is-meal="item.isMeal"
        />

        <v-divider class="border-opacity-100" color="#D9D9E5" vertical inset>
        </v-divider>
        <CartItemPrice
          :quantity="item.quantity"
          :is-meal="item.isMeal"
          :calculated-price="item.calculatedPrice"
        />
      </v-row>
      <v-divider
        class="border-opacity-100 w-[938px] my-10"
        color="#D9D9E5"
      ></v-divider>
    </template>
  </section>
</template>
