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
  <section class="flex flex-col gap-5 ">
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Csatlakozz te is a Csirkerizs VIP ügyfeleihez!
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <p class="font-semibold text-textColor ">Milyen előnyöket nyújt a VIP tagság?</p>
    <ol v-for="(advantage, index) in advantages" :key="index" >
      <li class="flex items-center text-[15px] leading-5">
        <span class="min-w-[2rem] text-primaryColor font-semibold">{{ index + 1 }}</span>
        <span class="min-w-[26rem] max-w-[26.5rem] text-textColor "> {{ advantage }} </span>
      </li>
    </ol>
  </section>
</template>
