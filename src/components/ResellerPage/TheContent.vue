<script setup>
import { ref } from "vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";

const advantages = ref([
  "Bizonyára Te is tudod, hogy manapság egy edzőterem fantasztikus mozgás kínálata kevés ahhoz, hogy eredményes legyen.",
  "Bizonyára Te is tudod, hogy profi módon edzeni a Hozzátok járóknak úgy érdemes, hogy mellette figyelnek a táplálkozásukra is. ",
  "Biztos ismered a tényt, hogy a termedet akkor választják még többen, ha minél szélesebb körű a kínálatod, azaz az edzésélmény és a remek edzők mellett még egészséges, rostokban és tápanyagokban gazdag ételeket is tudsz kínálni, mintegy „kényelmi szempontként”.",
  "Marketing szempontból pedig az az ötös megoldás, ha minél több helyen „hirdeted” a helyedet.",
]);
</script>
<template>
  <div
    class="flex flex-col order-2 gap-3 lg:gap-4 w-full md:w-[43%] xl:w-[35%] justify-center items-center md:items-start"
  >
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[20rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-[624px]"
    >
      Válaszd Te is a Csirkerizs kiváló termékeit edzőtermedbe!
    </h1>
    <div class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full" />
    <div
      class="flex-col gap-5 text-content-md md:text-content-sm lg:text-content-md xl:text-content text-textColor md:text-start w-[22.5rem] md:w-[350px] lg:w-[490px] xl:w-[550px] 2xl:w-[824px] flex shrink"
    >
      <ul v-for="(advantage, index) in advantages" :key="index">
        <li class="flex flex-row items-center gap-4">
          <div
            id="checkbox"
            class="hidden md:flex items-center justify-center w-[62px] h-[62px]"
          >
            <CheckIcon class="mt-1 ml-1" />
          </div>
          <p
            class="md:max-w-[270px] lg:max-w-[390px] xl:max-w-[450px] 2xl:max-w-[588px]"
          >
            {{ advantage }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#checkbox {
  background-image: url('../../assets/shapes/CheckboxBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 639px) {
  h1 {
    text-align: center;
  }
  ul {
    margin-top: 2rem;
  }
  button {
    margin-top: 2rem;
  }
  p {
    width: 22rem;
    text-align: center;
  }
}
</style>
