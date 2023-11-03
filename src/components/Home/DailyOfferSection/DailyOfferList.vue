<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import DailyOfferItem from "./DailyOfferItem.vue";

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
  <div class="md:hidden">
    <v-sheet
      class="mx-auto h-fit"
      elevation="0"
      max-width="800"
      color="#F0F0F8"
    >
      <v-slide-group class="">
        <v-slide-group-item v-for="meal in meals" :key="meal.id">
          <DailyOfferItem :meal="meal" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
