<script setup>
import { ref } from "vue";
import PrimaryBtn from "../UI/PrimaryBtn.vue";

const checkbox = ref(false)
</script>

<template>
  <section class="flex flex-col gap-5 2xl:gap-10">
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Jelentkezz VIP ügyfélnek!
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />

    <form>
      <v-text-field
        label="Név"
        variant="underlined"
        density="compact"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        variant="underlined"
        density="compact"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :label="'Elolvastam és megértettem az ÁSZF feltételeit'"
      ></v-checkbox>
      <PrimaryBtn  title="jelentkezem" class="w-56"/>
    </form>
  </section>
</template>
