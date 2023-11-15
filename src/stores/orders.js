import { ref } from "vue";
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore("orders", () => {
 
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const formatedDate = ref(`${day}-${month}-${year}`);

  

  



  return { formatedDate, incrementQuantity };
});
