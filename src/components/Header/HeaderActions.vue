<script setup>
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import CartIcon from "../../assets/icons/CartIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
import { computed, ref } from "vue";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();

const { cartItems } = storeToRefs(cartStore);

const totalQuantity = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});
</script>

<template>
  <div
    class="hidden z-10 md:flex flex-row items-center justify-around rounded-full bg-primaryColor min-w-12 md:max-lg:max-w-[14rem] w-[19rem] xl:w-[22rem] 2xl:w-[24.687rem] md:h-[4.5rem] xl:h-[5.625rem] flex-initial"
  >
    <SearchIcon
      class="w-[1.25rem] h-[1.25rem] lg:w-[1.687rem] lg:h-[1.687rem]"
    />
    <div class="w-[5rem] lg:w-[7.375rem]">
      <v-form>
        <v-text-field
          placeholder="keresés"
          variant="solo"
          bg-color="#FF5F5C"
          hide-details
          flat
          validate-on="submit"
          v-model="search"
          class="w-[5rem] h-[2rem] lg:w-[7.375rem] lg:h-[3rem] text-[15px] xl:text-[20px] text-white placeholder:text-white outline-none"
        />
      </v-form>
    </div>
    <div class="w-px h-12 bg-secoundaryColor" />
    <RouterLink v-if="totalQuantity > 1" to="/kosar">
      <v-badge :content="totalQuantity" floating color="error">
        <CartIcon class="w-[1.25rem] h-[1.25rem] lg:w-[1.853rem] lg:h-7" />
      </v-badge>
    </RouterLink>
    <RouterLink v-else to="/kosar">
      <CartIcon class="w-[1.25rem] h-[1.25rem] lg:w-[1.853rem] lg:h-7" />
    </RouterLink>
    <RouterLink to="/login">
      <UserIcon
        class="w-[1.25rem] h-[1.25rem] lg:w-[1.625rem] lg:h-[1.625rem]"
      />
    </RouterLink>
  </div>
</template>
