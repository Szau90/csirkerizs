<script setup>
import { ref, computed } from "vue";
import SadSmileIcon from "../../assets/icons/SadSmileIcon.vue";
import SmileIcon from "../../assets/icons/SmileIcon.vue";

const budapestExceptions = ref([
  "Margitsziget",
  "II. kerület Szépvölgyi dűlő",
  "III. kerület Flóra u, Virágnyereg utcától Solymár felé, Remete köztől felfelé",
  "VI. kerület, Teréz krt 55-57 csak hajnali szállítással",
  "VII. kerület csak hajnali kiszállítással",
  "VIII került, József városi piac területe",
  "IX. kerület Külső Mester utca, Péceli u. (MÁV telep), Soroksári út páratlan oldala (Soroksári út 35-től a Helsinki útig), Fehérakác út",
  "X. kerület Sibrik Miklós út és környéke, Árkád üzletközpont, Népliget, Albertirsai u. 10",
  "XI. ker. Kopaszi gát, Irhás árok, Kakukkhegy és környéke; területek: Erdődűlő, Vadászhegy, Kőérberek, Pösingermajor",
  "XII. ker-i Csillebérci üdülőtelep, Edvi Illés-Adorján utcáig",
  "XIII. ker. Nyírő Gyula kórház pszichiátria, Árpád hid aluljáró",
  "XV. ker. Ázsia Center, China Mart, Sugár üzletközpont",
  "XVII. ker. Bocskai István útig (nem szállítunk Orgovány u., Nagy Hangács u. Nagy Hangács köz, Bélatelepi u.), Ebergény u. Ecsedház u. Gombos u. Nemesbükk, Szárazhegyi u. Zsigmondi u. Görömböly u. Pásztortűz u. Irsa utcán kívüli részekre, Régivám köz, Mömax, Lidl stb (Pesti út 2), Tesco (Pesti út 5-7), Agyaghegyi dűlő, Furmint Házak és környéke",
  "XVIII. ker. Ferihegy 1, Ferihegy 2, Igló utca és környéke, Üllői út 709.",
  "XIX. ker. KÖKI terminál, Shopmark",
  "XX. ker. Tesco Megpark",
  "XXI.ker. Vízmű lakótelep, Krizantém u-Csepeli u-M0-II Rákóczi F. u. által határolt terület, Petróleum u.",
  "XXII. ker. Mechanikai Művek (Dózsa György u. 105.), 6-os út és a Duna közti rész, 7-es úttól kifelé, Angeli út 40-től, Balatoni út-M0-Fensík u közötti terület, Banyalég utca 45-48-tól Érd felé",
  "XXIII. ker. Európa u., Bevásárló u., M51-M5-M0 által határolt terület; Szentlőrinci út, nagybani piac, Molnár sziget",
]);

const pestCountyTowns = ref([
  "2484 Agárd",
  "2471 Baracska",
  "2051 Biatorbágy (kivéve Peca tó és környéke, Tó park ingatlan komplexum, Katalin hegy)",
  "2093 Budajenő",
  "2011 Budakalász (kivéve 11-es úttól a Duna felé, Dolinai u, Kakukkfű köz és környéke, Hegyalja u-tól Pomáz felé, Bokros u. és környéke, Auchan iparterület, OMSZK park csak hajnali kiszállítás)",
  "2092 Budakeszi (kivéve Nagyszénászug)",
  "2040 Budaörs (Naphegy)",
  "2141 Csömör",
  "2485 Dinnyés",
  "2049 Diósd (kivéve Tó utca, illetve az abból nyíló mellékutcák)",
  "2330 Dunaharaszti (kivéve: Mechwart A.u - Némedi u - 51 sz. főút által határolt terület, Némedi u. 104-ig)",
  "2120 Dunakeszi (kivéve Alagi major, Tőzeg tavak)",
  "2233 Ecser (kivéve Kálvária u. - Ady E. u. - Arany J. u. kívül eső rész)",
  "2030 Érd",
  "2151 Fót (kivéve: üdülőövezet Budai Nagy Antal utcáig, Somlói utcáig, East Gate Business Park és környéke, Somlóhegy)",
  "2484 Gárdony",
  "2131 Göd alsó",
  "2132 Göd felső (Sződi úttól kifelé)",
  "2100 Gödöllő (csak hajlnali órában, kivéve centrum lakótelep)",
  "2360 Gyál (kivéve Prologis ipari park)",
  "2230 Gyömrő (kivéve: Táncsics u. Mendei u, Dózsa Gy., Szent I. u, közöti terület, Bajcsy Zs. Anna heygi u. Pátria u.18-ig)",
  "2475 Kápolnásnyék",
  "2144 Kerepes",
  "2143 Kistarcsa",
  "2462 Martonvásár",
  "2234 Maglód (kivéve: Patak köz,Mendel K. u., 31-es főút Lövéet u., Dobó utcán kívüli részekre Bimbó utca)",
  "2094 Nagykovácsi",
  "2142 Nagytarcsa",
  "8095 Pákozd",
  "2071 Páty (kivéve M1 Ipari (Business) park)",
  "2074 Perbál",
  "7980 Pettend",
  "2119 Pécel (kivéve nem egész Pécel területére, legyen szíves egyeztessen ügyfélszolgálatunkkal)",
  "2097 Pilisborosjenő",
  "2081 Piliscsaba",
  "2084 Pilisszentiván",
  "2085 Pilisvörösvár (kivéve Út Őr Ház-Derű és az abból nyíló utcák)",
  "2013 Pomáz",
  "2090 Remeteszőlős",
  "2083 Solymár (kivéve Auchan)",
  "8096 Sukoró",
  "2440 Százhalombatta",
  "2000 Szentendre (kivéve Bajcsy Zs. u.-Batthyány u.-Dunakorzó, Bogdányi u.-Városház tér-Fő tér- Templom tér-Kmetty József tér által határolt terület, Pap szigeti útig, Tegez útig (szentendrei skanzenig, Boldogfalva)",
  "8000 Székesfehérvár",
  "2315 Szigethalom",
  "2310 Szigetszentmiklós (kivéve: Lakihegy, ÁTI szigeti ipari park, Auchan és Bauhaus környéke, Tököli Tesco, Czuczor sziget, Sóderbánya)",
  "2133 Sződliget",
  "2461 Tárnok",
  "2089 Telki",
  "2086 Tinnye",
  "2073 Tök",
  "2045 Törökbálint (kivéve Pistály dülő, Mechanikai Művek /Dózsa György u. 105/. Törökbálini tó nyugati oldala, /Tó park ingatlan komplexum/ )",
  "2096 Üröm",
  "2600 Vác (kivéve: Mária udvar, Határ u. - Bolygó u. - Tó u., sétáló utca és környéke, Alsó Törökhegyi úttól felfelé eső címek)",
  "2220 Vecsés (kivéve Ferihegy1 Ferihegy2, Újecseri út, Cargo City, Lőrinczi út 154.)",
  "2481 Velence",
  "2112 Veresegyház",
  "2072 Zsámbék",
]);

const searchInBudapestExceptions = ref("");
const searchInPestCountyTowns = ref("");

const includedInPestCountyTowns = computed(() => {
  const formattedSearch = searchInPestCountyTowns.value.toLowerCase().trim();

  if (formattedSearch.length === 0) {
    return false;
  } else {
    return pestCountyTowns.value.some((item) =>
      item.toLowerCase().includes(formattedSearch)
    );
  }
});

const includedInBudapestExceptions = computed(() => {
  const formattedSearch = searchInBudapestExceptions.value.toLowerCase().trim();

  if (formattedSearch.length === 0) {
    return false;
  } else {
    return budapestExceptions.value.some((item) =>
      item.toLowerCase().includes(formattedSearch)
    );
  }
});

const resetBudapestExeption = () => {
  searchInPestCountyTowns.value=''
}
const resetPestCounty = () => {
  searchInBudapestExceptions.value=''
}

</script>

<template>
  <section
    class="flex flex-col md:flex-row md:mt-20 lg:mt-32 xl:mt-52 2xl:w-[96rem] mx-auto px-2"
  >
    <div class="md:w-1/2">
      <img
        src="@/assets/shapes/DeliverySecoundaryPattern.svg"
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
        Szállítási területek
      </h1>
      <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />

      <div class="flex flex-col xl:flex-row  xl:gap-20">
        <div class="w-[360px] md:w-[250px]">
          <h1>Budapest egész területe</h1>
          <v-select
            v-model="searchInBudapestExceptions"
            label="Kivételek Budapesten"
            density="compact"
            rounded="xl"
            bg-color="#F0F0F8"
            menu-icon="$expand"
            :items="budapestExceptions"
            variant="solo"
            @click="resetBudapestExeption"
          >
            <template #item="{ item, props }">
              <v-list-item
                v-bind="props"
                class="text-body-2 w-screen"
              ></v-list-item>
            </template>
          </v-select>
        </div>
        <div class="w-[360px] md:w-[250px]">
          <h1>Pest megyei települések</h1>
          <v-select
            v-model="searchInPestCountyTowns"
            label="Pest megyei települések"
            density="compact"
            rounded="xl"
            bg-color="#F0F0F8"
            menu-icon="$expand"
            :items="pestCountyTowns"
            variant="solo"
            @click="resetPestCounty"
          >
            <template #item="{ item, props }">
              <v-list-item
                v-bind="props"
                class="text-body-2 w-screen"
              ></v-list-item>
            </template>
          </v-select>
        </div>
      </div>
      <div v-if="includedInPestCountyTowns" class="flex flex-row items-center gap-5">
        <SmileIcon />
        <p>A megadott területre szállítunk!</p>
      </div>
      <div v-if="includedInBudapestExceptions" class="flex flex-row items-center gap-5">
        <SadSmileIcon />
        <p>A megadott területre sajnos nem szállítunk!</p>
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
