<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import FoodList from "../components/FoodorderPage/FoodList.vue";
import NotificationModal from "../components/FoodorderPage/NotificationModal.vue";
import TheCategories from "../components/FoodorderPage/TheCategories.vue";
import CategoryHeader from "../components/FoodorderPage/CategoryHeader.vue";
import SmallScreenCategoryHeader from "../components/FoodorderPage/SmallScreenCategoryHeader.vue";
import CategoriesBtn from "../components/FoodorderPage/CategoriesBtn.vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();


const store = useMealsStore();

const meals = computed(() => store.meals);

const {categories} = storeToRefs(store);

const { snackbar, snackbarText, timeout } = storeToRefs(cartStore);

const currentPage = ref(1);

const itemsPerPage = ref(6);

const uniqueCategories = Array.from(
  new Set(meals.value.map((meal) => meal.category))
);

// filter the array to find selected category
const filter = (value, query) => {
  return (
    value != null &&
    query != null &&
    typeof value === "string" &&
    categories.value.includes(value)
  );
};

const sortBy = ref([{ key: "category", order: "desc" }]);

const search = ref("Reggelik (szénhidrát mentes)");
</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <div class="hidden 2xl:flex flex-col w-[400px] mt-24">
        <CategoryHeader />
        <v-item-group
          v-model="categories"
          multiple
          variant="plain"
          mandatory
          class="d-none d-lg-block xl:w-[22.125rem] mt-8 md:max-xl:flex md:max-xl:flex-row md:max-xl:flex-wrap md:max-xl:justify-center"
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
   <!-- small screen -->
    <div class="flex flex-col-reverse md:flex-col">
      <SmallScreenCategoryHeader />
      <div class="flex flex-col-reverse md:flex-row items-center">
        <div class="2xl:hidden flex-col">
          <PrimaryBtn
            title="Allergén táblázat"
            class="2xl:hidden w-56 bg-primaryColor text-white mt-10 md:mx-auto lg:mx-0"
            :fill-icon="'#ffffff'"
          />

          <v-menu
            transition="slide-x-transition"
            :close-on-content-click="false"
            :scroll-strategy="'close'"
            :location="'bottom'"
          >
            <template v-slot:activator="{ props }">
              <CategoriesBtn :properties="props" />
            </template>
            <v-sheet color="#F0F0F8" class="xl:max-2xl:w-full max-w-[1220px]">
              <v-item-group
                v-model="categories"
                multiple
                variant="plain"
                mandatory
                class="mt-8 md:max-2xl:flex md:max-2xl:flex-row md:max-2xl:flex-wrap md:max-2xl:justify-center"
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
            </v-sheet>
          </v-menu>
        </div>
        <NotificationModal />
      </div>
    </div>

    <v-data-iterator
      :items="meals"
      :items-per-page="itemsPerPage"
      :page.sync="currentPage"
      :item-value="(item) => `${item.category}`"
      :custom-filter="filter"
      :search="search"
      :sort-by="sortBy"
    >
      <template v-slot:default="{ items }">
        <FoodList :items="items" />
      </template>
      <template #footer="{ pageCount }">
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
  </BaseLayout>
</template>
