<script setup>
import CheckIcon from "../../assets/icons/CheckIcon.vue";

defineEmits(["toggle"]);
defineProps({
  category: {
    type: String,
  },
  isSelected: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="flex flex-row md:max-xl:min-w-[360px] xl:w-[500px] items-center gap-3"
  >
    <div
      @click="$emit('toggle')"
      :value="category"
      class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
    >
      <CheckIcon v-if="isSelected" class="mt-1 ml-1" />
    </div>
    <p
      class="w-[280px] flex items-center text-textColor md:max-2xl:text-content-md"
    >
      {{ category }}
    </p>
  </div>
</template>
