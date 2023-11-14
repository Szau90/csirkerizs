<script setup>
import FoodItem from "./FoodItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

//find the first element's index of every category in the array
const findFirstIndex = (items, category) => {
  let firstIndex = 0;

  while (firstIndex <= items.length) {
    if (items[firstIndex].raw.category === category) {
      return firstIndex;
    }

    firstIndex += 1;
  }

  return -1;
};
</script>

<template>
  <v-col v-for="(item, index) in items" :key="index">
    <h1
      v-if="findFirstIndex(items, item.value) === index"
      class="flex flex-row w-full mt-20 mb-14 items-center text-title gap-2"
    >
      <div class="w-1 h-10 bg-primaryColor rounded-full" />
      {{ item.value }}
    </h1>

    <main class="relative flex flex-row items-start">
      <v-img :src="item.raw.image" contain width="380" height="380"></v-img>
      <div
        class="w-[945px] -ml-[190px] flex items-center justify-end shadow-lg rounded-[30px]"
      >
        <FoodItem
          :id="item.raw.id"
          :title="item.raw.title"
          :description="item.raw.description"
          :index="index"
          :energy="item.raw.energy"
          :allergens="item.raw.allergens"
          :price="item.raw.price"
        />
      </div>
    </main>
  </v-col>
</template>
