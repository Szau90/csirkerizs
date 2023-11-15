<script setup>
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import Orders from "./Orders.vue";
import { ref, computed} from "vue";
import { useMealsStore } from "../../stores/meals";
import { storeToRefs } from "pinia";

const store = useMealsStore();

const { formatedDate } = storeToRefs(store);

const { getDatesForWeek } = store;

const dates = getDatesForWeek()

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
    kalória: {
      type: Number,
      required: true,
      default: 0,
    },
    szénhidrát: {
      type: Number,
      required: true,
      default: 0,
    },
    fehérje: {
      type: Number,
      required: true,
      default: 0,
    },
    zsír: {
      type: Number,
      required: true,
      default: 0,
    },
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

const orders = ref([
{
    id: props.id,
    date: dates[0],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[1],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[2],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[3],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[4],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[5],
    quantity: 0,
  },
  {
    id: props.id,
    date: dates[6],
    quantity: 0,
  },
]);

const handleSubmit = () => {
  console.log(orders.value);
};
</script>

<template>
  <v-list-item
    :title="title"
    lines="five"
    density="comfortable"
    :subtitle="description"
    class="xl:w-[500px] 2xl:w-[720px] h-fit 2xl:h-[327px]"
  >
    <template v-slot:title>
      <h1 class="text-title-xl">
        {{ title }}
      </h1>
    </template>
    <div
      class="flex flex-row flex-wrap gap-4 2xl:gap-20 border-y border-lightBorder py-2 mt-3"
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
        class="flex flex-row flex-wrap gap-2"
      >
     
          <Orders v-for="(date, index) in orders" :date="date" :key="date.id" />
        
      </form>
    </div>

    <div
      class="flex flex-row xl:flex-wrap 2xl:flex-nowrap mt-5 items-center text-textColor"
    >
      <h1 class="mr-5">Allergének</h1>
      <div v-for="(allergen, index) in allergens" :key="index">
        <p class="mr-2">{{ allergen.concat(",") }}</p>
      </div>
      <div class="flex flex-row w-[18.85rem] sm:w-full">
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
