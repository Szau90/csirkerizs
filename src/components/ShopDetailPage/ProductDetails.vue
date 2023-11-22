<script setup>
import { ref, inject } from "vue";
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import Instagramicon from "@/assets/icons/InstagramIcon.vue";
import TwitterIcon from "@/assets/icons/TwitterIcon.vue";
import SimilarProducts from "./SimilarProducts.vue";
import ProductTable from "./ProductTable.vue";
import ProductDescription from "./ProductDescription.vue";
import ProductActions from "./ProductActions.vue";
import { useProductCounterStore } from "@/stores/productCounter";
import { storeToRefs } from "pinia";


const store = useProductCounterStore();

const { productCounter } = storeToRefs(store);

const { incrementQuantity, decrementQuantity } = store;

const product = inject('product')

defineProps([
  "id",
  "title",
  "subtitle",
  "description",
  "price",
  "image",
  "flavour",
  "weight",
  "gallery",
  "similarProducts",
]);
</script>

<template>
  <section>
    <div
      id="container"
      class="lg:w-[55.125rem] lg:h-[38.562rem] flex flex-col items-center md:flex-row mx-auto md:max-lg:px-2 md:mt-[8.75rem]"
    >
      <v-sheet
        class="w-[400px] lg:w-[490px]"
        color="#F0F0F8"
        elevation="4"
        rounded="xl"
      >
        <v-img :src="'../' + image" :alt="title" class="mx-auto lg:w-[437px]" />
        <div class="flex flex-row w-full px-3">
          <template v-for="image in gallery" :key="id">
            <v-img :src="'../' + image" :alt="title" />
          </template>
        </div>
      </v-sheet>
      <div class="flex flex-col w-[24.5rem] items-center gap-4">
        <div class="max-w-[20rem]">
          <h1 class="text-product-title font-semibold">{{ title }}</h1>
          <p class="text-content-md text-textColor">{{ subtitle }}</p>
          <p class="text-content-md text-[#B4B4B4]">{{ description }}</p>
          <ProductTable :flavour="flavour" :weight="weight" />
          <div
            class="w-full flex justify-between items-center h-14 px-5 rounded-full shadow-xl mt-10"
          >
            <button :disabled="productCounter === 1" @click="decrementQuantity">
              -</button
            ><span>{{ productCounter }} db</span
            ><button @click="incrementQuantity">+</button>
          </div>
          <ProductActions
            :id="id"
            :title="title"
            :description="description"
            :price="price"
            :product-counter="productCounter"
            :image="image"
            class="mt-5"
          />
        </div>
      </div>
    </div>
    <div
      id="social"
      class="lg:w-[55.125rem] mx-auto md:max-lg:px-2 mt-8 gap-8 md:gap-5 flex flex-row flex-wrap md:flex-nowrap items-center md:justify-start"
    >
      <PrimaryBtn title="vissza" class="w-56" />
      <p>megosztás</p>
      <FacebookIcon />
      <Instagramicon />
      <TwitterIcon />
    </div>
    <ProductDescription />
    <div class="lg:w-[55.125rem] mx-auto md:max-lg:px-2">
      <h1
        class="flex flex-col md:flex-row md:w-full md:max-lg:mx-auto md:mt-20 md:mb-14 items-center text-title-xl md:text-title gap-2"
      >
        <div class="hidden md:block w-1 h-10 bg-primaryColor rounded-full" />
        Hasonló termékek
        <div class="md:hidden h-1 w-10 mb-5 bg-primaryColor rounded-full" />
      </h1>

      <SimilarProducts :similarProducts="similarProducts" />
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  #container {
    margin-top: 2rem;
    text-align: center;
  }
  #social {
    justify-content: center;
  }
  h1 {
    margin-top: 1rem;
  }
  #description {
    padding: 0 2rem;
  }
}
</style>
