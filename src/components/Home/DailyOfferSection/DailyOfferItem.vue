<script setup>
import WishlistIcon from "../../../assets/icons/WhishlistIcon.vue";
import AddedToWishlistIcon from "../../../assets/icons/AddedToWishlistIcon.vue";
import PrimaryBtn from "../../UI/PrimaryBtn.vue";
const props = defineProps({
  meal: {
    type: Object,
  },
});

</script>

<template>
  <section>
    <div
      class="flex flex-col items-center justify-end w-[24.812rem] h-[27.812rem] p-4 bg-inherit rounded-[30px] shadow-xl mt-40"
    >
      <div class="-mb-1/2 flex flex-row relative">
        <img
          :src="props.meal.image"
          alt="a plate of delicious food"
          width="287"
          height="286"
          class=" "
        />
        <WishlistIcon
          v-if="!props.meal.isOnWishlist"
          class="mt-1 cursor-pointer"
        />
        <AddedToWishlistIcon
          v-else
          class="mt-1 cursor-pointer absolute -right-14"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h1 class="text-title-xl text-center">{{ props.meal.title }}</h1>
        <p class="text-textColor text-center">
          {{ props.meal.description }}
        </p>
      </div>
      <ul class="flex flex-col items-center justify-center mt-2 text-textColor">
        <li
          v-for="(item, key) in props.meal.energy"
          :key="key"
          class="flex justify-between py-2 w-[22rem] border-b last:border-b-0"
        >
          <span>{{ key }}</span
          ><span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="flex flex-row items-center mt-9">
      <div
        class="w-40 h-12 flex items-center justify-center border-2 rounded-tl-[30px] rounded-br-[30px] bg-primaryColor text-white"
      >
        {{ props.meal.price }}
      </div>
      <PrimaryBtn title="rendeld meg!" class="w-[14.437rem]" />
    </div>
  </section>
</template>
