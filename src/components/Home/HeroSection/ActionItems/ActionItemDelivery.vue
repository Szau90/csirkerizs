<script setup>
import ServicesArrow from '../../../../assets/icons/ServicesArrow.vue';
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/szallitasi-terulet')
}
</script>

<template>
  <div @click="handleClick" class="flex w-full items-center justify-between cursor-pointer">
    <p class="inline-flex text-white ml-5 md:ml-2 lg:ml-5">szállítás</p>
    <ServicesArrow class="inline-flex" />
  </div>
  <img
    src="../../../../assets/images/csirke_rizs_home-image6.png"
    alt=""
    class="w-[204px] h-[193px] md:w-48 md:h-44 lg:w-[204px] lg:h-[193px] -mt-14 md:-mt-12 lg:-mt-12 flex shrink"
  />
</template>
