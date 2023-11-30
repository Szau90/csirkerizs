<script setup>
import { useCartStore } from "../../stores/cart";
import PrimaryBtn from "../../components/UI/PrimaryBtn.vue";

defineProps(["isMeal", "quantity", "item"]);

const cartStore = useCartStore();

const { incrementQuantity, decrementQuantity } = cartStore;
</script>

<template>
  <v-col
    v-if="isMeal"
    cols="3"
    class="flex flex-col justify-center items-center"
  >
    <p>adagok és időpontok</p>
    <PrimaryBtn :title="'szerkesztés'" class="w-44" />
  </v-col>
  <v-col
    v-else
    cols="3"
    align="center"
    class="flex flex-col justify-center items-center"
  >
    <p>mennyiség</p>
    <div
      class="w-44 flex justify-between items-center h-14 px-5 rounded-full shadow-xl"
    >
      <button @click="decrementQuantity(item)">-</button
      ><span>{{ quantity }} db</span
      ><button @click="incrementQuantity(item)">+</button>
    </div>
  </v-col>
</template>
