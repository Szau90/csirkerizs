<script setup>
import TheLogo from "../UI/TheLogo.vue";
import HeaderActions from "./HeaderActions.vue";
import { RouterLink } from "vue-router";
import MenuIcon from "../../assets/icons/MenuIcon.vue";
</script>

<template>
  <div
    class="container mx-auto flex flex-row flex-auto items-center justify-center mt-7 px-2 overflow-hidden"
  >
    <nav
      class="hidden md:flex items-center gap-3 lg:gap-[1.875rem] text-[20px]"
    >
      <MenuIcon class="cursor-pointer" @click.stop="$emit('toggle')" />
      <div class="w-[1px] h-12 bg-[#707070]"></div>
      <RouterLink to="/" class="font-semibold"> home</RouterLink>
      <RouterLink to="/etelrendeles">ételrendelés</RouterLink>
    </nav>
    <TheLogo />
    <HeaderActions />
  </div>
</template>
