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
  <v-col v-for="(item, index) in items" :key="index" >
    <h1
      v-if="findFirstIndex(items, item.value) === index"
      class="flex flex-col md:flex-row md:w-full md:max-lg:mx-auto md:mt-20 md:mb-14 items-center text-title-xl md:text-title gap-2"
    >
      <div class="hidden md:block w-1 h-10 bg-primaryColor rounded-full" />
      {{ item.value }}
      <div class="md:hidden h-1 w-10 mb-5 bg-primaryColor rounded-full" />
    </h1>

    <main class="relative flex flex-col lg:flex-row items-start">
      <img :src="item.raw.image" aspect-ratio="1.7778" contain width="380" height="380" class="z-10  xl:ml-0 w-[246px] md:w-[380px] lg:w-[280px] lg:max-xl:mt-10 xl:w-[380px] 2xl:w-[380px]" >
      <div
        class="lg:w-[945px] lg:-ml-[130px] xl:-ml-[190px] flex items-center justify-end shadow-lg rounded-[30px]"
      >
        <FoodItem
          :id="item.raw.id"
          :title="item.raw.title"
          :description="item.raw.description"
          :index="index"
          :energy="item.raw.energy"
          :allergens="item.raw.allergens"
          :price="item.raw.price"
          :image="item.raw.image"
        />
      </div>
    </main>
  </v-col>
</template>

<style scoped>
@media screen and (max-width: 1279px) {
 main {
  align-items: center;
 }
}
@media screen and (max-width: 767px) {
 h1{
  text-align: center;
 }
}
</style>