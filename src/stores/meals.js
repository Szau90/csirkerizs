import { ref } from "vue";
import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", () => {

  const categories = ref(["Reggelik (széngidrát mentes)"]);

  const meals = ref([
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Reggelik (széngidrát mentes)",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: true,
      isDailyOffer: true,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Tálcás menük",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: true,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Csirkék, marhák, halak",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az ételhangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Közepesen szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Elhanyagolható szénhidrát tartalmú köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Desszertek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Műanyag tányér és evőeszközök",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az ételhangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Reggelik (széngidrát mentes)",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Tálcás menük",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Csirkék, marhák, halak",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az ételhangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Közepesen szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Elhanyagolható szénhidrát tartalmú köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Desszertek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az étel hangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Műanyag tányér és evőeszközök",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az ételhangzatos neve",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Reggelik (széngidrát mentes)",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: true,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 8",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Tálcás menük",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 9",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Csirkék, marhák, halak",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "Az ételhangzatos neve 20",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 1",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Közepesen szénhidrátos köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 2",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Elhanyagolható szénhidrát tartalmú köretek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 3",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Desszertek",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: "termék 4",
      image: "src/assets/images/csirke_rizs_home-image.png",
      description:
        "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
      category: "Műanyag tányér és evőeszközök",
      allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
      energy: {
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44,
      },
      price: "2 390 Forint",
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false,
    },

   
  ]);

  
  const toggleWishlistStatus = (id) => {
    const meal = meals.value.find((m) => m.id === id);
    if (meal) {
      meal.isOnWishlist = !meal.isOnWishlist;
    }
  };
  



  return { meals, categories, toggleWishlistStatus, };
});
