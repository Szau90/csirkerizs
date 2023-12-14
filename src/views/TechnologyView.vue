<script setup>
import TechnologyContent from "../components/Technology/TechnologyContent.vue";
import TechnologyImage from "../components/Technology/TechnologyImage.vue";
import TheThreeTechnology from "../components/Technology/TheThreeTechnology.vue";
import VacuumBag from "../components/Technology/VacuumBag.vue";
import LastSection from "../components/Technology/LastSection.vue"
</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <div class="container h-fit  mx-auto px-2 flex flex-col md:flex-row">
      <TechnologyContent />
      <TechnologyImage />
    </div>
    <TheThreeTechnology />
    <div id="container" class=" 2xl:w-[96rem] mt-5 px-2 flex flex-col md:flex-row md:gap-6 lg:gap-8 xl:gap-20 2xl:gap-36 mx-auto">
        <VacuumBag />
        <LastSection />
    </div>
    
  </section>
</template>


<style scoped>
@media screen and (min-width: 1400px) and (max-width: 1535px) {
  #container {
    gap: 10rem;
  }
}
</style>