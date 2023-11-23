<script setup>
import SadSmileIcon from "../../assets/icons/SadSmileIcon.vue";
import SmileIcon from "../../assets/icons/SmileIcon.vue";
</script>

<template>
  <section
    class="flex flex-col md:flex-row md:mt-20 lg:mt-32 xl:mt-52 2xl:w-[96rem] mx-auto px-2"
  >
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/DeliverySecoundaryPattern.svg"
        alt="Bodó Imre with some csirkerizs.hu products"
        width="740"
        height="740"
      />
    </div>
    <div
      class="w-full lg:max-xl:px-4 mt-4 md:mt-0 md:w-1/2 2xl:w-[40.875rem] flex flex-col gap-3 lg:gap-5 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[24rem] xl:w-[30rem]"
      >
        Szállítási területek
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />

      <div class="flex flex-row gap-32">
        <div>
          <h1>Budapest egész területe</h1>
          <v-select
            label="Select"
            density="compact"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="solo"
          ></v-select>
        </div>
        <div>
          <h1>Pest megyei települések</h1>
          <v-select
            label="Select"
            density="compact"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="solo"
          ></v-select>
        </div>
      </div>
      <div class="flex flex-row items-center gap-5">
        <SmileIcon />
        <p>A megadott területre szállítunk!</p>
      </div>
      <div class="flex flex-row items-center gap-5">
        <SadSmileIcon />
        <p>A megadott területre sajnos nem szállítunk!</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  section {
    margin-top: 2rem;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
