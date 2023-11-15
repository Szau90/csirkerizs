<script setup>
import NextIcon from "../../assets/icons/NextIcon.vue";
import Previcon from "../../assets/icons/Previcon.vue";

defineProps({
  order: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex flex-col w-[5.5rem] items-center justify-center">
    <label for="date">{{
      order.date.slice(0, 5).replace("-", ".").concat(".")
    }}</label>
    <div
      class="w-full h-10 flex flex-row items-center justify-between px-3 bg-white rounded-full"
    >
      <button
        @click.prevent="
          () => {
            if (order.quantity !== 0) {
              order.quantity--;
            }
          }
        "
      >
        <Previcon />
      </button>
      <input
        type="text"
        id="order"
        class="w-[14px] flex mx-auto outline-none text-center"
        v-model="order.quantity"
      />
      <button
        @click.prevent="
          () => {
            order.quantity++;
          }
        "
      >
        <NextIcon />
      </button>
    </div>
  </div>
</template>
