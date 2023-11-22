<script setup>
import AboutContent from "../components/About/AboutContent.vue";
import AboutImage from "../components/About/AboutImage.vue";
import TheTechnology from "../components/About/TheTechnology.vue";

</script>

<template>
  <div class="container h-fit mx-auto px-2 flex flex-col md:flex-row">
    <AboutContent />
    <AboutImage />
  </div>
  <div
    class="container mx-auto flex flex-col md:flex-row mt-24 md:mt-12 items-center"
  >
    <TheTechnology />
  </div>
</template>
