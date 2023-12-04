<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import ProductDetails from "./ProductDetails.vue";

const store = useMealsStore();

const meals = computed(() => store.meals.filter((f) => f.isHighlightedProduct));
</script>

<template>
  <section
    class="container mt-20 lg:mt-36 w-[368px] md:w-[736px] xl:w-full max-w-[1265px] mx-auto bg-highlightedBgMobile md:bg-highlightedBgTablet xl:bg-highlightedBg h-[650px] md:h-[400px] xl:h-[650px] shadow-xl rounded-[30px]"
  >
    <div
      id="content"
      class="flex flex-col h-[650px] md:h-[400px] xl:h-[650px] md:flex-row w-full lg:text-start xl:justify-start xl:ml-10 md:gap-2 xl:gap-20"
    >
      <img
        src="src/assets/Images/csirke_rizs_home-image.png"
        class="w-[290px] md:w-[350px] xl:w-[609px]  md:ml-8 xl:ml-2  md:mb-12"
      />

      <div class="flex ml-3">
        <ProductDetails v-for="meal in meals" :key="meal.id" :meal="meal" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  img {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
  #content {
    justify-content: start;
    align-items: center;
    text-align: center;
  }
}
</style>