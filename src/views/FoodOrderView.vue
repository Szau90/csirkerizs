<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import FoodList from "../components/FoodorderPage/FoodList.vue";

const store = useMealsStore();

const meals = computed(() => store.meals);

const categories = ref(["Reggelik (széngidrát mentes)"]);

const currentPage = ref(1);

const uniqueCategories = Array.from(
  new Set(meals.value.map((meal) => meal.category))
);
const itemsPerPage = ref(6);

// filter the array to find selected category
const filter = (value, query, item) => {
  return (
    value != null &&
    query != null &&
    typeof value === "string" &&
    categories.value.includes(value)
  );
};

const sortBy = ref([{ key: "category", order: "asc" }]);

const search = ref("Reggelik (széngidrát mentes)");
</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <div class="w-[372px]">
        <h1 class="text-title">Ételrendelés</h1>
        <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mt-6" />
        <PrimaryBtn title="Allergén táblázat" class="w-56" />
        <h2>Kategóriák</h2>
        <v-chip-group
          column
          multiple
          v-model="categories"
          variant="plain"
          class="w-[22.125rem]"
          mandatory
        >
          <v-chip
            color="#FF5F5C"
            filter
            v-for="cat in uniqueCategories"
            :key="cat"
            :value="cat"
            class="w-full"
            ><p class="text-textColor">{{ cat }}</p></v-chip
          >
        </v-chip-group>
      </div>
    </template>

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
        <v-footer
          color="#F0F0F8"
          class="flex w-full items-center justify-center text-body-2 mt-4"
        >
          <v-pagination
            v-model="currentPage"
            :length="pageCount"
            rounded="circle"
            variant="plain"
            :total-visible="pageCount"
          ></v-pagination>
        </v-footer>
      </template>
    </v-data-iterator>
  </BaseLayout>
</template>
