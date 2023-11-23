<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
</script>

<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[30%] justify-center items-center md:items-start lg:pl-24 2xl:pl-32"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Szállítási területek
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <div
      class="flex-col gap-5 text-content md:text-content-sm lg:text-content-md xl:text-content text-textColor md:text-start w-[22.5rem] md:w-[18.75rem] lg:w-[20.625rem] xl:w-[26.312rem] flex shrink"
    >
      <h1 class="font-semibold">JÓ TUDNI</h1>
      <p>
        Nem találod a legközelebbi edzőtermedet, vagy nem szállítunk a
        környékedre? Javasolj Te is olyan edzőtermet, ahova el tudod képzelni a
        Csirkerizs hűtőjét, telis-tele fitness étel finomságokkal! Írj nekünk a
        kerdes@csirkerizs.hu email címre, ha van javaslatod.
      </p>

      <strong> Keress rá! </strong>
    </div>
    <v-form>
      <v-text-field
        variant="underlined"
        density="compact"
        class="w-[18.75rem] lg:w-[20.625rem] xl:w-[26.312rem]"
      >
        <template #label>
          <p class="text-content-sm lg:text-content-md xl:text-content">
            Add meg településed nevét vagy irányítószámát
          </p>
        </template>
      </v-text-field>
      <PrimaryBtn :title="'keresés'" class="w-56 xl:mt-8" />
    </v-form>
  </div>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  h1 {
    text-align: center;
  }
  strong {
    text-align: center;
  }
  button {
    margin: 0 auto;
  }
}
</style>
