<script setup>
import PrimaryBtn from '../UI/PrimaryBtn.vue';
</script>

<template>
     <h1 class="md:text-center xl:text-start text-title">Ételrendelés</h1>
        <div
          class="flex w-36 h-[0.312rem] md:mx-auto xl:mx-0 bg-primaryColor rounded-full mt-4"
        />
        <PrimaryBtn
          title="Allergén táblázat"
          class="w-56 bg-primaryColor text-white mt-10 md:mx-auto xl:mx-0"
          :fill-icon="'#ffffff'"
        />
        <h2 class="mt-10 hidden xl:block">Kategóriák</h2>
</template>

