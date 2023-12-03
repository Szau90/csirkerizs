<script setup>
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useOrdersStore } from "../../stores/orders";

const store = useOrdersStore();

const { shippingData, orderSent } = storeToRefs(store);

const props = defineProps({
  step: {
    type: Number,
  },
});

const emit = defineEmits(["next", "prev"]);

function buttonClick() {
  emit("next");
}

const handleOrder = () => {
  orderSent.value = !orderSent.value
  console.log(shippingData.value)
}

const prev = () => {
  emit("prev");
};
const cartStore = useCartStore();

const cart = storeToRefs(cartStore);

const cartItems = cart.cartItems;

const totalPrice = computed(() => {
  return (
    cartItems.value.reduce((total, item) => total + item.calculatedPrice, 0) +
    shippingData.value.shippingFee +
    shippingData.value.payByFee
  );
});
</script>

<template>
  <section class=" md:mt-10 py-2 w-[360px] md:w-[690px] lg:w-[443px] text-content-sm md:text-content 2xl:w-[443px] h-fit shadow-xl rounded-card 2xl:ml-20 mb-10">
    <div
      class=" w-28 h-8 md:w-44 md:h-14 rounded-full shadow-xl flex items-center justify-center bg-transparent"
    >
      <p class="text-primaryColor">Összegzés</p>
    </div>
    <template v-for="item in cartItems" :key="item.id">
      <div class="flex flex-row justify-between px-5 mt-10">
        <p class="min-w-[12.5rem]">{{ item.name }}</p>
        <div
          class="min-w-[3rem] flex flex-row items-center justify-center gap-2 text-textColor"
        >
          <p>
            {{ item.quantity }}
          </p>
          <p>
            {{ item.isMeal ? "adag" : "db" }}
          </p>
        </div>
        <p class="min-w-[6rem] text-center">
          {{ item.calculatedPrice.toFixed(0) + " Forint" }}
        </p>
      </div>
    </template>
    <div class="h-px bg-lightBorder mt-8 mx-5" />
    <div class="flex justify-between px-5 mt-8">
      <p class="min-w-[12.5rem]">Szállítás / utánvét</p>
      <p class="min-w-[6rem] text-center">
        {{ shippingData.shippingFee + shippingData.payByFee + " " }}Forint
      </p>
    </div>
    <div class="h-px bg-lightBorder mt-8 mx-5" />
    <div class="flex justify-between px-5 mt-8">
      <p class="min-w-[12.5rem] font-bold">Összesen</p>
      <p class="min-w-[6rem] text-center">
        {{ totalPrice.toFixed(0) + " " }}Forint
      </p>
    </div>
    <div class=" h-px bg-lightBorder mt-8 mx-5" />
    <v-text-field
      variant="solo"
      rounded="xl"
      label="kuponkódod"
      class="px-5 mt-8"
      hide-details
    ></v-text-field>
    <div class="w-full mt-8 px-5 flex justify-end">
      <button
        v-if="step > 1"
        @click="prev"
        class="w-28 h-8 md:w-44 md:h-14 bg-transparent rounded-full shadow-xl"
      >
        vissza
      </button>
      <button
        v-if="step < 4"
        @click="buttonClick"
        class="w-28 h-8 md:w-44 md:h-14 bg-primaryColor rounded-full text-white"
      >
        tovább
      </button>
      <button
        v-if="step === 4 && shippingData.isAccepted"
        class="w-28 h-8 md:w-44 md:h-14 bg-primaryColor rounded-full text-white"
        @click="handleOrder"
      >
        megrendelem
      </button>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width:767px) {
  section {
    margin-top: 2rem;
  }
}
</style>
