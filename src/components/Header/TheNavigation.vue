<template>
  <nav class="flex gap-[1.875rem] text-[20px]">
    <MenuIcon />
    <div class="w-[1px] h-12 bg-[#707070]"></div>
    <RouterLink to="/" class="font-semibold"> home</RouterLink>
    <RouterLink to="/etelrendeles">ételrendelés</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import MenuIcon from '../../assets/icons/MenuIcon.vue';
</script>

