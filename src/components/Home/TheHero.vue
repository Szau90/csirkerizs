<template>
  <div class="container mx-auto h-[48.5rem] flex flex-row ">
    <div class="flex w-1/2 h-full"></div>

    <div class="relative flex w-1/2 h-full">
      <img
        src="../../assets/shapes/test.svg"
        class="hidden md:block absolute -top-[34%] lg:-top-[41%] xl:-top-[48%] 2xl:-top-[61%]"
      />
    </div>
    
  </div>
  
</template>

<script setup>
import PrimaryHeroPattern from "../../assets/shapes/PrimaryHeroPattern.vue";
import SecoundaryHeroPattern from "../../assets/shapes/SecoundaryHeroPattern.vue";
import test from "../../assets/shapes/test.vue";
import ServiceCard from "./ServiceCard.vue";
</script>
