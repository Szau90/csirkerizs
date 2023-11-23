<script setup>
import JoinVip from "../components/Vip/VipAdvantages.vue";
import VipSignUp from "../components/Vip/VipSignUp.vue";
</script>

<template>
  <main class="flex flex-col lg:flex-row 2xl:w-[1536px] justify-around px-2 mx-auto lg:mt-36">
    <JoinVip />
    <VipSignUp />
  </main>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  main {
    margin-top: 2rem;
  }
}
</style>