<script setup>
import { ref } from "vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";

const advantages = ref([
  "Bővül a kínálatod a mozgás mellett, az egészséges ételek felé",
  "Hivogatóbb lesz a termed a Vendégek felé",
  "Bodó Imi szemináriumot tartunk Nálad, kóstoltatással egybekötve - ingyenes!",
  "Plakátokat helyezünk el Nálad a szemináriumról, meg is hirdetjük - ingyenes!",
  "A Csirkerizs vitrines hűtőt mi helyezzük el Nálad - ingyenes!",
  "Heti szinten egy-két alkalommal feltöltjük a hűtőd rendelésed alapján, hogy mindig friss és finom ételeket találjanak az edzőterembe járók Nálad, sőt aktualizáljuk az étlapot is.",
  "Részletes tápérték táblázatot küldünk.",
  "Facebook és Instagram oldalunkon reklámozzuk az edzőtermedet - ingyenes!",
]);
</script>

<template>
  <section
    class="flex flex-col md:flex-row md:mt-20 lg:mt-32 xl:mt-52 2xl:w-[96rem] mx-auto px-2 items-center"
  >
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/BodóImi.svg"
        alt="Bodó Imre with some csirkerizs.hu products"
        width="740"
        height="740"
      />
      <div class="flex flex-col mt-10 gap-5 justify-center items-center">
        <p>Jelentkezz az alábbi elérhetőségeken:</p>
        <p>+36 70 601 8179 Bodó Imre</p>
        <p>+36 30 204 3978</p>
      </div>
    </div>
    <div
      class="w-full lg:max-xl:px-4 mt-4 md:mt-0 md:w-1/2 2xl:w-[40.875rem] flex flex-col gap-3 lg:gap-5 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[24rem] xl:w-[40rem]"
      >
        Válaszd Te is a Csirkerizs kiváló termékeit edzőtermedbe!
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
      <div
        class="flex flex-col gap-4 text-content-md md:text-content-sm md:text-start lg:text-content-md xl:text-content text-textColor w-20rem md:w-[22rem] lg:w-full xl:w-[37rem] 2xl:w-[40.875rem]"
      >
        <p>
          ...igénybe veheted azon szolgáltatásunkat, hogy kihelyezve egy hűtőt
          termedbe, a Vendégeid vásárolhatják a Csirkerizs termékeit.
        </p>
        <h1
          class="flex flex-col md:flex-row md:w-full md:max-lg:mx-auto items-center text-title-sm lg:text-title gap-2 text-black"
        >
          <div class="hidden md:block w-1 h-10 bg-primaryColor rounded-full" />
          Ez jó neked mert
          <div class="md:hidden h-1 w-10 mb-5 bg-primaryColor rounded-full" />
        </h1>
        <div
          class="flex flex-col  gap-5 text-content-md md:text-content-sm lg:text-content-md xl:text-content text-textColor md:text-start  md:w-[350px] lg:w-[490px] xl:w-[550px] 2xl:w-[824px]"
        >
          <ul v-for="(advantage, index) in advantages" :key="index">
            <li class="flex flex-row items-center gap-4">
              <div
                class="hidden lg:flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
              >
                <CheckIcon class="mt-1 ml-1" />
              </div>
              <p
                class="md:max-w-[400px] lg:max-w-[410px] xl:max-w-[450px] 2xl:max-w-[588px]"
              >
                {{ advantage }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  section {
    margin-top: 2rem;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
    width: 350px;
  }

 
}
</style>
