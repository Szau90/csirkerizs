<script setup>
import TheLogo from "../UI/TheLogo.vue";
import { RouterLink } from "vue-router";
import FacebookIcon from "../../assets/icons/FacebookIcon.vue";
import TwitterIcon from "../../assets/icons/TwitterIcon.vue";
import SocialIconWrapper from "../UI/SocialIconWrapper.vue";
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
</script>

<template>
  <div class="container h-[34.375rem] mx-auto items-center mt-12">
    <div class="w-full flex items-center">
      <div class="flex w-[40.843rem] mx-5 lg:mx-10 h-px bg-textColor" />
      <TheLogo class="" />
      <div class="flex w-[40.843rem] mx-5 lg:mx-10 h-px bg-textColor" />
    </div>
    <nav
      class="flex flex-row flex-wrap mt-7 md:max-lg:w-[31.25rem] md:max-lg:mx-auto gap-5 lg:gap-8 xl:gap-[50px] justify-center text-textColor text-[14px] sm:text-[15px] leading-5"
    >
      <RouterLink :to="'/'">Home</RouterLink>
      <RouterLink :to="'/etelrendeles'">Ételrendelés</RouterLink>
      <RouterLink :to="'/vip'">Vip</RouterLink>
      <RouterLink :to="'/rolunk'">Kik vagyunk?</RouterLink>
      <RouterLink :to="'/technologia'">Technológia</RouterLink>
      <RouterLink :to="'/szallitasi-terulet'">Szállítási területek</RouterLink>
      <RouterLink :to="'/viszonteladoknak'">Viszonteladóknak</RouterLink>
      <RouterLink :to="'/galeria'">Galéria</RouterLink>
    </nav>
    <div class="flex flex-row w-full gap-9 mt-9 justify-center">
      <SocialIconWrapper>
        <a href="https://www.facebook.com/csirkerizs.hu">
          <FacebookIcon />
        </a>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <a href="https://www.instagram.com/csirkerizshu/">
          <InstagramIcon/>
        </a>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <TwitterIcon />
      </SocialIconWrapper>
    </div>
    <div class="hidden sm:block h-px bg-lightBorder w-full mt-10" />
    <div
      class="text-textColor w-full text-[14px] sm:text-[15px] flex flex-row gap-1 sm:gap-32 md:gap-16 lg:gap-44 justify-around md:justify-center mt-8"
    >
      <div class="flex flex-col gap-7">
        <p>Kapcsolat</p>

        <p>
          <span class="hidden sm:inline-block">Ügyfélszolgálat:</span> +36 1 232
          1171
        </p>

        <p>
          <span class="hidden sm:inline-block">E-mail:</span>
          kerdes@csirkerizs.hu
        </p>
      </div>

      <div class="flex flex-col gap-7">
        <p>További információk</p>

        <router-link to="/adatvedelmi-szabalyzat"
          >Adatvédelmi szabályzat</router-link
        >
        <router-link to="/felhasznalasi-feltetelek"
          >Felhasználási feltételek</router-link
        >
      </div>

      <div class="hidden md:flex flex-col gap-7">
        <p>További információk</p>

        <router-link to="/adatvedelmi-szabalyzat"
          >Adatvédelmi szabályzat</router-link
        >
        <router-link to="/felhasznalasi-feltetelek"
          >Felhasználási feltételek</router-link
        >
      </div>
    </div>
  </div>
</template>
