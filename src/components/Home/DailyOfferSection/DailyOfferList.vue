<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import DailyOfferItem from "./DailyOfferItem.vue";
import WishlistIcon from "../../../assets/icons/WhishlistIcon.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { defineComponent } from "vue";
defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});

const store = useMealsStore();

const meals = computed(() => store.meals);
</script>

<template>
  <h1 class="text-title text-center w-[22rem] mx-auto mt-36">
    Napi egészséges ajánlataink
  </h1>
  <div
    class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
  />

  <div class="w-full flex flex-row">
    <div class="flex flex-row w-full">
      <DailyOfferItem
        v-for="(meal, index) in meals"
        :key="meal.id"
        :index="index"
        :meal="meal"
      />
    </div>
  </div>
</template>
