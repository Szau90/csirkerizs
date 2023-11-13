<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../stores/meals";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import { storeToRefs } from "pinia";

const store = useMealsStore();

const meals = computed(() => store.meals);
const { countMeals } = storeToRefs(store);
const { increment, decrement } = store;

const categories = ref(["Reggelik (széngidrát mentes)"]);

const currentPage = ref(1);

const counter = ref([0,0,0,0,0,0]);

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

//find the first element's index of every category in the array
const findFirstIndex = (items, category) => {
  let firstIndex = 0;

  while (firstIndex <= items.length) {
    if (items[firstIndex].raw.category === category) {
      return firstIndex;
    }

    firstIndex += 1;
  }

  return -1;
};
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
        <v-col v-for="(item, index) in items" :key="index">
          <h1
            v-if="findFirstIndex(items, item.value) === index"
            class="flex flex-row w-full mb-14 items-center text-title gap-2"
          >
            <div class="w-1 h-10 bg-primaryColor rounded-full" />
            {{ item.value }}
          </h1>

          <main class="relative flex flex-row items-start">
            <v-img
              :src="item.raw.image"
              contain
              width="380"
              height="380"
            ></v-img>
            <div
              class="w-[945px] -ml-[190px] flex items-center justify-end shadow-lg rounded-[30px]"
            >
              <v-list-item
                :title="item.raw.title"
                lines="five"
                density="comfortable"
                :subtitle="item.raw.description"
                class="w-[745px] h-[327px]"
              >
                <template v-slot:title>
                  <h1 class="text-title-xl">
                    {{ item.raw.title }}
                  </h1>
                  <h1 class="text-title-xl">
                    {{ counter[index]}}
                  </h1>
                </template>
                <div
                  class="flex flex-row gap-20 border-y border-lightBorder py-2 mt-3"
                >
                  <div
                    v-for="(energy, key) in item.raw.energy"
                    :key="key"
                    class="flex flex-row gap-5 text-textColor"
                  >
                    <p>{{ key }}</p>
                    <p class="font-semibold">{{ energy }}</p>
                  </div>
                </div>
                <div
                  class="flex flex-row py-2 gap-2 items-center justify-center border-b border-b-lightBorder text-textColor"
                >
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <div
                      class="w-full h-10 flex flex-row items-center justify-between px-2 bg-white rounded-full"
                    >
                      <button @click="decrement">-</button>{{ countMeals }}
                      <button @click="increment">+</button>
                    </div>
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <v-text-field
                      bg-color="#ffffff"
                      variant="solo"
                      v-model="counter[index]"
                      
                      
                    >
                      <template v-slot:append-inner>
                        <v-icon
                          class="cursor-pointer"
                          icon="$next"
                          @click="() => {
                            counter[index]++
                          }"
                        />
                      </template>
                      <template v-slot:prepend-inner>
                        <v-icon
                          class="cursor-pointer"
                          icon="$prev"
                          @click="() => {if(counter[index] !== 0) {counter[index]--}}"
                        />
                      </template>
                    </v-text-field>
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-full" />
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-full" />
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-full" />
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-full" />
                  </div>
                  <div
                    class="flex flex-col w-[5.5rem] items-center justify-center"
                  >
                    <label for="date">03.11</label>
                    <input type="number" id="date" class="w-full" />
                  </div>
                </div>
                <div class="flex flex-row mt-5 items-center text-textColor">
                  <h1 class="mr-5">Allergének</h1>
                  <div
                    v-for="(allergens, index) in item.raw.allergens"
                    :key="index"
                  >
                    <p class="mr-2">{{ allergens.concat(",") }}</p>
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
            </div>
          </main>
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
