<script setup>
import DailyOfferItem from "./DailyOfferItem.vue";
defineProps({
  meals: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <v-sheet class="mx-auto h-fit" elevation="0" max-width="736" color="#F0F0F8">
    <v-slide-group>
      <v-slide-group-item v-for="meal in meals" :key="meal.id">
        <DailyOfferItem :meal="meal" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
