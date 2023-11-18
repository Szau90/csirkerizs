<script setup>
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import CategoryHeader from "../components/FoodorderPage/CategoryHeader.vue";
import TheCategories from "../components/FoodorderPage/TheCategories.vue";
import NextIcon from "../assets/icons/NextIcon.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";

const store = useMealsStore();

const meals = computed(() => store.meals);

const numberOfItems = ref([10, 20, 30, 50]);
const sortby = ref([
  "népszerűek előre",
  "ár szerint növekvő",
  "ár szerint csökkenő",
]);
const categories = ref([
  "Táplálék kiegészítők",
  "Fitnesz kiegészítők",
  "Sport eszközök",
  "Italok",
  "Sportszeletek",
  "Ital és ételtartók",
]);
const uniqueCategories = ref([
  "Táplálék kiegészítők",
  "Fitnesz kiegészítők",
  "Sport eszközök",
  "Italok",
  "Sportszeletek",
  "Ital és ételtartók",
]);
const currentPage = ref(1);

const itemsPerPage = ref(20);

const mice = ref([
  {
    name: "Termék hangzatos neve",
    color: "",
    price: 149.99,
    description: "Whey protein isolate drink powder with glutamine and BCAA",
    src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
  },
  {
    name: "Razer DeathAdder V2",
    color: "12, 146, 47",
    dpi: 20000,
    buttons: 8,
    weight: "82g",
    wireless: false,
    price: 69.99,
    description: "Razer DeathAdder V2",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png",
  },
  {
    name: "Corsair Dark Core RGB",
    color: "107, 187, 226",
    dpi: 18000,
    buttons: 9,
    weight: "133g",
    wireless: true,
    price: 89.99,
    description: "Corsair Dark Core RGB",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png",
  },
  {
    name: "SteelSeries Rival 3",
    color: "228, 196, 69",
    dpi: 8500,
    buttons: 6,
    weight: "77g",
    wireless: false,
    price: 29.99,
    description: "SteelSeries Rival 3",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png",
  },
  {
    name: "HyperX Pulsefire FPS Pro",
    color: "156, 82, 251",
    dpi: 16000,
    buttons: 6,
    weight: "95g",
    wireless: false,
    price: 44.99,
    description: "HyperX Pulsefire FPS Pro",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/5.png",
  },
  {
    name: "Zowie EC2",
    color: "166, 39, 222",
    dpi: 3200,
    buttons: 5,
    weight: "90g",
    wireless: false,
    price: 69.99,
    description: "Zowie EC2",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png",
  },
  {
    name: "Roccat Kone AIMO",
    color: "131, 9, 10",
    dpi: 16000,
    buttons: 10,
    weight: "130g",
    wireless: false,
    price: 79.99,
    description: "Roccat Kone AIMO",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png",
  },
  {
    name: "Logitech G903",
    color: "232, 94, 102",
    dpi: 12000,
    buttons: 11,
    weight: "110g",
    wireless: true,
    price: 129.99,
    description: "Logitech G903",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png",
  },
  {
    name: "Cooler Master MM711",
    color: "58, 192, 239",
    dpi: 16000,
    buttons: 6,
    weight: "60g",
    wireless: false,
    price: 49.99,
    description: "Cooler Master MM711",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png",
  },
  {
    name: "Glorious Model O",
    color: "161, 252, 250",
    dpi: 12000,
    buttons: 6,
    weight: "67g",
    wireless: false,
    price: 49.99,
    description: "Glorious Model O",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png",
  },
  {
    name: "HP Omen Photon",
    color: "201, 1, 2",
    dpi: 16000,
    buttons: 11,
    weight: "128g",
    wireless: true,
    price: 99.99,
    description: "HP Omen Photon",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png",
  },
  {
    name: "Asus ROG Chakram",
    color: "10, 181, 19",
    dpi: 16000,
    buttons: 9,
    weight: "121g",
    wireless: true,
    price: 159.99,
    description: "Asus ROG Chakram",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png",
  },
  {
    name: "Razer Naga X",
    color: "100, 101, 102",
    dpi: 16000,
    buttons: 16,
    weight: "85g",
    wireless: false,
    price: 79.99,
    description: "Razer Naga X",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png",
  },
  {
    name: "Mad Catz R.A.T. 8+",
    color: "136, 241, 242",
    dpi: 16000,
    buttons: 11,
    weight: "145g",
    wireless: false,
    price: 99.99,
    description: "Mad Catz R.A.T. 8+",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/14.png",
  },
  {
    name: "Alienware 610M",
    color: "109, 110, 114",
    dpi: 16000,
    buttons: 7,
    weight: "120g",
    wireless: true,
    price: 99.99,
    description: "Alienware 610M",
    src: "https://cdn.vuetifyjs.com/docs/images/graphics/mice/15.png",
  },
]);
</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <div class="flex flex-col w-[336px] mt-24">
        <h1 class="md:text-center xl:text-start text-title">Shop</h1>
        <div
          class="flex w-36 h-[0.312rem] md:mx-auto xl:mx-0 bg-primaryColor rounded-full mt-4"
        />
        <v-item-group
          v-model="categories"
          multiple
          variant="plain"
          mandatory
          class="xl:w-[22.125rem] mt-8 md:max-xl:flex md:max-xl:flex-row md:max-xl:flex-wrap md:max-xl:justify-center"
        >
          <template v-for="category in uniqueCategories" :key="category">
            <v-item v-slot="{ isSelected, toggle }" :value="category">
              <TheCategories
                :is-selected="isSelected"
                @toggle="toggle"
                :category="category"
              />
            </v-item>
          </template>
        </v-item-group>
      </div>
    </template>

    <v-data-iterator
      :items="mice"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      :item-value="(item) => `${item.category}`"
    >
      <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
        <div class="flex flex-row justify-between">
          <div class="w-[246px]">
            <v-select
              :items="numberOfItems"
              :single-line="true"
              :rounded="true"
              :hide-details="true"
              menu-icon="$expand"
              v-model="itemsPerPage"
              label="találatok"
              variant="solo"
              bg-color="#F0F0F8"
            >
              <template #prepend-inner>
                <p class="text-[#CBCBD6] mr-[5.4rem]">Találatok</p>
              </template>
              <template #item="{ item, props }">
                <v-list-item v-bind="props" bg-color="primary"> </v-list-item>
              </template>
            </v-select>
          </div>
          <div class="w-[556px]">
            <v-select
              :items="sortby"
              :single-line="true"
              :rounded="true"
              :hide-details="true"
              menu-icon="$expand"
              variant="solo"
              class="w-[556px]"
              bg-color="#F0F0F8"
            >
              <template #prepend-inner>
                <p class="text-[#CBCBD6] mr-[16rem]">rendezés</p>
              </template>
            </v-select>
          </div>
        </div>
      </template>

      <template v-slot:default="{ items }">
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="3" sm="6" xl="3">
            <v-sheet
              min-height="406"
              color="#F0F0F8"
              elevation="2"
              :rounded="'xl'"
              class="pt-2"
            >
              <v-img
                :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
                :src="item.raw.src"
                cover
                height="218"
              ></v-img>

              <v-list-item
                :title="item.raw.name"
                lines="two"
                density="comfortable"
                :subtitle="item.raw.description"
                min-height="77"
              >
                <template v-slot:title>
                  <strong class="text-h6">
                    {{ item.raw.name }}
                  </strong>
                </template>
                <template v-slot:subtitle>
                  <p class="min-h-[45px] mt-2">
                    {{ item.raw.description }}
                  </p>
                </template>
              </v-list-item>

              <div class="flex flex-row justify-center my-4 w-full">
                <div
                  class="w-28 h-10 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
                >
                  {{ item.raw.price }}
                </div>
                <PrimaryBtn
                  title="kosárba"
                  :isCartBtn="true"
                  class="w-32 h-10 rounded-l-none text-content"
                />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer="{ page, pageCount }">
        <v-footer
          color="surface-variant"
          class="justify-space-between text-body-2 mt-4"
        >
          Total mice: {{ mice.length }}

          <div>Page {{ page }} of {{ pageCount }}</div>
        </v-footer>
      </template>
    </v-data-iterator>
  </BaseLayout>
</template>
