<script setup>
import Orders from "../FoodorderPage/Orders.vue";
import CloseNotificationIcon from "../../assets/icons/CloseNotificationIcon.vue";
import { ref, computed } from "vue";
import { useMealsStore } from "../../stores/meals";
import { useCartStore } from "../../stores/cart";
import { storeToRefs } from "pinia";

const store = useMealsStore();

const { getDatesForWeek } = store;

const dates = ref(getDatesForWeek());
const cartStore = useCartStore();

const { cartItems, isUpdating } = storeToRefs(cartStore);

const { addMealToCart } = cartStore;

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "__NO_ID",
  },
  title: {
    type: String,
    required: true,
    default: "__NO_TITLE",
  },
  description: {
    type: String,
    required: true,
    default: "__NO_DESCRIPTION",
  },
  index: {
    type: Number,
    required: true,
    default: 0,
  },
  energy: {
    type: Object,
    required: true,
  },
  allergens: {
    type: Array,
  },
  price: {
    type: Number,
    required: true,
    default: "__NO_PRICE",
  },
  image: {
    type: String,
    required: true,
  },
});

const orders = ref(
  dates.value.map((date) => ({
    date: { date, quantity: 0 },
  }))
);

const handleSubmit = () => {
  const currentOrders = orders.value.map((order) => ({ ...order }));

  const ordersWithQuantity = currentOrders.filter(
    (order) => order.date.quantity > 0
  );

  const totalQuantity = ordersWithQuantity.reduce(
    (total, order) => total + order.date.quantity,
    0
  );
  console.log(ordersWithQuantity);
  const mealData = {
    id: props.id,
    name: props.title,
    description: props.description,
    energy: props.energy,
    allergens: props.allergens,
    price: props.price,
    orders: ordersWithQuantity,
    image: props.image,
    quantity: totalQuantity,
    isMeal: true,
    isUpdating: false,
  };

  addMealToCart(mealData);

  orders.value.forEach((order) => {
    order.quantity = 0;
  });
};
</script>

<template>
  <section
    class=" flex flex-col items-center justify-center  lg:flex-row z-100"
  >
    <img
      :src="image"
      aspect-ratio="1.7778"
      contain
      width="380"
      height="380"
      class="z-10 hidden lg:block lg:mt-6  xl:ml-0 w-[246px] md:w-[280px] lg:w-[360px] xl:w-[380px] 2xl:w-[380px]"
    />
    <div
      class="relative w-[360px] xl:px-10 md:w-[690px] lg:w-[1150px] xl:w-[941px] lg:h-[300px] 2xl:h-[327px] lg:-ml-[125px]  xl:-ml-[190px] flex items-center justify-end shadow-lg rounded-[30px] bg-secoundaryColor"
    >
      <div
        class="w-12 h-12 absolute top-2 right-2 cursor-pointer flex items-center justify-center rounded-full shadow-lg place-self-end"
      >
        <CloseNotificationIcon
          class="cursor-pointer z-50"
          @click="isUpdating = !isUpdating"
        />
      </div>
      <div
        class="flex flex-col items-center w-[360px] md:w-[684px]  xl:w-[684px] h-fit lg:max-2xl:h-[280px] 2xl:h-[327px] md:max-2xl:text-content-md"
      >
      <img
      :src="image"
      aspect-ratio="1.7778"
      contain
      width="160"
      height="160"
      class="lg:hidden"
    />
       
          <h1 class="text-title-sm md:text-center lg:text-start md:text-title-xl">
            {{ title }}
          </h1>
       
    
          <h1 id="desc" class="text-center lg:text-start text-content-sm md:text-content-md">
            {{ description }}
          </h1>
      
        <div
          class="flex flex-row  justify-center flex-wrap gap-4 2xl:gap-20 border-y border-lightBorder py-2 mt-3 text-content-sm md:text-content"
        >
          <div
            id="energy"
            v-for="(energy, key) in energy"
            :key="key"
            class="flex flex-row gap-5 text-textColor"
          >
            <p>{{ key }}</p>
            <p class="font-semibold">{{ energy }}</p>
          </div>
        </div>
        <div
          class="flex flex-row py-2 gap-2 items-center justify-center border-b border-b-lightBorder text-textColor"
        >
          <form
            action="submit"
            @submit.prevent="handleSubmit"
            class="flex flex-row justify-center md:max-2xl:justify-center flex-wrap gap-2"
          >
            <Orders v-for="order in orders" :order="order" :key="order.id" />
          </form>
        </div>

        <div
          id="container"
          class="flex flex-row  md:flex-nowrap  justify-center mt-3 items-center text-textColor text-content-sm md:text-content"
        >
          <h1 class="mr-5">Allergének</h1>
          <div v-for="(allergen, index) in allergens" :key="index">
            <p class="mr-2">{{ allergen.concat(",") }}</p>
          </div>
          <div
          id="actions"
            class="flex before:flex-row md:max-2xl:justify-center my-4 w-[18.85rem] sm:w-full"
          >
            <button
              @click="isUpdating = !isUpdating"
              class="w-32 h-10 flex items-center justify-center border-2 rounded-full bg-transparent md: text-content shadow-xl"
            >
              Vissza
            </button>
            <button
              type="submit"
              class="w-32 h-10 flex items-center justify-center border-2 rounded-full bg-primaryColor text-white md: text-content shadow-xl"
              @click="handleSubmit"
            >
              rendben
            </button>
          </div>
        </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 767px) {
    #desc {
      
        margin: 1rem 0;
    }
    #energy {
        gap: 0.25rem;
    }
    #actions{
        gap: 1rem;
    }
    #container {
        flex-wrap: wrap;
    }
}
</style>