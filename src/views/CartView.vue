<script setup>
import { ref, computed, reactive } from "vue";
import CartItem from "../components/Cart/CartItem.vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";
import TheSummary from "../components/Cart/TheSummary.vue";
import ShippingData from "../components/Cart/ShippingData.vue";
import PayData from "../components/Cart/PayData.vue";
import OrderDetails from "../components/Cart/OrderDetails.vue";
import OrderSent from "../components/Cart/OrderSent.vue";
import { useOrdersStore } from "../stores/orders";
import CartIcon from "../assets/icons/tabIcons/CartIcon.vue";
import ArrowRight from "../assets/icons/tabIcons/ArrowIcon.vue";
import ShippingIcon from "../assets/icons/tabIcons/ShippingIcon.vue";
import PayIcon from "../assets/icons/tabIcons/PayIcon.vue";
import CheckmarkIcon from "../assets/icons/tabIcons/CheckmarkIcon.vue";

const store = useOrdersStore();

const {
  shippingData,
  orderSent,
  nameRules,
  emailRules,
  formIsValid,
  invoiceDataIsValid,
} = storeToRefs(store);

const cartStore = useCartStore();

const cart = storeToRefs(cartStore);
const cartItems = cart.cartItems;

const items = ref(["kosarad", "szállítás", "fizetés", "összesítő"]);

const step = ref(1);
</script>

<template>
  <h1 v-if="cartItems.length < 1">a kosarad üres</h1>

  <div v-else class="md:mt-20 lg:mt-32 w-full flex flex-col items-center">
    <div class="hidden md:block">
      <v-tabs
        v-model="step"
        bg-color="transparent"
        hide-slider
        selected-class="active"
        height="60"
      >
        <v-tab
          :value="1"
          rounded="pill"
          elevation="2"
          class="w-40 lg:w-56 mx-5"
          height="56"
          :prepend-icon="CartIcon"
          :append-icon="ArrowRight"
        >
          kosarad
        </v-tab>
        <v-tab
          :value="2"
          rounded="pill"
          elevation="2"
          class="w-40 lg:w-56 mx-5"
          height="56"
          :prepend-icon="ShippingIcon"
          :append-icon="ArrowRight"
          :disabled="step < 2"
        >
          szállítás
        </v-tab>
        <v-tab
          :value="3"
          rounded="pill"
          elevation="2"
          class="w-40 lg:w-56 mx-5"
          height="56"
          :prepend-icon="PayIcon"
          :append-icon="ArrowRight"
          :disabled="step < 3"
        >
          fizetés
        </v-tab>
        <v-tab
          :value="4"
          rounded="pill"
          elevation="2"
          class="w-40 lg:w-56 mx-5"
          height="56"
          :prepend-icon="CheckmarkIcon"
          :append-icon="ArrowRight"
          :disabled="step < 4"
        >
          összesítő
        </v-tab>
      </v-tabs>
    </div>

    <v-window v-model="step" class="mt-12">
      <v-window-item :value="1">
        <div class="flex flex-col items-center xl:items-start xl:flex-row">
          <CartItem />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="step++"
            class="2xl:mr-4 lg:max-xl:w-[690px]"
          />
        </div>
      </v-window-item>
      <v-window-item :value="2">
        <div
          class="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-20 xl:gap-60"
        >
          <ShippingData />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="formIsValid ? step++ : step"
            class="lg:mr-4"
          />
        </div>
      </v-window-item>
      <v-window-item :value="3">
        <div
          class="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-20 xl:gap-64"
        >
          <PayData />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="
              shippingData.isEqualToShippingDetails || invoiceDataIsValid
                ? step++
                : step
            "
            class="lg:mr-4"
          />
        </div>
      </v-window-item>
      <v-window-item :value="4">
        <OrderSent v-if="orderSent" />
        <div
          v-else
          class="flex flex-col-reverse xl:flex-row 2xl:w-[1257px] mx-auto gap-12"
        >
          <OrderDetails />
          <TheSummary
            :step="step"
            @prev="step--"
            @next="step++"
            class="xl:mr-4"
          />
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped>
.active {
  background-color: #ff5f5c;
  color: white;
  fill: white;
}
</style>
