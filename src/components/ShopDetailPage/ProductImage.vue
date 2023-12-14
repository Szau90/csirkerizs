<script setup>
import { filename } from 'pathe/utils' 
defineProps(["id", "title", "image", "gallery"]);
const glob = import.meta.glob('@/assets/images/*.png', { eager: true })

const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template>
  <v-sheet
    class="w-[400px] lg:w-[490px]"
    color="#F0F0F8"
    elevation="4"
    rounded="xl"
  >
    <v-img :src="images[image]" :alt="title" class="mx-auto lg:w-[437px]" />
    <div class="flex flex-row w-full px-3">
      <template v-for="image in gallery" :key="id">
        <v-img :src="images[image]" :alt="title" />
      </template>
    </div>
  </v-sheet>
</template>
