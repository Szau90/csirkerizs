<script setup>
import WishlistIcon from "../../../assets/icons/WhishlistIcon.vue";
import AddedToWishlistIcon from "../../../assets/icons/AddedToWishlistIcon.vue";
import PrimaryBtn from "../../UI/PrimaryBtn.vue";
import { useMealsStore } from "../../../stores/meals";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { filename } from 'pathe/utils' 


const router = useRouter()

const handleClick= () => {
  router.push('/etelrendeles')
}

const store = useMealsStore();

const toggleWhishlist = computed(() => store.toggleWishlistStatus);
const props =defineProps({
  meal: {
    type: Object,
  },
});

const glob = import.meta.glob('@/assets/images/*.png', { eager: true })

const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)


</script>

<template>
  <section class="p-4 mt-9 lg:mt-20">
    <div
      class="flex flex-col items-center justify-end w-[18.85rem] sm:w-[24.812rem] h-[27.812rem] p-4 bg-inherit rounded-[30px] shadow-xl mt-40"
    >
      <div class="-mb-1/2 flex flex-row relative">
        <v-img
          :src="images[props.meal.image]"
          alt="a plate of delicious food"
          width="287"
          height="286"
          class=""
        />
        
        <div
          v-if="!meal.isOnWishlist"
          class="w-16 h-16 flex justify-center items-center rounded-full shadow-lg bg-inherit mt-1 cursor-pointer absolute  -right-14"
        >
          <WishlistIcon class="" @click="toggleWhishlist(meal.id)" />
        </div>
        <AddedToWishlistIcon
          v-else
          class="mt-1 cursor-pointer absolute -right-14"
          @click="toggleWhishlist(meal.id)"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h1 class="text-title-xl text-center">{{ meal.title }}</h1>
        <p class="text-textColor text-center">
          {{ meal.description }}
        </p>
      </div>
      <ul class="flex flex-col items-center justify-center mt-2 text-textColor">
        <li
          v-for="(item, key) in meal.energy"
          :key="key"
          class="flex justify-between py-2 w-[16.812rem] sm:w-[22rem] last:border-b-0"
        >
          <span>{{ key }}</span
          ><span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div
      class="flex flex-row w-[18.85rem] sm:w-full items-center justify-center mt-5"
    >
      <div
        id="price"
        class="w-40 h-14 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
      >
        {{ meal.price }} Forint
      </div>
      <PrimaryBtn
        id="button"
        title="rendeld meg!"
        class="w-[14.437rem] h-14 rounded-l-none text-content"
        @click="handleClick"
      />
    </div>
  </section>
</template>

<style scoped>
li {
  border-bottom: 1px solid #d9d9e5;
}
</style>
