<script setup>
import { reactive, ref } from "vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";

import { useOrdersStore } from "../../stores/orders";
import { storeToRefs } from "pinia";

const store = useOrdersStore();

const { shippingData, nameRules, emailRules, inputRules } = storeToRefs(store);

const { handleSubmit} = store

const datas = reactive({
  ship: {
    label: "Futárszolgálat + 2 290 Forint",
    value: 2290,
    isSelected: false,
  },
  personal: {
    label: "Személyes átvétel üzletünkben",
    value: 0,
    isSelected: false,
  },
});


</script>

<template>
  <section class="flex flex-col">
    <h1>Válassz szállítási módot</h1>
    <v-form fast-fail @submit.prevent="handleSubmit">
      <v-item-group v-model="shippingData.shippingFee" mandatory>
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
                <CheckIcon
                  v-if="isSelected"
                  @click="toggle"
                  class="mt-1 ml-1"
                />
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
      <v-text-field
        v-model="shippingData.name"
        :rules="nameRules"
        class="w-96"
        variant="underlined"
        label="név"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.postCode"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="irányítószám"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.city"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="város"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.street"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="utca"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.houseNumber"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="házszám"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.email"
        :rules="emailRules"
        class="w-96"
        variant="underlined"
        label="email címed"
        density="compact"
      ></v-text-field>
      <v-text-field
        v-model="shippingData.phone"
        :rules="inputRules"
        class="w-96"
        variant="underlined"
        label="telefonszámod"
        density="compact"
      ></v-text-field>
    </v-form>
  </section>
</template>
