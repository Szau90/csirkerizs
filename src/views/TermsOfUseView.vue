<template>
  <section class="flex flex-col items-center justify-center md:mt-12 2xl:mt-32">
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w[524px] text-center"
    >
      Felhasználási feltételek
    </h1>
    <div class="flex w-36 h-[0.312rem] mt-5 bg-primaryColor rounded-full" />
    <div
      class="flex flex-col w-[22rem] md:w-[690px] xl:w-[1110px] 2xl:w-[1536] 2xl:px-2 mt-5 gap-5"
    >
      <p>
        Ha Ön szeretné használni weboldalunkat, akkor kérjük olvassa el az
        Adatvédelmi szabályzatunkat és az alábbi sorokat, a Felhasználási
        feltételeket! Kérjük vegye figyelembe az ezen helyeken leírtakat, hogy
        tökéletes felhasználói élményhez jusson oldalunkon!
      </p>

      <p class="font-semibold">Figyelmeztetés</p>

      <p>
        Az oldal látogatásával Ön egyetért azzal, hogy oldalunkat saját
        felelősségére használja. A Csirkerizs weboldalának Adatvédelmi
        szabályzatát itt olvashatja el:
        <RouterLink to="/adatvedelmi-szabalyzat" class="font-semibold"
          >Adatvédelmi szabályzat.</RouterLink
        >
        Nem vállalunk semmilyen felelősséget látogatóink számítógépének
        esetleges hardveres vagy szoftveres hibáiért. Oldalunkat annyira
        biztonságosan tartjuk, amennyire csak lehet, s látogatóinkat is erre
        biztatjuk számítógépükkel és operációs rendszerükkel kapcsolatban.
      </p>

      <p class="font-semibold">Korlátolt felelősség</p>

      <p>
        A Csirkerizs nem felelős semmilyen közvetlen vagy közvetett hibáért,
        melyet egyéb weboldalak, vagy szoftverek okoznak, mint pld. affiliate
        partnereink weboldalai (amelyek egyébként tökéletesen megbízhatóak!). A
        Csirkerizs nem felelős az általunk ajánlott termékek okozta bármilyen
        problémáért, ahogyan az általunk ajánlott weboldalakon történt esetleges
        gépelési hibákért és egyéb, emberi hibából fakadó problémákért.
        Természetesen ha hasonló hibát észlel, tudassa velünk és azonnal
        intézkedünk, hogy az javításra kerüljön!
      </p>

      <p class="font-semibold">Változások a Felhasználási feltételekben</p>

      <p>
        A Csirkerizs fenntartja magának a jogot, hogy megváltoztassa a
        felhasználási feltételeket, ám erről értesíteni fogjuk látogatóinkat itt
        a weboldalon, jól látható helyen. Ha Ön az esetleges változások után is
        tovább látogatja weboldalunkat, akkor azzal elfogadja a megújult
        felhasználási feltételeket.
      </p>

      <p class="font-semibold">Bankkártyás fizetés a Simplepay-jel</p>

      <p>
        Elfogadom, hogy a Csirkerizs.hu Kereskedelmi és Szolgáltató Kft. (7624
        Pécs, Angster József u. 2/16.) által a csirkerizs.hu felhasználói
        adatbázisában tárolt alábbi személyes adataim átadásra kerüljenek az OTP
        Mobil Kft. (1093 Budapest, Közraktár u. 30-32.), mint adatkezelő
        részére. A továbbított adatok köre: vezetéknév, keresztnév, ország,
        telefonszám, e-mail cím. Az adattovábbítás célja: a felhasználók részére
        történő ügyfélszolgálati segítségnyújtás, a tranzakciók visszaigazolása
        és a felhasználók védelme érdekében végzett fraud-monitoring.
      </p>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  section {
    margin-top: 2rem;
  }
}
</style>
