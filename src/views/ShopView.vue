<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "../stores/products";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import TheCategories from "../components/FoodorderPage/TheCategories.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { storeToRefs } from "pinia";
import ShopLayout from "../components/Layouts/ShopLayout.vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const store = useProductStore();

const { products } = storeToRefs(store);

const { addToCart } = cartStore;
const cartItems = storeToRefs(cartStore);

console.log(cartItems.items);

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
        <div class="flex flex-row justify-between md:mt-12 xl:mt-[9.25rem]">
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
        <v-row class="flex items-center justify-center">
          <v-col v-for="(item, i) in items" :key="i" cols="9" sm="4" xl="3">
            <v-sheet
              min-height="386"
              color="#F0F0F8"
              elevation="2"
              :rounded="'xl'"
              class="pt-2 md:mt-14 lg:mt-[5.6rem]"
              ><RouterLink :to="`/shop/${item.raw.id}`">
                <v-img
                  :src="item.raw.src"
                  cover
                  width="218"
                  class="mx-auto"
                  min-height="218"
                ></v-img>
              </RouterLink>

              <v-list-item
                :title="item.raw.name"
                lines="two"
                density="comfortable"
                :subtitle="item.raw.description"
                min-height="77"
              >
                <template v-slot:title>
                  <h1 class="text-subtitle text-center min-w-full">
                    {{ item.raw.name }}
                  </h1>
                </template>
                <template v-slot:subtitle>
                  <p
                    id="description"
                    class="md:max-lg:text-content-sm min-h-[45px] text-center mt-2"
                  >
                    {{ item.raw.description }}
                  </p>
                </template>
              </v-list-item>

              <div
                class="flex flex-row justify-center md:w-52 md:mx-auto lg:w-full"
              >
                <div
                  class="w-28 h-10 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
                >
                  {{ item.raw.price }}
                </div>
                <PrimaryBtn
                  title="kosárba"
                  :isCartBtn="true"
                  class="w-32 h-10 rounded-l-none text-content"
                  @click="
                    addToCart({
                      id: item.raw.id,
                      name: item.raw.name,
                      description: item.raw.description,
                      price: item.raw.price,
                      calculatedPrice: item.raw.price,
                      quantity: 1,
                      image: item.raw.src,
                    })
                  "
                />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
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
  </ShopLayout>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  #sort-items {
    margin: 1.75rem auto;
  }
}
@media screen and (max-width: 390px) {
  #description {
    font-size: small;
  }
}
</style>
