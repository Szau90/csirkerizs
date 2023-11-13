<script setup>
import { ref } from "vue";

import NextIcon from "../../assets/icons/NextIcon.vue";
import Previcon from "../../assets/icons/Previcon.vue";

defineProps({
    date: {
        type:Object
    }
})
</script>

<template>
  <div class="flex flex-col w-[5.5rem] items-center justify-center">
    <label for="date">{{ date.date }}</label>
    <div
      class="w-full h-10 flex flex-row items-center justify-between px-3 bg-white rounded-full"
    >
      <button
        @click.prevent="
          () => {
            if (date.quantity !== 0) {
              date.quantity--;
            }
          }
        "
      >
        <Previcon />
      </button>
      <input
        type="text"
        id="date"
        class="w-[14px] flex mx-auto outline-none"
        v-model="date.quantity"
      />
      <button
        @click.prevent="
          () => {
            date.quantity++;
          }
        "
      >
        <NextIcon />
      </button>
    </div>
  </div>
</template>
