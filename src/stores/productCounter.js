import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductCounterStore = defineStore("product-counter", () => {
  const productCounter = ref(1);

  const incrementQuantity = () => {
    productCounter.value++;
  };
  const decrementQuantity = () => {
    productCounter.value--;
  };

  return { productCounter, incrementQuantity, decrementQuantity };
});
