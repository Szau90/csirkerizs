<script setup>
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import DailyOfferItem from "./DailyOfferItem.vue";

const store = useMealsStore();

const meals = computed(() => store.meals);
</script>

<template>
  <section class="container max-w-[1290px] mx-auto">
    <h1 class="text-title text-center w-[22rem] mx-auto mt-36">
      Napi egészséges ajánlataink
    </h1>
    <div
      class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
    />

    <v-sheet class="d-flex h-fit" elevation="0" max-width="" color="#F0F0F8">
      <v-slide-group>
        <v-slide-group-item v-for="meal in meals" :key="meal.id">
          <DailyOfferItem :meal="meal" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </section>
</template>
