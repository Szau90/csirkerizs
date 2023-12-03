<script setup>
import ResellerAdvantages from "../components/ResellerPage/ResellerAdvantages.vue";
import TheContent from "../components/ResellerPage/TheContent.vue";
import TheImage from "../components/ResellerPage/TheImage.vue";
</script>

<template>
  <div class="container h-fit mx-auto px-2 flex flex-col md:flex-row">
    <TheContent />
    <TheImage />
  </div>
  <ResellerAdvantages/>
</template>
