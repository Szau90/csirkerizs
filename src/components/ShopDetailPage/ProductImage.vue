<script setup>
defineProps(["id", "title", "image", "gallery"]);
</script>

<template>
  <v-sheet
    class="w-[400px] lg:w-[490px]"
    color="#F0F0F8"
    elevation="4"
    rounded="xl"
  >
    <v-img :src="'../' + image" :alt="title" class="mx-auto lg:w-[437px]" />
    <div class="flex flex-row w-full px-3">
      <template v-for="image in gallery" :key="id">
        <v-img :src="'../' + image" :alt="title" />
      </template>
    </div>
  </v-sheet>
</template>
