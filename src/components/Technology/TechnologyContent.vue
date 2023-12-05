<script setup>
import { ref } from "vue";
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/etelrendeles')
}

const advantages = ref([
    'Mesterséges színezék és tartósítószer mentes ételek',
    'Fehérje / vitamin tartalom maximális megtartása ',
    'Tartósság (több hetes szavatossági idő)',
    'Higiénia',
    'Állandó frissesség (nincs kiszáradt étel)'
])
</script>

<template>
  <div
    class="flex  flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[27.5%] justify-center items-center md:items-start lg:pl-16 xl:pl-0 2xl:pl-20"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
    Technológiánk
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <p
      class="flex-col gap-5 lg:gap-0 text-content-md md:text-content-sm lg:text-content-md  xl:text-content text-textColor md:text-start w-[22.5rem] md:w-[350px] lg:w-[390px] xl:w-[480px] 2xl:w-[524px] flex shrink"
    >
    <h1 class="font-semibold">
        JÓ TUDNI
    </h1>
    <p class="lg:mt-5">
        Röviden a 3 technológia előnye: (vákuum tasak, sous - vide eljárás, gyorshűtés)
    </p>
    <ul v-for="(advantage, index) in advantages" :key="index">
          <li class="flex flex-row items-center">
              <div
                class="hidden lg:flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
              >
                <CheckIcon class="mt-1 ml-1" />
              </div>
              <p >
                {{ advantage }}
              </p>
            </li>
    </ul>
    <p>
        A weboldal pontos tápértékszámolást biztosít a megrendelt ételek mellé,
         így nyomon követheted a napi kalória, fehérje, szénhidrát beviteled!
    </p>
    <strong class="lg:mt-5">
        Jó étvágyat kívánunk!
    </strong>
    
    </p>
    <PrimaryBtn @click="handleClick" :title="'étlapunk'" class="w-56 xl:mt-8" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  h1 {
    text-align: center;
  }
strong {
    text-align: center;
}
}
</style>
