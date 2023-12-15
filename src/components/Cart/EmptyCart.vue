<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToMeals = () => {
  router.push("/etelrendeles");
};
const goToShop = () => {
  router.push("/shop");
};
</script>

<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start lg:pl-28 2xl:pl-32"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      A kosarad üres!
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <p
      class="text-content-md  md:text-[13px] lg:text-content 2xl:text-[16px] text-textColor w-[22rem] md:w-[350px] lg:w-[390px] xl:w-[450px] 2xl:w-[524px]"
    >
      Az alábbi oldalakon tudsz terméket hozzáadni
    </p>
    <PrimaryBtn
      @click="goToMeals"
      :title="'étlapunk'"
      :fill-icon="'#fff'"
      class="w-56 xl:mt-8 bg-primaryColor text-white"
    />
    <PrimaryBtn @click="goToShop" :title="'shop'" class="w-56 xl:mt-8" />
  </div>
  <div
    class="flex justify-end items-end md:order-2 w-[130%] md:w-[27.9rem] xl:w-[65%]"
  >
    <img
      src="@/assets/shapes/HomePattern.svg"
      class="md:absolute xl:static w-full md:w-[35rem] lg:max-xl:w-[40rem] xl:w-full -mt-[39.5%] md:-mt-[22rem] -mr-[13%] md:top-40 lg:top-24 xl:-mt-[58%] 2xl:-mt-[64%] md:-mr-[9rem] lg:-mr-[22%] xl:-mr-[13%] rotate-[11deg] md:rotate-2"
    />
  </div>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
