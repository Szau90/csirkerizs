<script setup>
import TheLogo from "../UI/TheLogo.vue";
import { RouterLink } from "vue-router";
import FacebookIcon from "../../assets/icons/FacebookIcon.vue";
import Instagramicon from "../../assets/icons/Instagramicon.vue";
import TwitterIcon from "../../assets/icons/TwitterIcon.vue";
</script>

<template>
  <div class="container h-[34.375rem] mx-auto items-center mt-12">
    <div class="w-full flex items-center">
      <div class="flex w-[40.843rem] mx-5 lg:mx-10 h-px bg-textColor" />
      <TheLogo class="" />
      <div class="flex w-[40.843rem] mx-5 lg:mx-10 h-px bg-textColor" />
    </div>
    <nav
      class="flex flex-row flex-wrap mt-7  gap-5 lg:gap-8 xl:gap-[50px] justify-center text-textColor text-[14px] sm:text-[15px] leading-5"
    >
      <RouterLink :to="'/'">Home</RouterLink>
      <RouterLink :to="'/etelrendeles'">Ételrendelés</RouterLink>
      <RouterLink :to="'/'">Vip</RouterLink>
      <RouterLink :to="'/'">Kik vagyunk?</RouterLink>
      <RouterLink :to="'/'">Technológia</RouterLink>
      <RouterLink :to="'/'">Szállítási területek</RouterLink>
      <RouterLink :to="'/'">Viszonteladóknak</RouterLink>
      <RouterLink :to="'/'">Galéria</RouterLink>
    </nav>
    <div class="flex flex-row w-full gap-9 mt-9 justify-center">
      <FacebookIcon />
      <Instagramicon />
      <TwitterIcon />
    </div>
    <div class="hidden sm:block h-px bg-lightBorder w-full mt-10" />
    <div class="text-textColor text-[14px] sm:text-[15px] flex flex-row gap-10 sm:gap-32 md:gap-16 lg:gap-44 justify-center mt-8">
      <div class="flex flex-col gap-7">
        <p>Kapcsolat</p>

        <p><span class="hidden sm:inline-block">Ügyfélszolgálat:</span>  +36 1 232 1171</p>

        <p><span class="hidden sm:inline-block">E-mail:</span> kerdes@csirkerizs.hu</p>
      </div>

      <div class="flex flex-col gap-7">
        <p>További információk</p>

        <p>Adatvédelmi szabályzat</p>

        <p>Felhasználási feltételek</p>
      </div>

      <div class="hidden md:flex flex-col gap-7">
        <p>További információk</p>

        <p>Adatvédelmi szabályzat</p>

        <p>Felhasználási feltételek</p>
      </div>
    </div>
  </div>
</template>
