<script setup>
import ServicesArrow from "../../../../assets/icons/ServicesArrow.vue";
import { useRouter } from "vue-router"; 

const router = useRouter()

const handleClick= () => {
  router.push('/registration')
}
</script>

<template>
  <div @click="handleClick" class="flex items-center justify-between cursor-pointer">
    <p class="inline-flex ml-5">regisztráció</p>
    <ServicesArrow class="inline-flex" />
  </div>
  <div class="flex flex-row gap-2 w-full justify-center">
    <img
      src="../../../../assets/images/csirke_rizs_home-image7.png"
      alt=""
      class="w-[110px] h-[157px] flex shrink -mt-7 -mr-7 z-10"
    />
    <img
      src="../../../../assets/images/csirke_rizs_home-image2.png"
      alt=""
      class="w-[94px] h-[96px] flex shrink"
    />
  </div>
</template>
