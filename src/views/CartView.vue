<script setup>
import { ref, computed } from "vue";
import CartItem from "../components/Cart/CartItem.vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";
import TheSummary from "../components/Cart/TheSummary.vue";
import ShippingData from "../components/Cart/ShippingData.vue";
import PayData from "../components/Cart/PayData.vue";
import OrderDetails from "../components/Cart/OrderDetails.vue";
import OrderSent from "../components/Cart/OrderSent.vue";
import { useOrdersStore } from "../stores/orders";

const store = useOrdersStore();

const { shippingData, orderSent, nameRules, emailRules, formIsValid } =
  storeToRefs(store);

const cartStore = useCartStore();

const cart = storeToRefs(cartStore);
const cartItems = cart.cartItems;

const items = ref(["kosarad", "szállítás", "fizetés", "összesítő"]);

const step = ref(1);
</script>

<template>
  <h1 v-if="cartItems.length < 1">a kosarad üres</h1>

  <div v-else class="w-full flex flex-col items-center">
    <div class="hidden md:block">
      <v-tabs
        v-model="step"
        bg-color="transparent"
        hide-slider
        selected-class="active"
        height="60"
      >
        <v-tab
          v-for="(item, index) in items"
          :key="item"
          :value="index + 1"
          rounded="xl"
          elevation="2"
          class="w-40 lg:w-44 mx-5"
          height="56"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </div>

    <v-window v-model="step" class="mt-12">
      <v-window-item :value="1">
        <div class="flex flex-col items-center xl:items-start xl:flex-row ">
          <CartItem />
          <TheSummary :step="step" @prev="step--" @next="step++"   class="2xl:mr-4" />
        </div>
      </v-window-item>
      <v-window-item :value="2">
        <div
          class="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-32 xl:gap-60"
        >
          <ShippingData />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="step++"
            class="xl:mr-4"
          />
        </div>
      </v-window-item>
      <v-window-item :value="3">
        <div
          class="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-32 xl:gap-64"
        >
          <PayData />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="step++"
            class="xl:mr-4"
          />
        </div>
      </v-window-item>
      <v-window-item :value="4">
        <OrderSent v-if="orderSent" />
        <div v-else class="flex flex-col-reverse xl:flex-row  2xl:w-[1257px] mx-auto gap-12">
          <OrderDetails />
          <TheSummary :step="step" @prev="step--" @next="step++" class="xl:mr-4" />
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped>
.active {
  background-color: #ff5f5c;
  color: white;
}
</style>
