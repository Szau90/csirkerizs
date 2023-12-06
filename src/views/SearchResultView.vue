<script setup>
import { ref } from "vue";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import { useProductStore } from "../stores/products";
import { useMealsStore } from "../stores/meals";
import { useSearchStore } from "../stores/search";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";
import FoodItem from "../components/FoodorderPage/FoodItem.vue";
import ProductItem from "../components/ShopPage/ProductItem.vue";

const store = useProductStore();
const mealsStore = useMealsStore();
const searchStore = useSearchStore();
const cartStore = useCartStore()

const { search, products } = storeToRefs(store);
const { meals } = storeToRefs(mealsStore);
const { searchItems } = storeToRefs(searchStore);
const { snackbar, snackbarText, timeout } = storeToRefs(cartStore);

const currentPage = ref(null)
</script>

<template>
  <v-data-iterator
    :items="searchItems"
    :items-per-page="15"
    :search="search"
    :page.sync="currentPage"
  >
    <template v-slot:default="{ items }">
      <template v-for="(item, index) in items" :key="item.id">
        <main
          v-if="item.raw.isMeal"
          class="relative flex flex-col lg:flex-row items-center justify-center"
        >
          <img
            :src="item.raw.image"
            aspect-ratio="1.7778"
            contain
            width="380"
            height="380"
            class="z-10 xl:ml-0 w-[246px] md:w-[380px] lg:w-[280px] lg:max-xl:mt-10 xl:w-[380px] 2xl:w-[380px]"
          />
          <div
            class="lg:w-[945px] lg:-ml-[130px] xl:-ml-[190px] flex items-center justify-end shadow-lg rounded-[30px]"
          >
            <FoodItem
              :id="item.raw.id"
              :title="item.raw.title"
              :description="item.raw.description"
              :index="index"
              :energy="item.raw.energy"
              :allergens="item.raw.allergens"
              :price="item.raw.price"
              :image="item.raw.image"
            />
          </div>
        </main>
      </template>

      
        <ProductItem :items="items"/>
  
    </template>



    <template #footer="{ pageCount }">
        <footer
          color="#F0F0F8"
          class="flex w-full items-center justify-center text-body-2 mt-4"
        >
          <v-pagination
            v-if="pageCount > 1"
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
      </template>

  </v-data-iterator>
  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="#FF5F5C"
      location="bottom end"
      rounded="pill"
    >
      {{ snackbarText }} hozzáadva a kosárhoz
    </v-snackbar>
</template>
