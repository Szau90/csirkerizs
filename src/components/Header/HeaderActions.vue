<template>
  <div
    class="hidden z-10 md:flex flex-row items-center justify-around rounded-full bg-primaryColor min-w-12 md:max-lg:max-w-[15rem] w-[19rem] xl:w-[22rem] 2xl:w-[24.687rem] 2xl:h-[6.625rem] flex-initial"
  >
   <SearchIcon class="w-[1.25rem] h-[1.25rem] lg:w-[1.913rem] lg:h-[1.913rem]"/>
    <input
      placeholder="keresés"
      class="flex bg-primaryColor  w-[5rem] h-[2rem] lg:w-[7.375rem] lg:h-[3rem] outline-0 border-r text-[15px] xl:text-[20px] text-white placeholder:text-white"
    />
    <CartIcon class="w-[1.25rem] h-[1.25rem] lg:w-[1.913rem] lg:h-[1.913rem]" />
    <UserIcon class="w-[1.25rem] h-[1.25rem] lg:w-[1.913rem] lg:h-[1.913rem]" />
  </div>
</template>

<script setup>
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import CartIcon from "../../assets/icons/CartIcon.vue";
import UserIcon from "../../assets/icons/UserIcon.vue";
</script>
