<script setup>
import BaseLayout from "../components/Layouts/BaseLayout.vue";
import PrimaryBtn from "../components/UI/PrimaryBtn.vue";
import { ref, computed, reactive } from "vue";
import { useMealsStore } from "../stores/meals";

const store = useMealsStore();

const meals = computed(() => store.meals);

const categories = ref(['Reggelik (széngidrát mentes)']);

const uniqueCategories = Array.from(
  new Set(meals.value.map((meal) => meal.category))
);

const data= reactive({
        itemsPerPage: 4,
        mice: [
          {
            name: 'Logitech G Pro X',
            color: '14, 151, 210',
            dpi: 16000,
            buttons: 8,
            weight: '63g',
            wireless: true,
            price: 149.99,
            description: 'Logitech G Pro X',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png',
          },
          {
            name: 'Razer DeathAdder V2',
            color: '12, 146, 47',
            dpi: 20000,
            buttons: 8,
            weight: '82g',
            wireless: false,
            price: 69.99,
            description: 'Razer DeathAdder V2',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png',
          },
          {
            name: 'Corsair Dark Core RGB',
            color: '107, 187, 226',
            dpi: 18000,
            buttons: 9,
            weight: '133g',
            wireless: true,
            price: 89.99,
            description: 'Corsair Dark Core RGB',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png',
          },
          {
            name: 'SteelSeries Rival 3',
            color: '228, 196, 69',
            dpi: 8500,
            buttons: 6,
            weight: '77g',
            wireless: false,
            price: 29.99,
            description: 'SteelSeries Rival 3',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png',
          },
          {
            name: 'HyperX Pulsefire FPS Pro',
            color: '156, 82, 251',
            dpi: 16000,
            buttons: 6,
            weight: '95g',
            wireless: false,
            price: 44.99,
            description: 'HyperX Pulsefire FPS Pro',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/5.png',
          },
          {
            name: 'Zowie EC2',
            color: '166, 39, 222',
            dpi: 3200,
            buttons: 5,
            weight: '90g',
            wireless: false,
            price: 69.99,
            description: 'Zowie EC2',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png',
          },
          {
            name: 'Roccat Kone AIMO',
            color: '131, 9, 10',
            dpi: 16000,
            buttons: 10,
            weight: '130g',
            wireless: false,
            price: 79.99,
            description: 'Roccat Kone AIMO',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png',
          },
          {
            name: 'Logitech G903',
            color: '232, 94, 102',
            dpi: 12000,
            buttons: 11,
            weight: '110g',
            wireless: true,
            price: 129.99,
            description: 'Logitech G903',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png',
          },
          {
            name: 'Cooler Master MM711',
            color: '58, 192, 239',
            dpi: 16000,
            buttons: 6,
            weight: '60g',
            wireless: false,
            price: 49.99,
            description: 'Cooler Master MM711',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png',
          },
          {
            name: 'Glorious Model O',
            color: '161, 252, 250',
            dpi: 12000,
            buttons: 6,
            weight: '67g',
            wireless: false,
            price: 49.99,
            description: 'Glorious Model O',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png',
          },
          {
            name: 'HP Omen Photon',
            color: '201, 1, 2',
            dpi: 16000,
            buttons: 11,
            weight: '128g',
            wireless: true,
            price: 99.99,
            description: 'HP Omen Photon',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png',
          },
          {
            name: 'Asus ROG Chakram',
            color: '10, 181, 19',
            dpi: 16000,
            buttons: 9,
            weight: '121g',
            wireless: true,
            price: 159.99,
            description: 'Asus ROG Chakram',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png',
          },
          {
            name: 'Razer Naga X',
            color: '100, 101, 102',
            dpi: 16000,
            buttons: 16,
            weight: '85g',
            wireless: false,
            price: 79.99,
            description: 'Razer Naga X',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png',
          },
          {
            name: 'Mad Catz R.A.T. 8+',
            color: '136, 241, 242',
            dpi: 16000,
            buttons: 11,
            weight: '145g',
            wireless: false,
            price: 99.99,
            description: 'Mad Catz R.A.T. 8+',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/14.png',
          },
          {
            name: 'Alienware 610M',
            color: '109, 110, 114',
            dpi: 16000,
            buttons: 7,
            weight: '120g',
            wireless: true,
            price: 99.99,
            description: 'Alienware 610M',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/15.png',
          },
        ],
      })

      const onClickSeeAll =  () => {
        data.itemsPerPage = data.itemsPerPage === 4 ? data.mice.length : 4
      }

</script>

<template>
  <BaseLayout>
    <template #sidebar>
      <div class="w-[372px]">
        <h1 class="text-title">Ételrendelés</h1>
        <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mt-6" />
        <PrimaryBtn title="Allergén táblázat" class="w-56" />
        <h2>Kategóriák</h2>
        <v-chip-group
          column
          multiple
          v-model="categories"
          variant="plain"
          class="w-[22.125rem]"
          mandatory
        >
          <v-chip
            color="#FF5F5C"
            filter
            v-for="cat in uniqueCategories"
            :key="cat"
            :value="cat"
            class="w-full"
            ><p class="text-textColor">{{ cat }}</p></v-chip
          >
        </v-chip-group>
      </div>
    </template>

    <div class="w-[1131px]">
      <div v-for="meal in meals" :key="meal.id" >
        <div v-if="categories.includes(meal.category)">
          <p>{{ meal.title }}</p>
          <p>{{ meal.category }}</p>
        </div>
      </div>
    </div>

   
    

    
  </BaseLayout>
</template>
