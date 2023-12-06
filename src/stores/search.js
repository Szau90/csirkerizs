import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const searchItems = ref([
 
      {
        id: 899,
        name: "Termék hangzatos neve",
        price: 149.99,
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 5,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 5,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 5,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Ital és ételtartók",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Fitnesz kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Sport eszközök",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 4,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Italok",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 3,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Sportszeletek",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 3,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Ital és ételtartók",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 3,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Táplálék kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 3,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Fitnesz kiegészítők",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 3,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Sport eszközök",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 2,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Italok",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 2,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Sportszeletek",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 2,
        flavour: "vanilia",
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
        description:
          "Whey protein isolate drink powder with glutamine and BCAA",
        category: "Ital és ételtartók",
        src: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        rating: 5,
        flavour: "vanilia",
        weight: "450g",
        galery: [
          "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
          "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
          "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
        ],
        
      },
 
    
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az étel hangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: true,
        isDailyOffer: true,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: true,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az ételhangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az étel hangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az étel hangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az étel hangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
      {
        id: Math.floor(Math.random() * 100).toString(),
        title: "Az ételhangzatos neve",
        image: "src/assets/images/csirke_rizs_home-image.png",
        description:
          "Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ",
        category: "Reggelik (szénhidrát mentes)",
        allergens: ["földimogyoró", "szója", "diófélék", "szezám"],
        energy: {
          kalória: 436,
          szénhidrát: 46,
          fehérje: 52.5,
          zsír: 3.44,
        },
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: true,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: true,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
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
        price: 2390,
        isOnWishlist: false,
        isHighlightedProduct: false,
        isDailyOffer: false,
        isUpdating: false,
        isMeal: true
      },
 
    ]);

  return { searchItems };
});
