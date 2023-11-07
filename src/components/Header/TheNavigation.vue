<script setup>
import { RouterLink } from "vue-router";
import MenuIcon from "../../assets/icons/MenuIcon.vue";
import { ref } from "vue";

const drawer = ref(null)
</script>

<template>
  <nav class="hidden md:flex items-center gap-3 lg:gap-[1.875rem] text-[20px]">
    <MenuIcon class="cursor-pointer" @click.stop="drawer = !drawer"/>
    <div class="w-[1px] h-12 bg-[#707070]"></div>
    <RouterLink to="/" class="font-semibold"> home</RouterLink>
    <RouterLink to="/etelrendeles">ételrendelés</RouterLink>
  </nav>
</template>
