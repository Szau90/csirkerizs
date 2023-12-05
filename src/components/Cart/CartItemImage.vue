<script setup>
defineProps(["image"]);
</script>

<template>
  <section cols="2" class="flex justify-center items-center">
    <img :src="image" class="w-[120px] md:w-[160px]" />
  </section>
</template>
