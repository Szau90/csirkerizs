<script setup>
import { useMealsStore } from "@/stores/meals";
import { computed } from "vue";
import DailyOfferItem from './DailyOfferItem.vue'

const store = useMealsStore()

const meals = computed(()=> store.meals)


</script>

<template>
<DailyOfferItem  v-for="meal in meals" :meal="meal" />

</template>
