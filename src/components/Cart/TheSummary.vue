<script setup>
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useOrdersStore } from "../../stores/orders";


const store = useOrdersStore();

const { shippingData } = storeToRefs(store);

const props = defineProps({
  step: {
    type: Number,
  }
});

const emit = defineEmits([
  'next',
  'prev'
])


function buttonClick() {
  emit('next')

console.log(props.step + 1)
}

const prev = () => {
  emit('prev')
  console.log(props.step - 1)
}
const cartStore = useCartStore();

const cart = storeToRefs(cartStore);

const cartItems = cart.cartItems;



const totalPrice = computed(() => {
  return (
    cartItems.value.reduce((total, item) => total + item.calculatedPrice, 0) +
    shippingData.value.shippingFee + shippingData.value.payByFee
  );
});
</script>

<template>
  <div class="w-[443px] h-[610px] shadow-xl rounded-card ml-20 mb-10">
    <div
      class="w-44 h-14 rounded-full shadow-xl flex items-center justify-center bg-transparent"
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
    <div class="w-[25rem] h-px bg-lightBorder mt-8 mx-auto" />
    <div class="flex justify-between px-5 mt-8">
      <p class="min-w-[12.5rem]">Szállítás / utánvét</p>
      <p class="min-w-[6rem] text-center">{{ shippingData.shippingFee +  shippingData.payByFee + " " }}Forint</p>
    </div>
    <div class="w-[25rem] h-px bg-lightBorder mt-8 mx-auto" />
    <div class="flex justify-between px-5 mt-8">
      <p class="min-w-[12.5rem] font-bold">Összesen</p>
      <p class="min-w-[6rem] text-center">
        {{ totalPrice.toFixed(0) + " " }}Forint
      </p>
    </div>
    <div class="w-[25rem] h-px bg-lightBorder mt-8 mx-auto" />
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
        class="w-44 h-14 bg-transparent rounded-full shadow-xl"
      >
        vissza
      </button>
      <button
      v-if="step < 4"
        @click="buttonClick"
        class="w-44 h-14 bg-primaryColor rounded-full text-white"
      >
        tovább
      </button>
    </div>
  </div>
</template>
