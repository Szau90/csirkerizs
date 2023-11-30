<script setup>
defineProps(["image"]);
</script>

<template>
  <v-col cols="2" class="flex justify-center items-center">
    <img :src="image" class="w-[160px]" />
  </v-col>
</template>
