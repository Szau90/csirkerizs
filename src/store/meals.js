import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMealsStore = defineStore('meals', () => {
  const meals = ref([
    {
      id: Math.floor(Math.random() * 100),
      title: 'Stihl',
      subtitle: 'fűkasza / FS 40',
      rating: 12,
      image: {
        src: 'src/assets/images/ginx-desktop-fooldal-image11-removebg-preview-mirrored.png',
        isLandscape: false
      },
      description: 'Ez a termék nagyon jó.',
      category: 'garden tools',
      badges: {},
      price: '32 000 Ft',
      isFavorite: true,
      isHeroSectionProduct: true,
      isHighlightedProduct: false
    },
    

    // További termékek...
  ])

  // Egyéb funkciók és állapotok hozzáadása

  //const firstThreeProduct = ref(products.value.slice(0, 3))

  return { meals }
})
