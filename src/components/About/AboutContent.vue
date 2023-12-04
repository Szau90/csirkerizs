<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/etelrendeles')
}

</script>

<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start lg:pl-28 2xl:pl-32"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Kik vagyunk?
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <p
      class="flex-col gap-5 text-content-md md:text-[13px] lg:text-content 2xl:text-[16px] text-textColor md:text-start w-[22.5rem] md:w-[350px] lg:w-[390px] xl:w-[450px] 2xl:w-[524px] flex shrink"
    >
    <h1 class="font-semibold">
        Csirkerizs.hu A vákuumba zárt frissesség
    </h1>
    <p>
      Ez a vállalkozás olyan szellemiségben született, amelyben az egészséges,
      fitt életmód alapját képező tudatos táplálkozást igyekszünk úgy
      hozzáigazítani felgyorsult világunk igényeihez, hogy azoknak a számára is
      elérhető legyen, akiknek nincs idejük a mindennapos főzésre.
    </p>
    <p>
    Csapatunkban étteremvezetők, mesterszakácsok, sokéves testépítő és fitness múlttal
    rendelkező sportolók (pl. Bodó Imi) együtt vesznek részt az alapanyagok és a felhasznált
    modern technológiák kiválasztásában, valamint a menük megalkotásában. 
    </p>
    <strong>
        Jó étvágyat kívánunk!
    </strong>
    <p>Csirkerizs Csapat :)</p>
    </p>
    <PrimaryBtn @click="handleClick" :title="'étlapunk'" class="w-56 xl:mt-8" />
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
