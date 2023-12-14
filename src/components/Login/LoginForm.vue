<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import {ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const handleRegistrationClick = () => {
  router.push('/registration')
}

const tabs = reactive({
  client: "Vásárló vagyok",
  reseller: "Viszonteladó vagyok",
});

const activeTab = ref('client')
</script>
<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start lg:pl-24 2xl:pl-32"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[524px]"
    >
      Jelentkezz be
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <v-item-group v-model="activeTab" class="flex" mandatory>
      <template v-for="(tab, key) in tabs" :key="key">
        <v-item v-slot="{ isSelected, toggle }" :value="key">
          <div
            class="flex flex-row w-[180px] md:max-xl:min-w-[190px] xl:w-[500px] items-center gap-3"
          >
            <p
              class="text-content-md xl:text-content lg:w-34 flex items-center text-textColor md:max-2xl:text-content-md cursor-pointer"
              :class="isSelected ? 'font-bold' : ''"
              @click="toggle"
            >
              {{ tab }}
            </p>
          </div>
        </v-item>
      </template>
    </v-item-group>
    <v-form class="w-[334px] lg:w-[354px]" v-if="activeTab === 'client'">
      <v-text-field label="email címem" variant="underlined"></v-text-field>
      <v-text-field label="jelszavam" variant="underlined"></v-text-field>
      <PrimaryBtn @click="handleRegistrationClick"  type="button" :title="'regisztráció'" :fill-icon="'#ffffff'" class="bg-primaryColor w-56 text-white "/>
      <PrimaryBtn :title="'bejelentkezés'" class="w-56 mt-8" />
    </v-form>
    <v-form class="w-[334px] lg:w-[354px]" v-else>
      <v-text-field label="felhasználó azonosítóm" variant="underlined"></v-text-field>
      <v-text-field label="jelszavam" variant="underlined"></v-text-field>
    
      <PrimaryBtn :title="'bejelentkezés'" class="w-56 xl:mt-8" />
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
