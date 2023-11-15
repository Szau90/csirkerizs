<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import FoodList from "../components/FoodorderPage/FoodList.vue";
import NotificationModal from "../components/FoodorderPage/NotificationModal.vue";
import CheckIcon from "../assets/icons/CheckIcon.vue";

const store = useMealsStore();

const meals = computed(() => store.meals);

const categories = ref(store.categories);

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

const search = ref("Reggelik (széngidrát mentes)");
</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <div class="hidden md:flex flex-col w-[333px] 2xl:w-[400px] mt-24">
        <h1 class="text-title">Ételrendelés</h1>
        <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mt-4" />
        <PrimaryBtn
          title="Allergén táblázat"
          class="w-56 bg-primaryColor text-white mt-10"
          :fill-icon="'#ffffff'"
        />
        <h2 class="mt-10">Kategóriák</h2>

        <v-item-group
          v-model="categories"
          multiple
          variant="plain"
          mandatory
          class="w-[22.125rem] mt-8"
        >
          <template v-for="category in uniqueCategories" :key="category">
            <v-item v-slot="{ isSelected, toggle }" :value="category">
              <div class="flex flex-row items-center gap-3">
                <div
                  @click="toggle"
                  :value="category"
                  class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
                >
                  <CheckIcon v-if="isSelected" class="mt-1 ml-1" />
                </div>
                <p class="w-[250px] 2xl:w-[280px] flex items-center text-textColor md:max-2xl:text-content-md">
                  {{ category }}
                </p>
              </div>
            </v-item>
          </template>
        </v-item-group>
      </div>
    </template>
    <NotificationModal />
    <v-data-iterator
      v-model="categories"
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
        <div class="w-full h-20 "/>
        
      </template>
    </v-data-iterator>
  </BaseLayout>
</template>
