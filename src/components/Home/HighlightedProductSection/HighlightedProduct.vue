<script setup>

import { useMealsStore } from "../../../stores/meals";
import ProductDetails from "./ProductDetails.vue";
import { storeToRefs } from "pinia";

const store = useMealsStore();

const { meals } = storeToRefs(store);

</script>

<template>
  <section
    id="bg-image"
    class="container mt-20 lg:mt-36 w-[368px] md:w-[736px] xl:w-full max-w-[1265px] mx-auto h-[650px] md:h-[400px] xl:h-[650px] shadow-xl rounded-[30px]"
  >
    <div
      id="content"
      class="flex flex-col h-[650px] md:h-[400px] xl:h-[650px] md:flex-row w-full lg:text-start xl:justify-start xl:ml-10 md:gap-2 xl:gap-20"
    >
      <img
        src="../../../assets/images/csirke_rizs_home-image.png"
        class="w-[290px] md:w-[350px] xl:w-[609px] md:ml-8 xl:ml-2 md:mb-12"
      />
      <template v-for="meal in meals" :key="meal.id">
     
          <ProductDetails v-if="meal.isHighlightedProduct" :meal="meal" />
        
      </template>
    </div>
  </section>
</template>

<style scoped>
#bg-image {
  background-image: url('../../../assets/shapes/HighlightedBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 1279px) {
  #bg-image {
    background-image: url('../../../assets/shapes/HighlightedBgTablet.svg');
    background-repeat: no-repeat;
  background-size: cover;
  }
}
@media screen and (max-width: 767px) {
  #bg-image {
    background-image: url('../../../assets/shapes/HighlightedBgMobile.svg');
    background-repeat: no-repeat;
  background-size: cover;
  }
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
