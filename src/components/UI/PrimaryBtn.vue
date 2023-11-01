<script setup>
import { defineProps, ref } from "vue";
import ArrowRight from "../../assets/icons/ArrowRight.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "__NO_TITLE",
  },
  width: {
    type: String,
    required: false,
    default: '223'
  }
});

const btnWidth = ref(props.width)
</script>

<template>
  <button
    class="text-[16px] text-black bg-inherit rounded-full flex flex-row justify-around items-center py-4 shadow-lg"
    >
    {{ title }}
    <ArrowRight />
  </button>
</template>
