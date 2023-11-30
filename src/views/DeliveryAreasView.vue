<script setup>
import DeliveryImage from "../components/DeliveryAreas/DeliveryImage.vue";
import DeliveryMain from "../components/DeliveryAreas/DeliveryMain.vue";
import DeliveryActions from "../components/DeliveryAreas/DeliveryActions.vue";
import Hungary from "../components/DeliveryAreas/Hungary.vue";
import LocationsModal from "../components/DeliveryAreas/LocationsModal.vue";
</script>

<template>
  <section>
    <div class="container h-fit mx-auto px-2 flex flex-col md:flex-row">
      <DeliveryMain />
      <DeliveryImage />
    </div>

    <DeliveryActions />
    <div class="relative md:mt-20 lg:mt-32 mx-auto">
      <h1 class="text-title-sm md:text-title-md 2xl:text-title text-center">Csirkerizs lelőhelyek</h1>
      <div
        class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
      />
      <div class="text-center text-textColor px-5 my-8 text-content md:text-content-md xl:text-content">
        <p>Ezekben az edzőtermekben találod meg a Csirkerizs hűtőt ;)</p>
        <p>További részleteket találsz az ikonokra kattintva!</p>
        <p>
          Nem találod a legközelebbi edzőtermedet, vagy nem szállítunk a
          környékedre?
        </p>
        <p>
          Javasolj Te is olyan edzőtermet, ahova el tudod képzelni a Csirkerizs
          hűtőjét, telis-tele fitness étel finomságokkal! <br/> Írj nekünk a
          kerdes@csirkerizs.hu email címre, ha van javaslatod.
        </p>
      </div>
      <LocationsModal />
      <div class=" w-full xl:w-[1160px] mx-auto">
      <Hungary />
    </div>
    </div>
  </section>
</template>
