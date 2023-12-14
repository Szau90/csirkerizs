<script setup>
import MobileMenuIcon from "../../assets/icons/MobileMenuIcon.vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import CartIcon from "../../assets/icons/CartIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/cart";
import { useProductStore } from "../../stores/products";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const productStore = useProductStore();

const { cartItems } = storeToRefs(cartStore);
const { search } = storeToRefs(productStore);

const router = useRouter();

const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const emit = defineEmits(["menu-click"]);
const showInput = ref(false);

const handleSubmit = () => {
  showInput.value= false;
  router.push('/searchresult')
}
</script>

<template>
  <v-form v-if="showInput" @submit.prevent="handleSubmit">
    <v-text-field
      class="fixed bottom-[75px] left-1/2 -translate-x-1/2 w-100"
      variant="solo"
      rounded="pill"
      v-model="search"
      hide-details
      flat
      validate-on="submit"
      clearable
    ></v-text-field>
  </v-form>
  <v-bottom-navigation
    :elevation="0"
    class="d-sm-none fixed top-screen"
    bg-color="#FF5F5C"
    rounded="pill"
    height="72"
    grow
  >
    <v-btn value="menu" @click="emit('menu-click')">
      <MobileMenuIcon />
    </v-btn>
    <v-btn
      value="search"
      @click="
        () => {
          showInput = !showInput;
        }
      "
    >
      <SearchIcon />
    </v-btn>
    <v-btn v-if="totalQuantity > 1" value="cart" @click="router.push('/kosar')">
      <v-badge :content="totalQuantity" floating color="error">
        <CartIcon />
      </v-badge>
    </v-btn>
    <v-btn v-else value="cart" @click="router.push('/kosar')">
      <CartIcon />
    </v-btn>

    <v-btn value="login" @click="router.push('/login')">
      <UserIcon />
    </v-btn>
  </v-bottom-navigation>
</template>
