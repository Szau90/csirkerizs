<script setup>
import { ref } from "vue";

const advantages = ref([
  "Minden VIP ügyfelünknek 10% kedvezményt biztosítunk a 15.000 Ft feletti rendelések végösszegéből.",
  "Az ételkiszállítás minden héten szerdán és pénteken, 10-16 óra között történik saját futárral.",
  "Rendelésedet a kiszállítás előtti nap 12 óráig tudod leadni a www.csirkerizs.hu oldalon.",
  "Kiszállítás előtt futáraink minden esetben értesítenek a szállítás várható időpontjáról.",
  "A kedvezményes áru rendeléseknél egyelőre csak a készpénzes fizetés elérhető.",
  "Budapestre és környező településekre elérhető ez a szolgáltatás!",
]);
</script>

<template>
  <section class="flex flex-col gap-5 md:max-lg:mx-auto">
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[16rem] md:w-[20rem] md:text-start lg:w-[22rem] 2xl:w-[32.75rem]"
    >
      Csatlakozz te is a Csirkerizs VIP ügyfeleihez!
    </h1>
    <div
      id="border"
      class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full"
    />
    <p class="font-semibold text-textColor md:max-lg:text-center">
      Milyen előnyöket nyújt a VIP tagság?
    </p>
    <ol
      v-for="(advantage, index) in advantages"
      :key="index"
      class="flex flex-col items-center"
    >
      <li class="flex items-center text-content-md md:text-[15px] leading-5 gap-5">
        <div class="w-12 h-12 flex justify-center items-center rounded-full bg-transparent shadow-xl">
          <span
            class="text-primaryColor font-semibold"
            >{{ index + 1 }}</span
          >
        </div>
        <span
          class="max-w-[17rem] md:min-w-[26rem] lg:max-w-[26.5rem] text-textColor"
        >
          {{ advantage }}
        </span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  section {
    padding: 0 0.5rem;
  }
  h1 {
    text-align: center;
    margin: 0 auto;
  }
  #border {
    margin: 0 auto;
  }
}
</style>
