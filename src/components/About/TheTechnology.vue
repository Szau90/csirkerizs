<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue"
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/technologia')
}
</script>
<template>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/BodóImi.svg"
        alt="Bodó Imre with some csirkerizs.hu products"
        width="740"
        height="740"
      />
    </div>
    <div
      class="w-full lg:max-xl:px-4 mt-4 md:mt-0 md:w-1/2 flex flex-col gap-3 lg:gap-6 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[24rem] xl:w-[30rem]"
      >
        Gasztronómia és csúcstechnológia…
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
      <div
        class="flex flex-col gap-1 text-content-md md:text-[13px] md:text-start lg:text-content text-textColor w-20rem md:w-[22rem] lg:w-full xl:w-[37rem]"
      >
       <p>
        Több száz nm-es, csúcstechnológiával felszerelt konyhával rendelkezünk,
        profi futárcéggel állunk szerződésben, akiknél a pontosság és a megbízhatóság elsődleges.
        Segítségükkel az ország jelentős részét le tudjuk fedni kiszállításainkkal.
       </p>
       <p>
        Olyan modern technológiákat használunk, mind a főzést/sütést, csomagolást, hűtést, tárolást
        illetően, amelyek rendkívül ritkának számítanak. Ezeknek köszönhetően ételeink nemcsak frissebbek,
        hanem tápanyagtartalom szempontjából is gazdagabbak maradnak.
       </p>
       <p>
        “A filozófiám alapja, hogy “cogito ergo sum” - gondolkodni és létezni viszont csak akkor tudok,
         ha jóllakott vagyok.” (Bud Spencer)
       </p>
      </div>
      <PrimaryBtn @click="handleClick" title="technológia" class="w-56" />
    </div>
  </section>
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