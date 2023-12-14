<script setup>
import { filename } from 'pathe/utils' 
defineProps(["image"]);

const glob = import.meta.glob('@/assets/images/*.png', { eager: true })

const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template>
  <section cols="2" class="flex justify-center items-center">
    <img :src="images[image]" class="w-[120px] md:w-[160px]" />
  </section>
</template>
