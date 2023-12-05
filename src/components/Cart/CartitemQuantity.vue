<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "../../stores/cart";
import PrimaryBtn from "../../components/UI/PrimaryBtn.vue";
import { storeToRefs } from "pinia";

defineProps(["isMeal", "quantity", "item"]);

const store = useCartStore();

const { isUpdating } = storeToRefs(store);

const { incrementQuantity, decrementQuantity, openUpdateModal } = store;
</script>

<template>
  <section
    v-if="isMeal"
    class="flex flex-col md:w-[220px] text-content-sm md:text-content justify-center items-center"
  >
    <p class="hidden md:block">adagok és időpontok</p>
    <PrimaryBtn
      :title="'szerkesztés'"
      class="w-28 h-11 md:h-14 md:w-40 lg:w-44 text-content-sm md:text-content"
      @click="openUpdateModal(item.id)"
    />
  </section>
  <section
    v-else
    class="flex flex-col md:w-[220px] justify-center items-center text-content-md md:text-content"
  >
    <p class="hidden md:block">mennyiség</p>
    <div
      class="w-28 h-11 md:w-36 lg:w-44 flex justify-between items-center md:h-14 px-5 rounded-full shadow-xl"
    >
      <button @click="decrementQuantity(item)">-</button
      ><span>{{ quantity }} db</span
      ><button @click="incrementQuantity(item)">+</button>
    </div>
  </section>
</template>
