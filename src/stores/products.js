import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", () => {
  const products = ref([
    {
      id: 899,
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 5,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: 900,
      name: "Termék hangzatos neve",
      price: 100.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 5,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: 9001,
      name: "Termék hangzatos neve",
      price: 189.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 5,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 99.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 105.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Ital és ételtartók",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Fitnesz kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Sport eszközök",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 4,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Italok",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 3,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Sportszeletek",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 3,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Ital és ételtartók",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 3,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Táplálék kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 3,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Fitnesz kiegészítők",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 3,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Sport eszközök",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 2,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Italok",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 2,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Sportszeletek",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 2,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Termék hangzatos neve",
      price: 149.99,
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      category: "Ital és ételtartók",
      src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      rating: 5,
      flavour: "vanillia",
      weight: "450g",
      galery: [
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
      ],
    },
  ]);

  

  return { products };
});
