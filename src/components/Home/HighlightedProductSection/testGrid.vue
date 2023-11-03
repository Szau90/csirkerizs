<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import ProductDetails from "./ProductDetails.vue";

const store = useMealsStore();

const meals = computed(() => store.meals.filter((f) => f.isHighlightedProduct));
</script>

<template>
  <v-container
    class="mx-auto  bg-highlightedBgMobile md:bg-highlightedBg h-[650px]"
  >
 
   
    <v-row justify="center"  class="" no-gutters>
      <v-col cols="6" offset="0">
        <img src="../../../assets/Images/csirke_rizs_home-image.png" class="" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" offset="0">
        <ProductDetails v-for="meal in meals" :key="meal.id" :meal="meal" />
      </v-col>
    </v-row>
  </v-container>
</template>
