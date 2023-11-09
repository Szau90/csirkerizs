<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import DailyOfferItem from "./DailyOfferItem.vue";
import MealSlider from "./MealSlider.vue";
const store = useMealsStore();

const meals = computed(() => store.meals);

</script>

<template>
  <section class="container max-w-[1265px] mx-auto  mt-20 md:mt-36">
    <h1 class="text-title text-center w-[22rem] mx-auto">
      Napi egészséges ajánlataink
    </h1>
    <div
      class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
    />
    <div id="item" class="hidden mx-auto w-full xl:flex flex-row items-center justify-center">
      <template v-for="meal in meals" :key="meal.id">
        <DailyOfferItem v-if="meal.isDailyOffer" :meal="meal"  />
      </template>
    </div>
    <div class="xl:hidden">
      <MealSlider :meals="meals" />
    </div>
    
  </section>
</template>

