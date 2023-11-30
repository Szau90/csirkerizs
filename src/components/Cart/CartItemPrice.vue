<script setup>
defineProps(["quantity", "isMeal", "calculatedPrice"]);
</script>

<template>
  <section
    class="flex flex-col md:w-[220px] text-content-sm md:text-content justify-center items-center"
  >
    <div class="hidden md:flex flex-row items-center justify-center gap-2">
      <p>
        {{ quantity }}
      </p>
      <p>
        {{ isMeal ? "adag" : "db" }}
      </p>
    </div>
    <p
      class="w-20 h-8 md:w-36 lg:w-44 md:h-14 bg-primaryColor rounded-full flex items-center justify-center text-white"
    >
      {{ calculatedPrice.toFixed(0) + " Forint" }}
    </p>
  </section>
</template>
