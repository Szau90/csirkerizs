<script setup>
defineProps(["name", "isMeal", "description", "energy"]);
</script>

<template>
  <section  class="flex flex-col justify-center gap-5">
    <h1 class="text-[11px] md:text-title-sm lg:text-title-xl min-w-[120px]">{{ name }}</h1>
    <div class="hidden md:block h-px bg-lightBorder mx-4"/>

    <div
      v-if="isMeal"
      class="hidden md:w-[230px] lg:w-[300px] md:flex flex-row justify-around items-center flex-wrap gap-2 mt-3"
    >
      <div
        v-for="(energy, key) in energy"
        :key="key"
        class="flex flex-row gap-5 text-content-md lg:text-content  text-textColor"
      >
        <p >{{ key }}</p>
        <p class="font-semibold">{{ energy }}</p>
      </div>
    </div>
    <p v-else class="hidden md:block w-[250px] md:w-[200px] lg:w-[300px] text-content-md lg:text-content text-textColor">
      {{ description }}
    </p>
  </section>
</template>
