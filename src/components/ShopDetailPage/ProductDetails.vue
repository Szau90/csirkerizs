<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import Instagramicon from "@/assets/icons/InstagramIcon.vue";
import TwitterIcon from "@/assets/icons/TwitterIcon.vue";
import SimilarProducts from "./SimilarProducts.vue";
import ProductDescription from "./ProductDescription.vue";
import ProductContent from "./ProductContent.vue";
import ProductImage from "./ProductImage.vue";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();

const { snackbar, snackbarText, timeout } = storeToRefs(cartStore);

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
      <ProductImage :id="id" :title="title" :image="image" :gallery="gallery" />
      <ProductContent
        :id="id"
        :title="title"
        :subtitle="description"
        :description="description"
        :price="price"
        :image="image"
        :weight="weight"
        :flavour="flavour"
      />
    </div>
    <div
      id="social"
      class="lg:w-[55.125rem] mx-auto md:max-lg:px-2 mt-8 gap-8 md:gap-5 flex flex-row flex-wrap md:flex-nowrap items-center md:justify-start"
    >
      <PrimaryBtn title="vissza" class="w-56" />
      <p id="share">megosztás</p>
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
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="#FF5F5C"
      location="bottom end"
      rounded="xl"
    >
      {{ snackbarText }} hozzáadva a kosárhoz
    </v-snackbar>
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
  #share {
    margin: 0 1.5rem;
  }
  h1 {
    margin-top: 1rem;
  }
}
</style>
