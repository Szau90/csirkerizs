<script setup>
import { reactive, ref } from "vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";

import { useOrdersStore } from "../../stores/orders";
import { storeToRefs } from "pinia";

const store = useOrdersStore();

const { shippingData, inputRules } = storeToRefs(store);

const datas = reactive({
  cashOnDelivery: {
    label: "Utánvétel + 500 Forint",
    value: 500,
    isSelected: false,
  },
  creditCard: {
    label: "Bankártyás fizetés",
    value: 0,
    isSelected: false,
  },
});
</script>

<template>
  <section class="flex flex-col">
    <h1>Válassz fizetési módot</h1>
    <v-item-group v-model="shippingData.payByFee" mandatory>
      <template v-for="data in datas" :key="data.label">
        <v-item v-slot="{ isSelected, toggle }" :value="data.value">
          <div
            class="flex flex-row md:max-xl:min-w-[360px] xl:w-[500px] items-center gap-3"
          >
            <div
              @click="toggle"
              :value="data.value"
              class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
            >
              <CheckIcon v-if="isSelected" @click="toggle" class="mt-1 ml-1" />
            </div>
            <p
              class="w-[280px] flex items-center text-textColor md:max-2xl:text-content-md"
            >
              {{ data.label }}
            </p>
          </div>
        </v-item>
      </template>
    </v-item-group>

    <h1>Számlázási adatok</h1>
    <button
      class="flex flex-row items-center gap-3"
      v-bind="shippingData.isEqualToShippingDetails"
    >
      <div
        @click="
          shippingData.isEqualToShippingDetails =
            !shippingData.isEqualToShippingDetails
        "
        class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
      >
        <CheckIcon
          v-if="shippingData.isEqualToShippingDetails"
          class="mt-1 ml-1"
        />
      </div>
      <p
        class="w-[280px] flex items-center text-textColor md:max-2xl:text-content-md"
      >
        megegyezik a szálíltási címmel
      </p></button
    >

    <v-form v-if="!shippingData.isEqualToShippingDetails">
      <v-text-field
        v-model="shippingData.invoiceData.name"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="név"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.invoiceData.postCode"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="irányítószám"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.invoiceData.city"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="város"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.invoiceData.street"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="utca"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.invoiceData.houseNumber"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="házszám"
        density="compact"
      ></v-text-field>
    </v-form>
  </section>
</template>
