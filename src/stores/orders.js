import { reactive, ref, computed } from "vue";
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore("orders", () => {
 
  const shippingData = reactive({
    name: "",
    postCode: "",
    city: "",
    street: "",
    houseNumber: "",
    email: "",
    phone: "",
    shippingFee: 0,
    payByFee: 0,
    isEqualToShippingDetails: true,
    invoiceData: {
      name: "",
      postCode: "",
      city: "",
      street: "",
      houseNumber: "",
    },
    isAccepted: false,
    dataIsValid: false,
    dataIsValid2: true,

  });
  
  const nameRules = ref([
    (value) => {
      if (value?.length > 3) return true;
  
      return "a névnek legalább 3 karakterből kell állnia";
    },
  ]);
  const emailRules = ref([
    (value) => {
      if (value) return true;
  
      return "Az e-mail cím megadása kötelező.";
    },
    (value) => {
      if (/.+@.+\..+/.test(value)) return true;
  
      return "Kérem adjon meg egy valós e-mail címet";
    },
  ]);
  
  const userData = reactive({
    name: "",
    email: "",
  });
  
  const form = ref(null)
  
  
  
  const formIsValid = computed(() => {
    nameRules.value === true && emailRules.value === true
  });
   
  
  const reset = () => {
          form.value.reset()
        }
  

const handleSubmit = () => {
  shippingData.dataIsValid = true
}

  return { shippingData, nameRules, emailRules, formIsValid, reset };
});
