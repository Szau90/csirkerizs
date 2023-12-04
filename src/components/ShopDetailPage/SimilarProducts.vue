<script setup>
import { ref } from "vue";
import { VDataIterator } from "vuetify/lib/labs/components.mjs";
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

const { addToCart } = cartStore;

defineProps(["similarProducts"]);

const itemsPerPage = ref(3);

const currentPage = ref(1);

</script>

<template>
  <v-data-iterator
    :items="similarProducts"
    :items-per-page="itemsPerPage"
    :page.sync="currentPage"
  >
    <template v-slot:default="{ items }">
      <v-row class="flex items-center justify-center">
        <v-col v-for="(item, i) in items" :key="i" cols="9" sm="4" xl="4">
          <v-sheet
            min-height="386"
            color="#F0F0F8"
            elevation="2"
            :rounded="'xl'"
            class="pt-2 md:mt-14 lg:mt-20"
          >
            <v-img
              :src="'../' + item.raw.src"
              cover
              width="218"
              class="mx-auto"
              min-height="218"
            ></v-img>

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
        class="absolute left-0 flex w-full items-center justify-center text-body-2 mt-10"
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
</template>
