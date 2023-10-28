<template>


  <div
    class="container mx-auto flex flex-row flex-auto items-center justify-center  mt-2 px-2 "
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
