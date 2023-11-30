<script setup>
import { ref, computed } from "vue";
import CartItem from "../components/Cart/CartItem.vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";
import TheSummary from "../components/Cart/TheSummary.vue";
import ShippingData from "../components/Cart/ShippingData.vue";
import PayData from "../components/Cart/PayData.vue";
import OrderDetails from "../components/Cart/OrderDetails.vue";
import { useOrdersStore } from "../stores/orders";

const store = useOrdersStore();

const { shippingData, nameRules, emailRules, formIsValid } = storeToRefs(store);

const cartStore = useCartStore();

const cart = storeToRefs(cartStore);
const cartItems = cart.cartItems;

const items = ref(["kosarad", "szállítás", "fizetés", "összesítő"]);

const step = ref(1);

const isValid =  computed(()=> {
if (step.value === 2 && shippingData.value.dataIsValid) {
  return true
}
})
const isValid2 =  computed(()=> {
  if (step.value === 3 && shippingData.value.dataIsValid2) {
  return true
}
})





const next = () => {
  step.value++
};
</script>

<template>
  <h1 v-if="cartItems.length < 1">a kosarad üres</h1>

  <v-card v-else color="transparent" elevation="0">
    <v-tabs
      v-model="step"
      bg-color="transparent"
      hide-slider
      selected-class="active"
      height="60"
      class="w-[1011px] mx-auto"
    >
      <v-tab
        v-for="(item, index) in items"
        :key="item"
        :value="index + 1"
        rounded="xl"
        elevation="2"
        class="w-44 mx-5"
        height="56"
        :disabled=" formIsValid || isValid2"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="step" class="mt-12" >
      <v-window-item :value="1">
        <div class="flex flex-row">
          <CartItem />
          <TheSummary :step="step" @prev="step--" @next="next" />
        </div>
      </v-window-item>
      <v-window-item :value="2" >
        <div class="flex w-[1257px] mx-auto">
          <ShippingData />
          <TheSummary :step="step" @prev="step--" @next="next" />
        </div>
      </v-window-item>
      <v-window-item :value="3">
        <div class="flex w-[1257px] mx-auto">
          <PayData />
          <TheSummary :step="step" @prev="step--" @next="next" />
        </div>
      </v-window-item>
      <v-window-item :value="4">
        <OrderDetails />
        <TheSummary :step="step" @prev="step--" @next="next" />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>
.active {
  background-color: #ff5f5c;
  color: white;
}
</style>
