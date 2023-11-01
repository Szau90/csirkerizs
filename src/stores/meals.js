import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMealsStore = defineStore('meals', () => {
  const meals = ref([
    {
      id: Math.floor(Math.random() * 100),
      title: 'Az étel hangzatos neve',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'tálcás menük',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Az étel hangzatos neve',
      image: 'src/assets/images/csirke_rizs_home-image.png',
      description: 'Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika, kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring ',
      category: 'tálcás menük',
      allergens: ['földimogyoró', 'szója', 'diófélék', 'szezám'],
      energy:{
        kalória: 436,
        szénhidrát: 46,
        fehérje: 52.5,
        zsír: 3.44
      },
      price: '2 390 Forint',
      isOnWishlist: false,
      isHighlightedProduct: false
    },
    

    // További termékek...
  ])

  // Egyéb funkciók és állapotok hozzáadása

  //const firstThreeProduct = ref(products.value.slice(0, 3))

  return { meals }
})
