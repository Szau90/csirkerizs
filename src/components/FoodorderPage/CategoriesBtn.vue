<script setup>
import ArrowRightVue from "../../assets/icons/ArrowRight.vue";
defineProps({
  properties: {
    type: Object,
  },
});
</script>

<template>
  <v-btn
    color="#F0F0F8"
    rounded
    v-bind="properties"
    class="mt-10"
    width="224"
    height="56"
  >
    <template #default>
      <p class="capitalize mr-16">Kategóriák</p>
    </template>
    <template #append>
      <ArrowRightVue />
    </template>
  </v-btn>
</template>
