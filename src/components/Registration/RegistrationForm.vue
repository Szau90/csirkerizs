<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { ref, reactive } from "vue";

const tabs = reactive({
  client: "Vásárló vagyok",
  reseller: "Viszonteladó vagyok",
});

const inputs = reactive({
  firstName: "Vezetéknév",
  lastName: "Keresztnév",
  email: "Email cím",
  password: "Jelszó",
  passwordAgain: "Jelszó újra",
  phone: "Telefonszám",
  street: "Utca",
});

const resellerInputs = ref([
  "Név",
  "Email cím",
  "Jelszó",
  "Jelszó újra",
  "Telefonszám",
  "Irányítószám",
  "Város",
  "Utca",
]);

const inputRules = ref([
  (value) => {
    if (value?.trim() !== "") return true;

    return "a mező nem maradhat üresen";
  },
]);

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordAgain: "",
  phone: "",
  street: "",
  postCode: "",
  city: "",
});

const activeTab = ref("client");
</script>
<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start lg:pl-24 xl:pl-32"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Regisztráció
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <v-item-group v-model="activeTab" class="flex" mandatory>
      <template v-for="(tab, key) in tabs" :key="key">
        <v-item v-slot="{ isSelected, toggle }" :value="key">
          <div
            class="flex flex-row w-[180px] md:max-xl:min-w-[190px] xl:w-[500px] items-center gap-3"
          >
            <p
              class="text-content-md xl:text-content  lg:w-34 flex items-center text-textColor md:max-2xl:text-content-md cursor-pointer"
              :class="isSelected ? 'font-bold' : ''"
              @click="toggle"
            >
              {{ tab }}
            </p>
          </div>
        </v-item>
      </template>
    </v-item-group>
    <v-form v-if="activeTab === 'client'">
      <template v-for="input in inputs" :key="input">
        <v-text-field
          variant="underlined"
          density="compact"
          single-line
          hide-details
          class="xl:w-[400px]"
          :rules="inputRules"
        >
          <template v-slot:label>
            <span class="text-content-md xl:text-content">{{ input }}</span>
          </template></v-text-field
        >
      </template>

      <v-select
        variant="underlined"
        density="compact"
        single-line
        hide-details
        class="xl:w-[400px]"
      >
        <template v-slot:label>
          <span class="text-content-md xl:text-content">Irányítószám</span>
        </template></v-select
      >
      <v-select
        variant="underlined"
        density="compact"
        single-line
        hide-details
        class="w-[334px] lg:w-[354px] xl:w-[400px]"
      >
        <template v-slot:label>
          <span class="text-content-md xl:text-content">Város</span>
        </template></v-select
      >

      <PrimaryBtn :title="'regisztráció'" class="w-56 mt-8" />
    </v-form>
    <v-form class="w-[334px] lg:w-[354px]" v-else>
      <template v-for="input in resellerInputs">
        <v-text-field
          variant="underlined"
          density="compact"
          single-line
          hide-details
          class="w-[334px] lg:w-[354px] xl:w-[400px]"
          :rules="inputRules"
        >
          <template v-slot:label>
            <span class="text-content-md xl:text-content">{{ input }}</span>
          </template></v-text-field
        >
      </template>
      <PrimaryBtn :title="'regisztráció'" class="w-56 mt-8" />
    </v-form>
  </div>
</template>

<style scoped>
@media screen and (max-width: 639px) {
  h1 {
    text-align: center;
  }
  strong {
    text-align: center;
  }
}
</style>
