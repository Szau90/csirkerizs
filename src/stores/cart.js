import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const count = ref(0);

  const items = ref([]);

  function increment() {
    count.value++;
  }

  return { count, items, increment };
});
