<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/products";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import TheCategories from "../components/FoodorderPage/TheCategories.vue";
import { storeToRefs } from "pinia";
import ShopLayout from "../components/Layouts/ShopLayout.vue";
import { useCartStore } from "../stores/cart";
import ProductItem from "../components/ShopPage/ProductItem.vue";

const cartStore = useCartStore();

const store = useProductStore();

const { products } = storeToRefs(store);

const { snackbar, snackbarText, timeout } = storeToRefs(cartStore);

const numberOfItems = ref([10, 20, 30, 50]);

const sortItems = ref([
  { sort: "népszerűek előre", value: { key: "rating", order: "desc" } },
  { sort: "ár szerint növekvő", value: { key: "price", order: "asc" } },
  { sort: "ár szerint csökkenő", value: { key: "price", order: "desc" } },
]);

const sortBy = ref([{ key: "rating", order: "desc" }]);

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

const filter = (value, query) => {
  return (
    value != null &&
    query != null &&
    typeof value === "string" &&
    categories.value.includes(value)
  );
};
const search = ref("Táplálék kiegészítők");


</script>

<template>
  <ShopLayout>
    <template #sidebar>
      <div class="hidden xl:flex flex-col w-[336px] mt-24">
        <h1 class="md:text-center xl:text-start text-title">Shop</h1>
        <div
          class="flex w-36 h-[0.312rem] md:mx-auto xl:mx-0 bg-primaryColor rounded-full mt-4"
        />
        <h1 class="text-title-xl mt-9">Kategóriák</h1>
        <v-item-group
          v-model="categories"
          multiple
          variant="plain"
          mandatory
          class="xl:w-[22.125rem] mt-10 md:max-xl:flex md:max-xl:flex-row md:max-xl:flex-wrap md:max-xl:justify-center"
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
      v-model="categories"
      :search="search"
      :items="products"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      :item-value="(item) => `${item.category}`"
      :custom-filter="filter"
      :sort-by="sortBy"
      multi-sort
    >
      <template v-slot:header>
        <div  class="flex flex-row justify-between md:mt-12 xl:mt-[9.25rem]">
          <div class="hidden md:block lg:w-[246px]">
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
                <p
                  class="text-[#CBCBD6] md:mr-5 lg:mr-[5.4rem] md:max-lg:text-content-md"
                >
                  Találatok
                </p>
              </template>
              <template #item="{ item, props }">
                <v-list-item v-bind="props" class="text-body-2"></v-list-item>
              </template>
            </v-select>
          </div>
          <div class="hidden md:block lg:w-[300px] xl:hidden">
            <v-select
              :items="uniqueCategories"
              v-model="categories"
              :single-line="false"
              :rounded="true"
              :hide-details="true"
              menu-icon="$expand"
              label="kategóriák"
              variant="solo"
              bg-color="#F0F0F8"
              multiple
            >
              <template #item="{ item, props }">
                <v-list-item v-bind="props"> </v-list-item>
              </template>
              <template v-slot:selection="{ item, index }">
                <div v-if="index < 1">
                  <span>{{ item.title }}</span>
                </div>
                <span
                  v-if="index === 1"
                  class="text-grey text-caption align-self-center ml-1"
                >
                  (+ {{ categories.length - 1 }} egyéb)
                </span>
              </template>
            </v-select>
          </div>
          <div id="sort-items" class="lg:w-[300px] xl:w-[556px]">
            <v-select
              :items="sortItems"
              :single-line="true"
              :rounded="true"
              :hide-details="true"
              item-title="sort"
              item-value="value"
              menu-icon="$expand"
              label="rendezés"
              variant="solo"
              bg-color="#F0F0F8"
              v-model="sortBy"
            >
              <template #item="{ item, props }">
                <v-list-item v-bind="props"> </v-list-item>
              </template>
              <template #prepend-inner>
                <p class="text-[#CBCBD6] xl:mr-[16rem]">rendezés</p>
              </template>
            </v-select>
          </div>
        </div>
      </template>

      <template v-slot:default="{ items }">
     <ProductItem :items="items" />
      </template>

      <template v-slot:footer="{ page, pageCount }">
        <footer
          color="#F0F0F8"
          class="absolute left-0 flex w-full items-center justify-center text-body-2 mt-4"
        >
          <v-pagination
            v-model="currentPage"
            :length="pageCount"
            rounded="circle"
            variant="elevated"
            color="#F0F0F8"
            :total-visible="pageCount"
            v-if="pageCount > 1"
          >
            <template #next></template>
            <template #prev></template>
          </v-pagination>
        </footer>
        <div class="w-full h-20" />
      </template>
    </v-data-iterator>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="#FF5F5C"
      location="bottom end"
      rounded="xl"
    >
      {{ snackbarText }} hozzáadva a kosárhoz
    </v-snackbar>
  </ShopLayout>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  #sort-items {
    margin: 1.75rem auto;
  }
  #item-container {
    margin-top: 2rem;
  }
}
@media screen and (max-width: 390px) {
  #description {
    font-size: small;
  }
}
</style>
