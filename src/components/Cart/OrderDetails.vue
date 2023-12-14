<script setup>
import CheckIcon from "../../assets/icons/CheckIcon.vue";
import { useOrdersStore } from "../../stores/orders";
import { storeToRefs } from "pinia";

const store = useOrdersStore();

const { shippingData} = storeToRefs(store);
</script>

<template>
  <main>
    <section class="flex flex-col md:flex-row gap-12">
      <div class="flex flex-col w-[300px]">
        <h1 class="font-semibold">Szállítási mód</h1>
        <p class="h-14 flex items-center">
          {{
            shippingData.shippingFee === 2290
              ? "Futárszolgálat + 2 290 Forint"
              : "Személyes átvétel üzletünkben"
          }}
        </p>
        <div class="w-[300px] bg-lightBorder h-px" />
      </div>
      <div class="flex flex-col">
        <h1 class="font-semibold">Fizetési mód</h1>
        <p class="h-14 flex items-center">
          {{
            shippingData.payByFee === 500
              ? "Utánvétel + 500 Forint"
              : "Bankártyás fizetés"
          }}
        </p>
        <div class="w-[300px] bg-lightBorder h-px" />
      </div>
    </section>

    <section class="flex flex-col md:flex-row mt-20 gap-12">
      <div class="flex flex-col w-[300px]">
        <h1 class="font-semibold">Szállítási adatok</h1>
        <div v-for="(value, key) in shippingData" :key="key">
          <template
            v-if="
              key !== 'invoiceData' &&
              key !== 'isAccepted' &&
              key !== 'shippingFee' &&
              key !== 'payByFee' &&
              key !== 'isEqualToShippingDetails'
            "
          >
            <p class="h-14 flex items-center">{{ value }}</p>
            <div class="w-[300px] bg-lightBorder h-px" />
          </template>
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="font-semibold">Számlázási adatok</h1>
        <div v-if="!shippingData.isEqualToShippingDetails">
          <template v-for="detail in shippingData.invoiceData" :key="detail">
            <p class="h-14 flex items-center">{{ detail }}</p>
            <div class="w-[300px] bg-lightBorder h-px" />
          </template>
        </div>
        <p v-else class="h-14 flex items-center">
          megegyezik a szállítási adatokkal
        </p>
        <div class="w-[300px] bg-lightBorder h-px" />

        <button
          class="flex flex-row items-center gap-3 mt-12"
          v-bind="shippingData.isAccepted"
        >
          <div
            id="checkbox"
            @click="shippingData.isAccepted = !shippingData.isAccepted"
            class="flex items-center justify-center w-[62px] h-[62px]"
          >
            <CheckIcon v-if="shippingData.isAccepted" class="mt-1 ml-1" />
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

<style scoped>
#checkbox {
  background-image: url('../../assets/shapes/CheckboxBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
