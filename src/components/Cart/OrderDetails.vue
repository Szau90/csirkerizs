<script setup>
import CheckIcon from "../../assets/icons/CheckIcon.vue";

import { useOrdersStore } from "../../stores/orders";
import { storeToRefs } from "pinia";

const store = useOrdersStore();

const { shippingData } = storeToRefs(store);
</script>

<template>
  <section class="flex flex-row">
    <div class="flex flex-col">
      <h1>Szállítási mód</h1>
      <p>{{}}</p>
    </div>
    <div class="flex flex-col">
      <h1>Fizetési mód</h1>
      <p>{{}}</p>
    </div>
  </section>

  <section class="flex flex-row">
    <div class="flex flex-col">
      <h1>Szállítási adatok</h1>
      <template v-for="detail in shippingData" :key="detail">
        <p class="h-14 flex items-center">{{ detail }}</p>
        <div class="w-[300px] bg-lightBorder h-px"/>
      </template>
    </div>
    <div class="flex flex-col">
      <h1>Számlázási adatok</h1>
      <template v-for="detail in shippingData.invoiceData" :key="detail">
        <p>{{ detail }}</p>
      </template>
      <v-item-group v-model="shippingData.isAccepted" multiple>
      
        <v-item
          v-slot="{ isSelected, toggle }"
          :value="true"
        >
          <div
            class="flex flex-row md:max-xl:min-w-[360px] xl:w-[500px] items-center gap-3"
          
          >
            <div
              @click="toggle"
              class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
            >
              <CheckIcon v-if="isSelected"  class="mt-1 ml-1" />
            </div>
            <p
              class="w-[280px] flex items-center text-textColor md:max-2xl:text-content-md"
            >
              tudomásul veszem , hogy a megrendelés elküldése fizetési
              kötelezettséggel jár.
            </p>
          </div>
        </v-item>
      </v-item-group>
    </div>
  </section>
</template>
