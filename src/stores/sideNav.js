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
      link: "/rólunk",
    },
    {
      title: "technológia",
      link: "/technológia",
    },
    {
      title: "szállítási terület",
      link: "/szállítási-terület",
    },
    {
      title: "viszonteladóknak",
      link: "/viszonteladóknak",
    },
    {
      title: "galéria",
      link: "/galéria",
    },
    {
      title: "shop",
      link: "/shop",
    },
    {
      title: "adatvédelmi szabályzat",
      link: "/adatvédelmi-szabályzat",
    },
    {
      title: "felhasználási feltételek",
      link: "/felhasználási-feltételek",
    },
  ]);

  return { navLinks };
});
