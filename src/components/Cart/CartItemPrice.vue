<script setup>
defineProps(["quantity", "isMeal", "calculatedPrice"]);
</script>

<template>
  <v-col
    cols="3"
    align="center"
    class="flex flex-col justify-center items-center"
  >
    <div class="flex flex-row items-center justify-center gap-2">
      <p>
        {{ quantity }}
      </p>
      <p>
        {{ isMeal ? "adag" : "db" }}
      </p>
    </div>
    <p
      class="w-44 h-14 bg-primaryColor rounded-full flex items-center justify-center text-white"
    >
      {{ calculatedPrice.toFixed(0) + " Forint" }}
    </p>
  </v-col>
</template>
