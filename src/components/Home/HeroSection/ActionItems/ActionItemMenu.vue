<script setup>
import ServicesArrow from '../../../../assets/icons/ServicesArrow.vue';
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/etelrendeles')
}
</script>

<template>
  <div @click="handleClick" class="flex items-center justify-between cursor-pointer">
    <p class="inline-flex">étlapunk</p>
    <ServicesArrow class="inline-flex" />
  </div>
  <div class="flex flex-row gap-2">
    <img
      src="../../../../assets/images/csirke_rizs_home-image.png"
      alt=""
      class="w-32 h-32 lg:w-40 lg:h-40 flex shrink -mt-5 md:-mt-0 lg:-mt-5 -ml-4"
    />
    <img
      src="../../../../assets/shapes/DishShadow.svg"
      alt=""
      class="w-28 h-28 -mt-12 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-[8.45rem] xl:h-[8.85rem] flex shrink md:-mt-2 lg:-mt-8 xl:-mt-12"
    />
  </div>
</template>
