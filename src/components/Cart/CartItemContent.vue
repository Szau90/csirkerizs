<script setup>
defineProps(["name", "isMeal", "description", "energy"]);
</script>

<template>
  <v-col cols="4" align="start" class="flex flex-col justify-center gap-1">
    <h1 class="text-title-xl">{{ name }}</h1>
    <v-divider class="border-opacity-100" color="#D9D9E5"></v-divider>

    <div
      v-if="isMeal"
      class="w-[256px] flex flex-row justify-around items-center flex-wrap gap-2 mt-3"
    >
      <div
        v-for="(energy, key) in energy"
        :key="key"
        class="flex flex-row gap-5 text-textColor"
      >
        <p>{{ key }}</p>
        <p class="font-semibold">{{ energy }}</p>
      </div>
    </div>
    <p v-else class="text-textColor">
      {{ description }}
    </p>
  </v-col>
</template>
