<script setup>
import MobileMenuIcon from "../../assets/icons/MobileMenuIcon.vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import CartIcon from "../../assets/icons/CartIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();

const { cartItems } = storeToRefs(cartStore);

const router = useRouter();

const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const emit = defineEmits(["menu-click"]);
</script>

<template>
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
    <v-btn value="search">
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
