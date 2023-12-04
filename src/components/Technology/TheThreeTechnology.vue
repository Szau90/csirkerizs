<template>
  <section class="flex flex-col md:flex-row md:mt-20 lg:mt-32 xl:mt-52 2xl:w-[96rem] mx-auto px-2">
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/BodóImi.svg"
        alt="Bodó Imre with some csirkerizs.hu products"
        width="740"
        height="740"
      />
    </div>
    <div
      class="w-full lg:max-xl:px-4 mt-4 md:mt-0 md:w-1/2 2xl:w-[40.875rem] flex flex-col gap-3 lg:gap-5 xl:pl-[2.5rem] justify-center items-center md:items-start"
    >
      <h1
        class="text-title-sm md:text-title-md md:text-start 2xl:text-title w-[20rem] md:w-[24rem] xl:w-[30rem]"
      >
      A 3 TECHNOLÓGIA!
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
      <h1>Sous-Vide technológia</h1>
      <div
        class="flex flex-col gap-4 text-content-md md:text-content-sm md:text-start lg:text-content-md xl:text-content text-textColor w-20rem md:w-[22rem] lg:w-full xl:w-[37rem] 2xl:w-[40.875rem]"
      >
       <p>
        A húst, halat, tojást egy különleges eljárással egy speciális tasakban 70 Celsius fok
        alatt főzzük puhára.
       </p>
       <p>
        A zárt tasaknak és az alacsony hőfoknak köszönhetően a tápanyagtartalom sokkal teljesebb lesz,
        mint egy nyílt rostlapos sütés, vagy lobogó vizes főzés esetén, ugyanis az ételek legfontosabb
        tápláló összetevői nem tudnak „kiszabadulni” a főzési környezetből. Ennek nem csak azért van jelentősége,
        mert így maga az étel is érezhetően finomabb, puhább és zamatosabb marad, hanem azért is,
        mert bizonyos tápanyagoknak nem tesz jót a hőkezelés.
       </p>
       <p>
        Például a fehérjék esetén a nagy hőhatás miatt, sérül(távozik) a fehérje szerkezete, a szervezet számára 
        biológiai érték szempontjából nem tud majd annyi hasznosulni egy agyonsütött hal, vagy egy jól megfőzött hús
        fehérjetartalmából.
       </p>
       <p>
        Hagyományos ételkészítési eljárásokkal nehéz lenne összehozni, hogy az étel puha, ízletes,
        könnyen fogyasztható legyen, és emellett a fehérjeszerkezet se sérüljön a túlzott hőkezelés 
        miatt. Ugyanez igaz bizonyos vitaminokra is, amiknek szintén nem tesz jót a túl magas hőmérséklet.
        </p>
        <p>
         Szerencsére a sous - vide eljárásnak köszönhetően, az alacsony főzési hőfok és a zárt tasak miatt
         nem kell lemondani az ételek hiánytalan és sérülésmentes tápanyagtartalmáról és a finom, zamatos ízeiről sem.
        </p>
    </div>
     
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 639px) {
 section {
    margin-top: 2rem;
 }
    h1 {
  text-align: center;
 }
 p {
  text-align: center;
 }
}
</style>