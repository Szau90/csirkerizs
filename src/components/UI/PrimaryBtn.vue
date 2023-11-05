<script setup>
import ArrowRight from "../../assets/icons/ArrowRight.vue";
defineProps({
  title: {
    type: String,
    required: true,
    default: "__NO_TITLE",
  },
  
});


</script>

<template>
  <button
    class="text-[16px] text-black bg-secoundaryColor rounded-full flex flex-row justify-around items-center py-4 shadow-lg"
    >
    {{ title }}
    <ArrowRight />
  </button>
</template>
