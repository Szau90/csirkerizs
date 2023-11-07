<script setup>
import PrimaryBtn from "../../UI/PrimaryBtn.vue";
</script>

<template>
  <div
    class="flex flex-col  order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start  lg:pl-28 2xl:pl-32  "
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title  w-[18rem] md:w-full  md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Egészséges fitness ételek könnyen, gyorsan az otthonodba szállítva…
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full"/>
    <p
      class="text-content md:text-[15px] lg:text-content 2xl:text-[16px] text-textColor  md:text-start w-[22.5rem] md:w-[390px] lg:w-[390px] xl:w-[450px] 2xl:w-[524px] flex shrink"
    >
      Edzz, dolgozz, pihenj és a fitt ételek készítését bízd ránk! Mesterséges
      színezék, tartósítószer mentes ételek profiktól Neked
    </p>
    <PrimaryBtn :title="'étlapunk'" class="w-56  xl:mt-8" />
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