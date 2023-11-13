import { ref } from "vue";
import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", () => {
  const maiDatum = new Date();

  const honap = ("0" + (maiDatum.getMonth() + 1)).slice(-2);
  const nap = ("0" + maiDatum.getDate()).slice(-2);
  const formatum = `${nap}.${honap}`;



  const dates = ref([
    {
      date: "03.11",
      quantity: 0,
    },
    {
      date: "04.11",
      quantity: 0,
    },
    {
      date: "05.11",
      quantity: 0,
    },
    {
      date: "06.11",
      quantity: 0,
    },
    {
      date: "07.11",
      quantity: 0,
    },
    {
      date: "08.11",
      quantity: 0,
    },
    {
      date: "09.11",
      quantity: 0,
    },
  ]);

  function incrementQuantity() {
    dates.value.quantity++;
  }

  return { dates, incrementQuantity };
});
