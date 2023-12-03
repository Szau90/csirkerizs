import { reactive, ref, computed, watch } from "vue";
import { defineStore } from "pinia";

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
    isEqualToShippingDetails: false,
    invoiceData: {
      name: "",
      postCode: "",
      city: "",
      street: "",
      houseNumber: "",
    },
    isAccepted: false,
  });

  const orderSent = ref(false);

  const nameRules = ref([
    (value) => {
      if (value?.length > 3) return true;

      return "a névnek legalább 3 karakterből kell állnia";
    },
  ]);
  const inputRules = ref([
    (value) => {
      if (value?.trim() !== "") return true;

      return "a mező nem maradhat üresen";
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

  const form = ref(null);

  const reset = () => {
    form.value.reset();
  };

  watch(shippingData, () => {
   
  });

  const formIsValid = computed(() => {
    if (
      shippingData.name !== "" &&
      shippingData.city !== "" &&
      shippingData.street !== "" &&
      shippingData.postCode !== "" &&
      shippingData.houseNumber !== "" &&
      shippingData.phone !== "" &&
      shippingData.email !== "" &&
      shippingData.email.includes("@")
    )
      return true;
  });

  const invoiceDataIsValid = computed(() => {
    if (
      shippingData.invoiceData?.name !== "" &&
      shippingData.invoiceData?.postCode !== "" &&
      shippingData.invoiceData?.city !== "" &&
      shippingData.invoiceData?.street !== "" &&
      shippingData.invoiceData?.houseNumber !== ""
    )
      return true;
  });

  const handleSubmit = () => {
    if( formIsValid){

    }
  };

  return {
    shippingData,
    orderSent,
    nameRules,
    emailRules,
    inputRules,
    formIsValid,
    invoiceDataIsValid,
    handleSubmit,
    reset,
  };
});
