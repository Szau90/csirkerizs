<script setup>
import PrimaryBtn from '../../UI/PrimaryBtn.vue';
defineProps({
  meal: {
    type: Object,
  },
});
</script>
<template>
     <section class="p-4">
    <div
      class="flex flex-col items-center justify-end w-[24.812rem]  p-4 bg-inherit rounded-[30px] shadow-xl"
    >

      <div class="flex flex-col gap-2">
        <h1 class="text-title-xl text-center">{{ meal.title }}</h1>
        <p class="text-textColor text-center">
          {{ meal.description }}
        </p>
      </div>
      <ul class="flex flex-col items-center justify-center mt-2 text-textColor">
        <li
          v-for="(item, key) in meal.energy"
          :key="key"
          class="flex justify-between py-2 w-[22rem] border-b last:border-b-0"
        >
          <span>{{ key }}</span
          ><span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-row items-center mt-9">
      <div
        class="w-40 h-12 flex items-center justify-center border-2 rounded-tl-[30px] rounded-br-[30px] bg-primaryColor text-white"
      >
        {{ meal.price }}
      </div>
      <PrimaryBtn title="rendeld meg!" class="w-[14.437rem]" />
    </div>
  </section>
</template>