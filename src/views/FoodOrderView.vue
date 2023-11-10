<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";

const store = useMealsStore();

const meals = computed(() => store.meals);

const categories = ref(["Reggelik (széngidrát mentes)"]);

const currentPage = ref(1);

const uniqueCategories = Array.from(
  new Set(meals.value.map((meal) => meal.category))
);
const itemsPerPage = ref(6);

const filter = (value, query, item) => {
  return (
    value != null &&
    query != null &&
    typeof value === "string" &&
    categories.value.includes(value)
  );
};

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
    >
      <template #header="{ page, pageCount, prevPage, nextPage }">
        <h1
          class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center"
        >
          <div class="text-truncate">Most popular mice</div>

          <div class="d-flex align-center">
            <div class="d-inline-flex">
              <v-btn
                :disabled="page === 1"
                icon="mdi-arrow-left"
                size="small"
                variant="tonal"
                class="me-2"
                @click="prevPage"
              ></v-btn>

              <v-btn
                :disabled="page === pageCount"
                icon="mdi-arrow-right"
                size="small"
                variant="tonal"
                @click="nextPage"
              ></v-btn>
            </div>
          </div>
        </h1>
      </template>

      <template v-slot:default="{ items }">
        
          <v-col v-for="(item, i) in items" :key="i" >
            
            <v-sheet border>
              <main class="flex flex-row">
                <v-img
              :src="item.raw.image"
              contain
              width="380"
              height="380"
              class="-ml-[25%]"
              
            ></v-img>
              <v-list-item
                :title="item.raw.title"
                lines="five"
                density="comfortable"
                :subtitle="item.raw.description"
                
              >
                <template v-slot:title>
                  <strong class="text-h6">
                    {{ item.raw.title }}
                  </strong>
                </template>
                <div class="flex flex-row gap-20 border-b border-b-lightBorder">
                  <div
                    v-for="(energy, key) in item.raw.energy"
                    :key="key"
                    class="flex flex-row gap-5"
                  >
                    <p>{{ key }}</p>
                    <p class="font-semibold">{{ energy }}</p>
                  </div>
                </div>
                <div class="flex flex-row gap-2 items-center justify-center border-b border-b-lightBorder">
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-20" />
                  </div>
                </div>
                <div class="flex flex-row gap-5 items-center">
                  <h1>Allergének</h1>
                  <div
                    v-for="(allergens, index) in item.raw.allergens"
                    :key="index"
                  >
                    <p>{{ allergens }}</p>
                  </div>
                  <div class="flex flex-row w-[18.85rem] sm:w-full">
                    <div
                      class="w-32 h-10 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
                    >
                      {{ item.raw.price }}
                    </div>
                    <PrimaryBtn
                      title="rendeld meg!"
                      class="w-36 h-10 rounded-l-none text-content"
                    />
                  </div>
                </div>
              </v-list-item>
              </main>
            </v-sheet>
          </v-col>
        
      </template>
      <template #footer="{ pageCount }">
        <v-footer
          color="surface-variant"
          class="justify-space-between text-body-2 mt-4"
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
