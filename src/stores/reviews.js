import { ref } from "vue";
import { defineStore } from "pinia";

export const useReviewsStore = defineStore("reviews", () => {
  const reviews = ref([
    {
      id: Math.floor(Math.random() * 100),
      description: `“Nagyon ízletesen vannak elkészítve az egészséges ételek! 
            Kibontva, felmelegítve már fogyasztható is. 
            Jól belőtt adagok a makrók számolása szempontjából. 
            Korrekt árazás és (a szavatossági időn belül) olyan frissesség mintha 
            most sütötték / főzték volna!”`,
      rating: 5,
      date: "2018.november 14.",
    },
    {
      id: Math.floor(Math.random() * 100),
      description: `“1000. Regisztrálóként ajándékot kaptam :)
           Köszi CsirkeRizs.hu csapat, csak így tovább!!!”`,
      rating: 5,
      date: "2018.november 18.",
    },
    {
      id: Math.floor(Math.random() * 100),
      description: `“Az utóbbi hetekben rendeltem tőlük többször.
           Pontosak, igényesek a megrendeléseim. 
           Finomakat eszek a diéta alatt is. Tartósak az ételek, ahogy hirdetve is van.
           Szuper szolgáltatás!”`,
      rating: 5,
      date: "2018.november 14.",
    },
    {
      id: Math.floor(Math.random() * 100),
      description: `“Minden amit kóstoltam 100%-ig gluténmentes,
            tejmentes, nagyon finom, 2 perc elkészíteni és laktató. 
            Ajánlom minden sorstársamnak, akik nem ehetnek meg bárhol bármit 
            és ezzel együtt szeretnek egészségesen táplálkozni”`,
      rating: 5,
      date: "2018.november 14.",
    },
   
    // További értékelések...
  ]);

  // Egyéb funkciók és állapotok hozzáadása

  //const firstThreeProduct = ref(products.value.slice(0, 3))

  return { reviews };
});
