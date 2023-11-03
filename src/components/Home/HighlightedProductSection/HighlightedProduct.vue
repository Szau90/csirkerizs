<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import ProductDetails from "./ProductDetails.vue";

const store = useMealsStore();

const meals = computed(() => store.meals.filter((f) => f.isHighlightedProduct));
</script>

<template>
  <section
    class="container mx-auto bg-highlightedBgMobile md:bg-highlightedBg h-[650px]"
  >
    <div
      class="flex flex-col h-[650px] md:flex-row w-full md:items-center  md:pb-[6%] xl:pb-[4%] 2xl:pb-0 md:ml-[4%] 2xl:ml-0 md:gap-[5%] 2xl:gap-[1%]"
    >
      <div class="w-[60%] ml-[14%] mt-[10%]  md:m-0 md:w-[38%]  2xl:w-[48%] flex items-center justify-center">
        <img
          src="../../../assets/Images/csirke_rizs_home-image.png"
          class=""
        />
      </div>
      <div class="flex md:place-self-end ">
        <ProductDetails v-for="meal in meals" :key="meal.id" :meal="meal" />
      </div>
    </div>
  </section>
</template>
