import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideNavStore = defineStore("sidenav", () => {
  const navLinks = ref([
    {
      title: "vip",
      link: "/vip",
    },
    {
      title: "kik vagyunk?",
      link: "/rolunk",
    },
    {
      title: "technológia",
      link: "/technologia",
    },
    {
      title: "szállítási terület",
      link: "/szallitasi-terulet",
    },
    {
      title: "viszonteladóknak",
      link: "/viszonteladoknak",
    },
    {
      title: "galéria",
      link: "/galeria",
    },
    {
      title: "shop",
      link: "/shop",
    },
    {
      title: "adatvédelmi szabályzat",
      link: "/adatvedelmi-szabalyzat",
    },
    {
      title: "felhasználási feltételek",
      link: "/felhasznalasi-feltetelek",
    },
  ]);

  return { navLinks };
});
