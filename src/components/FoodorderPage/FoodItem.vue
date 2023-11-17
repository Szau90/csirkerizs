<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import Orders from "./Orders.vue";
import { ref } from "vue";
import { useMealsStore } from "../../stores/meals";

const store = useMealsStore();

const { getDatesForWeek } = store;

const dates = ref(getDatesForWeek());

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
   required: true
  },
  allergens: {
    type: Array,
  },
  price: {
    type: String,
    required: true,
    default: "__NO_PRICE",
  },
});

const orders = ref(
  dates.value.map((date) => ({
    id: props.id,
    date,
    quantity: 0,
  }))
);

const handleSubmit = () => {
  const currentOrders = orders.value.map((order) => ({ ...order }));

  console.log(currentOrders);
  
  orders.value.forEach((order) => {
    order.quantity = 0;
  });
};
</script>

<template>
  <v-list-item
    :title="title"
    lines="five"
    density="comfortable"
    :subtitle="description"
    class="md:w-[720px] h-fit lg:max-xl:h-[280px] xl:h-[327px] md:max-2xl:text-content-md"
  >
    <template v-slot:title>
      <h1 class="md:text-center lg:text-start text-title-xl">
        {{ title }}
      </h1>
    </template>
    <template v-slot:subtitle>
      <h1 class="md:text-center lg:text-start md:max-2xl:text-content-md">
        {{ description }}
      </h1>
    </template>
    <div
      class="flex flex-row justify-center flex-wrap gap-4 2xl:gap-20 border-y border-lightBorder py-2 mt-3"
    >
      <div
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
      class="flex flex-row lg:flex-nowrap 2xl:flex-nowrap justify-center mt-3 items-center text-textColor"
    >
      <h1 class="mr-5">Allergének</h1>
      <div v-for="(allergen, index) in allergens" :key="index">
        <p class="mr-2">{{ allergen.concat(",") }}</p>
      </div>
      <div
        id="actions"
        class="flex before:flex-row md:max-2xl:justify-center my-4 w-[18.85rem] sm:w-full"
      >
        <div
          class="w-32 h-10 flex items-center justify-center border-2 rounded-l-[30px] border-none bg-primaryColor text-white md: text-content shadow-xl"
        >
          {{ price }}
        </div>
        <PrimaryBtn
          title="rendeld meg!"
          class="w-36 h-10 rounded-l-none text-content"
          @click="handleSubmit"
        />
      </div>
    </div>
  </v-list-item>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  #container {
    flex-wrap: wrap;
  }
  #actions {
    margin-left: 2rem;
  }
  h1 {
    text-align: center;
  }
}
</style>
