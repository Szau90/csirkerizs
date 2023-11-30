<script setup>
import { ref } from 'vue';
const openModal = (icon) => {
  modalOpen.value = true;
  selectedIcon.value = icon;
  console.log(selectedIcon.value.description);
};
const icons = ref([
  {
    id: 1,
    name: "zalaegerszeg cutler",
    image: "path/to/image1.jpg",
    description: "Description for icon 1...",
    x: 100, // Példaként az x pozíció
    y: 420, // Példaként az y pozíció
  },
  {
    id: 2,
    name: "sopron cutler",
    image: "path/to/image2.jpg",
    description: "Description for icon 2...",
    x: 100, // Másik példa x pozíció
    y: 200, // Másik példa y pozíció
  },
  {
    id: 3,
    name: "pécs cutler",
    image: "path/to/image1.jpg",
    description: "Description for icon 3...",
    x: 350, // Példaként az x pozíció
    y: 600, // Példaként az y pozíció
  },
  {
    id: 4,
    name: "Pápa corona fitness",
    image: "path/to/image2.jpg",
    description: "Description for icon 4...",
    x: 250, // Másik példa x pozíció
    y: 300, // Másik példa y pozíció
  },
  {
    id: 5,
    name: "cutler veszprém",
    image: "path/to/image1.jpg",
    description: "Description for icon 5...",
    x: 325, // Példaként az x pozíció
    y: 350, // Példaként az y pozíció
  },
  {
    id: 6,
    name: "Icon 6",
    image: "path/to/image2.jpg",
    description: "Description for icon 6...",
    x: 380, // Másik példa x pozíció
    y: 300, // Másik példa y pozíció
  },
  {
    id: 7,
    name: "tatabánya",
    image: "path/to/image2.jpg",
    description: "Description for icon 7...",
    x: 380, // Másik példa x pozíció
    y: 250, // Másik példa y pozíció
  },
  {
    id: 8,
    name: "budapest",
    image: "path/to/image2.jpg",
    description: "Description for icon 8...",
    x: 500, // Másik példa x pozíció
    y: 260, // Másik példa y pozíció
  },
  {
    id: 9,
    name: "miskolc",
    image: "src/assets/images/m1_fitness_miskolc.jpg",
    description: "Description for icon 9...",
    x: 750, // Másik példa x pozíció
    y: 100, // Másik példa y pozíció
  },
  {
    id: 10,
    name: "nyíregyháza",
    image: "path/to/image2.jpg",
    description: "Description for icon 10...",
    x: 900, // Másik példa x pozíció
    y: 150, // Másik példa y pozíció
  },
  {
    id: 11,
    name: "debrecen",
    image: "path/to/image2.jpg",
    description: "Description for icon 11...",
    x: 850, // Másik példa x pozíció
    y: 250, // Másik példa y pozíció
  },
  // ... több ikon
]);</script>

<template>
    <template v-for="icon in icons" :key="icon.id">
      <svg
      @click="openModal(icon)"
        xmlns="http://www.w3.org/2000/svg"
        width="20.25"
        height="29.25"
        :x="icon.x"
        :y="icon.y"
        viewBox="0 0 20.25 29.25"
        class="cursor-pointer"
      >
        <path
          id="Icon_ionic-ios-pin"
          data-name="Icon ionic-ios-pin"
          d="M18,3.375c-5.59,0-10.125,4.212-10.125,9.4C7.875,20.088,18,32.625,18,32.625S28.125,20.088,28.125,12.776C28.125,7.587,23.59,3.375,18,3.375ZM18,16.8a3.3,3.3,0,1,1,3.3-3.3A3.3,3.3,0,0,1,18,16.8Z"
          transform="translate(-7.875 -3.375)"
          fill="#ff5f5c"
        />
      </svg>
    </template>
</template>