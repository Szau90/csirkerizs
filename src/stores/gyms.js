import { ref } from "vue";

import { defineStore } from "pinia";

export const useGymStore = defineStore("gym", () => {
  const gyms = ref([
    {
      id: 1,
      city: "Zalaegerszeg",
      locations: [
        { name: "Cutler Fitness Zalaegerszeg", address: "8900 Zalaegerszeg" },
      ],
      x: 115,
      y: 420,
    },
    {
      id: 2,
      city: "Sopron",
      locations: [
        { name: "Cutler Gym", address: "9400 Sopron, Lackner Kristóf u. 35" },
      ],
      x: 115,
      y: 200,
    },
    {
      id: 3,
      city: "Pécs",
      locations: [
        {
          name: "Cutler Gym & Fitness Center",
          address: "7631 Pécs, Megyeri út 76",
        },
      ],
      x: 365,
      y: 600,
    },
    {
      id: 4,
      city: "Pápa",
      locations: [
        { name: "Corona fitness & cafe", address: "8500 Pápa, Korona utca 21" },
      ],
      x: 265,
      y: 300,
    },
    {
      id: 5,
      city: "Veszprém",
      locations: [
        { name: "Cutler Veszprém", address: "8200 Veszprém, Török Ignác u. 3" },
      ],
      x: 340,
      y: 350,
    },
    {
      id: 6,
      city: "Székesfehérvár",
      locations: [
        { name: "Cutler Gym", address: "8000 Székesfehérvár, Balatoni út 2" },
        {
          name: "Union Fallabda és Fitnesz Centrum",
          address: "8000 Székesfehérvár, Király sor 17",
        },
      ],
      x: 395,
      y: 300,
    },
    {
      id: 7,
      city: "Tatabánya",
      locations: [
        {
          name: "Cutler Pulzus Fitness",
          address: "2800 Tatabánya, Erdész u. 1",
        },
      ],
      x: 395,
      y: 250,
    },
    {
      id: 8,
      city: "Budapest",
      locations: [
        {
          name: "Fitness 5 Fitness & Gym Buy Way",
          address: "2120 Dunakeszi, Buy Way Dunakeszi, Nádas u. 8",
        },
        {
          name: "FITNESS FIVE & GYM - BUDAÖRS",
          address: "2040 Budaörs, Építők útja",
        },
        {
          name: "Villa Grande Fitness és Rendezvénycentrum",
          address: "2100 Gödöllő, Táncsics Mihály út 5",
        },
        {
          name: "PRIMEFIT-Újpalota",
          address: "1157 Budapest, Zsókavár u. 41-47",
        },
        {
          name: "Fitness 5 & Gym",
          address: "1173 Budapest, Pesti út 237",
        },
        {
          name: "FITNESS 5 & GYM SALLAI",
          address: "1184 Budapest, Cziffra György u. 15/b",
        },
        {
          name: "Fitness 5 and GYM kispest",
          address: "1191 Budapest",
        },
        {
          name: "PRIMEFIT",
          address: "1103 Budapest, Gyömrői út 99",
        },
        {
          name: "Gym Suleiman",
          address: "1193 Budapest, Csokonai u. 3",
        },
        {
          name: "FITNESS five & GYM - Kőbánya",
          address: "1102 Budapest, Liget tér 1",
        },
        {
          name: "Scitec Gold (Lurdy)",
          address: "1097 Budapest, Könyves Kálmán krt. 12-14",
        },
        {
          name: "Fitness 5 Savoya",
          address: "1117 Budapest, Hunyadi János út 19",
        },
        {
          name: "Fitness 5 & Gym - Campon",
          address: "1222 Budapest, Nagytétényi út 37-43. I",
        },
        {
          name: "Klub Korona Fitnesz",
          address: "1025 Budapest, Törökvész út 87-91-5. emelet",
        },
      ],
      x: 515,
      y: 260,
    },
    {
      id: 9,
      city: "Miskolc",
      locations: [
        {
          name: "M1 Fitness Kft",
          address: "3526 Miskolc, Szeles u. 1",
        },
        {
          name: "BB Gym Miskolc Edzőterem és Sportbár - gym",
          address: "3526 Miskolc, Szeles u. 71",
        },
        {
          name: "Fitt Paradicsom",
          address: "3526 Miskolc, Régiposta u. 16",
        },
      ],
      x: 765,
      y: 100,
    },
    {
      id: 10,
      city: "Nyíregyháza",
      locations: [
        {
          name: "Cutler Gym",
          address: "4400 Nyíregyháza, Vay Ádám krt. 20",
        },
      ],
      x: 915,
      y: 150,
    },
    {
      id: 11,
      city: "Debrecen",
      locations: [
        {
          name: "Cutler Gym",
          address: "4032 Debrecen, Ötvenhatosok tere 6-a",
        },
      ],
      x: 865,
      y: 250,
    },
  ]);

  const modalOpen = ref(false);
  const selectedIcon = ref(null);

  const openModal = (icon) => {
    modalOpen.value = true;
    selectedIcon.value = icon;
    console.log(selectedIcon.value.description);
  };

  const closeModal = () => {
    modalOpen.value = false;
    selectedIcon.value = null;
  };
  return { gyms, modalOpen, selectedIcon, openModal, closeModal };
});
