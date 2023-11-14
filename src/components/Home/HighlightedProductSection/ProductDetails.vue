<script setup>
import PrimaryBtn from "../../UI/PrimaryBtn.vue";
defineProps({
  meal: {
    type: Object,
  },
});
</script>
<template>
  <section class="flex flex-col justify-center items-center">
    <div
      class="flex flex-col items-center justify-end w-[23rem] sm:w-[18rem] xl:w-[24.6rem] bg-inherit"
    >
      <div class="flex flex-col gap-5 items-center md:items-start">
        <h1 class="text-title-md xl:text-title">{{ meal.title }}</h1>
        <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
        <p
          class="text-textColor w-[17.687rem] min-h-[4.25rem] md:min-h-[5.625rem]  text-content-md  md:text-content"
        >
          {{ meal.description }}
        </p>
      </div>
      <ul
        class="flex flex-col w-full imt-2 text-textColor text-content-sm md:text-content justify-center items-center"
      >
        <li
          v-for="(item, key) in meal.energy"
          :key="key"
          class="flex justify-between py-1.5 w-[17.687rem] sm:w-[16rem] md:w-[18rem] xl:w-full last:border-b-0"
        >
          <span>{{ key }}</span
          ><span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-row w-[18.875rem]  xl:w-full items-center mt-5">
      <div
      id="price"
        class="w-40 h-11 xl:h-14 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
      >
        {{ meal.price }}
      </div>
      <PrimaryBtn
        id="button"
        title="rendeld meg!"
        class="w-40 xl:w-[14.437rem] h-11 xl:h-14 rounded-l-none  md:text-content bg-secoundaryColor"
      />
    </div>
  </section>
</template>


<style scoped>
@media screen and (max-width: 767px) {
  #price {
    font-size: 13px;
  }
  #button {
    font-size: 13px;
  }
}
li {
    border-bottom: 1px solid #D9D9E5;
    padding: 0.375rem 0;
  }
</style>