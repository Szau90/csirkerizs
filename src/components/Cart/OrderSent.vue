<script setup>
import PrimaryBtn from '../UI/PrimaryBtn.vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push('/')
}
</script>

<template>
  <section
    class="flex flex-col md:flex-row md:mt-12 2xl:w-[96rem] mx-auto px-2"
  >
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/DeliverySecoundaryPattern.svg"
        alt=""
        width="740"
        height="740"
      />
    </div>
    <div
      class="w-full lg:max-xl:px-4 mt-4 md:mt-0 md:w-1/2 2xl:w-[40.875rem] flex flex-col gap-3 lg:gap-5 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[15rem] 2xl:w-[24rem]"
      >
        Köszönjük, hogy Nálunk vásároltál
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
 
    
        <p> További információkat e-mailben elküldtük neked</p> 
        <PrimaryBtn title=" vissza a főöldalra" class="w-60 mb-4"  @click="handleClick"/>
        
     
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