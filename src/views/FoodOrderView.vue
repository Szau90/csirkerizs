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

const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1
  if (categories.value.includes(value))
  return value.toString()
}
const selected = ref(['Reggelik (széngidrát mentes)'])

const filter = (value, query, item) => {
  return value != null &&
          query != null &&
          typeof value === 'string' &&
          categories.value.includes(value)
}

const search = ref('Reggelik (széngidrát mentes)')

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
      :item-value="item => `${item.category}`"
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
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="12" xl="12">
            <v-sheet border>
              <v-list-item
                :title="item.raw.title"
                lines="two"
                density="comfortable"
                subtitle="Lorem ipsum dil orei namdie dkaf"
                item-selectable
              >
                <template v-slot:title>
                  <strong class="text-h6">
                    {{ item.raw.title }}
                  </strong>
                  <strong class="text-h6">
                    {{ item.raw.category }}
                  </strong>
                  <strong class="text-h6">
                    {{ item.raw.id }}
                  </strong>
                </template>
              </v-list-item>

              <v-table density="compact" class="text-caption">
                <tbody>
                  <tr align="right">
                    <th>DPI:</th>

                    <td>{{ categories.join(' ').toString() }}</td>
                  </tr>

                  <tr align="right">
                    <th>Buttons:</th>

                    <td>{{ item.raw.price }}</td>
                  </tr>

                  <tr align="right">
                    <th>Weight:</th>

                    <td>{{ item.raw.price }}</td>
                  </tr>

                  <tr align="right">
                    <th>Price:</th>

                    <td>${{ item.raw.price }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-col>
        </v-row>
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
