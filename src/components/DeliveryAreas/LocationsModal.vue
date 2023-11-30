<script setup>
import CloseNotificationIcon from "../../assets/icons/CloseNotificationIcon.vue";
import { useGymStore } from "../../stores/gyms";
import { storeToRefs } from "pinia";
const store = useGymStore();
const { modalOpen, selectedIcon } = storeToRefs(store);
const { closeModal } = store;
</script>

<template>
  <div
    v-if="modalOpen"
    class="w-full flex flex-col justify-center items-center"
  >
    <div
      class="lg:w-[838px] p-5 h-min-content absolute top-1/2 -translate-y-1/2 bg-[#f0f0f8] shadow-lg rounded-[30px] flex flex-col items-center"
    >
      <div
        class="w-12 h-12 absolute flex items-center justify-center rounded-full shadow-lg place-self-end"
      >
        <CloseNotificationIcon class="cursor-pointer" @click="closeModal" />
      </div>
      <h1 class="text-title-sm md:text-title">{{ selectedIcon.city + "i" }} lelőhelyek</h1>
      <div
        class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
      />

      <div class="flex flex-col mt-8 gap-2 w-full text-content-md xl:text-content">
        <template
          v-for="location in selectedIcon.locations"
          :key="location.name"
        >
          <div class="flex flex-row justify-center ">
            <p class="min-w-[190px] md:min-w-[360px]">{{ location.name }}</p>
            <p class="min-w-[200px] md:min-w-[371px]" >{{ location.address }}</p>
          </div>
         <div class=" bg-lightBorder h-px"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width:390px) {
    p {
        min-width: 185px;
    }
}
</style>
