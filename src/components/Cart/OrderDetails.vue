<script setup>
import CheckIcon from "../../assets/icons/CheckIcon.vue";
import {reactive, ref}  from "vue"
import { useOrdersStore } from "../../stores/orders";
import { storeToRefs } from "pinia";

const store = useOrdersStore();

const { shippingData } = storeToRefs(store);


const clientData = reactive({
  name: shippingData.value.name,
  city: shippingData.value.city
})

</script>

<template>
 <main>
  <section class="flex flex-col md:flex-row gap-12 ">
    <div class="flex flex-col w-[300px]  ">
      <h1 class="font-semibold ">Szállítási mód</h1>
      <p>{{shippingData.shippingFee === 2290 ? 'Futárszolgálat + 2 290 Forint' :'Személyes átvétel üzletünkben'}}</p>
    </div>
    <div class="flex flex-col  ">
      <h1  class="font-semibold ">Fizetési mód</h1>
      <p>{{shippingData.payByFee === 500 ? 'Utánvétel + 500 Forint' : 'Bankártyás fizetés'}}</p>
    </div>
  </section>

  <section class="flex flex-col md:flex-row mt-20 gap-12">
    <div class="flex flex-col w-[300px]">
      <h1  class="font-semibold ">Szállítási adatok</h1>
      <template v-for="detail in shippingData" :key="detail">
        <p class="h-14 flex items-center">{{ detail }}</p>
        <div class="w-[300px] bg-lightBorder h-px"/>
      </template>
    </div>
    <div class="flex flex-col">
      <h1  class="font-semibold ">Számlázási adatok</h1>
      <div v-if="!shippingData.isEqualToShippingDetails">
        <template v-for="detail in shippingData.invoiceData" :key="detail">
        <p>{{ detail }}</p>
      
      </template>
      </div>
      <p v-else>megegyezik a szállítási adatokkal</p>
      
      
        
          <button
            class="flex flex-row items-center gap-3"
            v-bind="shippingData.isAccepted"
          >
            <div
              @click="shippingData.isAccepted = !shippingData.isAccepted"
              class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
            >
              <CheckIcon v-if="shippingData.isAccepted"  class="mt-1 ml-1" />
            </div>
            <p
              class="w-[280px] flex text-start text-textColor md:max-2xl:text-content-md"
            >
              tudomásul veszem , hogy a megrendelés elküldése fizetési
              kötelezettséggel jár.
            </p>
          </button>
      
     
    </div>
  </section>
 </main>
</template>
