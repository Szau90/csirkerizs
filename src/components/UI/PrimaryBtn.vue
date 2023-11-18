<script setup>
import ArrowRight from "../../assets/icons/ArrowRight.vue";
import BlackCartIcon from "../../assets/icons/BlackCartIcon.vue"

defineProps({
  title: {
    type: String,
    required: true,
    default: "__NO_TITLE",
  },
  fillIcon: {
    type: String,
    default: '#000000'
  },
  isCartBtn: {
    type: Boolean,
    default: false
  }
  
});


</script>

<template>
  <button
    class="text-[16px] text-black rounded-full flex flex-row justify-around items-center py-4 shadow-lg"
    >
    {{ title }}
    <BlackCartIcon v-if="isCartBtn"/>
    <ArrowRight v-else :fill="fillIcon" />
  </button>
</template>
