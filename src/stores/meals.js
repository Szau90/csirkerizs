import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMealsStore = defineStore('meals', () => {

  const countMeals = ref(0)
  

  const meals = ref([
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 1',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Reggelik (széngidrát mentes)',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: true,
      isDailyOffer: true
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 2',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Tálcás menük',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: true
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 3',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Csirkék, marhák, halak',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 4',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 5',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Közepesen szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 6',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Elhanyagolható szénhidrát tartalmú köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 7',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Desszertek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 8',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Műanyag tányér és evőeszközök',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 9',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Reggelik (széngidrát mentes)',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 10',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Tálcás menük',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 11',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Csirkék, marhák, halak',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 12',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 13',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Közepesen szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 14',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Elhanyagolható szénhidrát tartalmú köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 15',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Desszertek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 16',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Műanyag tányér és evőeszközök',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 17',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Reggelik (széngidrát mentes)',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: true
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 18',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Tálcás menük',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 19',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Csirkék, marhák, halak',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: true,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'Az étel hangzatos neve 20',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 21',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Közepesen szénhidrátos köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 22',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Elhanyagolható szénhidrát tartalmú köretek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 23',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Desszertek',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    {
      id: Math.floor(Math.random() * 100).toString(),
      title: 'termék 24',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'Műanyag tányér és evőeszközök',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false,
      isDailyOffer: false
    },
    

    // További termékek...
  ])

  // Egyéb funkciók és állapotok hozzáadása
  const toggleWishlistStatus = (id) => {
    const meal = meals.value.find((m) => m.id === id)
    if (meal) {
      meal.isOnWishlist = !meal.isOnWishlist
    }
  }
  const increment = () => {
    countMeals.value++
  }
  const decrement = () => {
    countMeals.value--
  }

  //const firstThreeProduct = ref(products.value.slice(0, 3))

  return { meals, toggleWishlistStatus, countMeals, increment, decrement}
})
