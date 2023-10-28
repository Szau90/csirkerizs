<template>
  <div
    class="flex flex-row  flex-auto items-center justify-center md:justify-between mt-2 md:px-6 lg:px-[10.41%]"
  >
    <TheNavigation />
    <TheLogo />
    <HeaderActions />
  </div>
</template>

<script setup>
import TheNavigation from "./TheNavigation.vue";
import TheLogo from "../UI/TheLogo.vue";
import HeaderActions from "./HeaderActions.vue";
</script>
