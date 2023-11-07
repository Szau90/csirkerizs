<script setup>
import PrimaryBtn from "../../UI/PrimaryBtn.vue";
</script>

<template>
  <div class="container mx-auto flex flex-col md:flex-row mt-24 md:mt-12 items-center">
    <div class="md:w-1/2">
      <img
        src="../../../assets/shapes/BodóImi.svg"
        alt="Bodó Imre with some csirkerizs.hu products"
        width="740"
        height="740"
      />
    </div>
    <div
      class="w-full mt-4 md:mt-0 md:w-1/2 flex flex-col gap-3 lg:gap-6 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[24rem] xl:w-[30rem]"
      >
        A vákuumba zárt frissesség Bodó Imre ajánlásával
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
      <p
        class="text-content  md:text-[15px] md:text-start lg:text-content text-textColor w-20rem md:w-[24rem] xl:w-[37rem]"
      >
        Ez a vállalkozás olyan szellemiségben született, amelyben az egészséges,
        fitt életmód alapját képező tudatos táplálkozást igyekszünk úgy
        hozzáigazítani felgyorsult világunk igényeihez…
      </p>
      <PrimaryBtn title="ismerj meg!" class="w-56" />
    </div>
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