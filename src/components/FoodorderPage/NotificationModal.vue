<script setup>
import CloseNotificationIcon from "../../assets/icons/CloseNotificationIcon.vue";
import { ref } from "vue";

const showNotification = ref(true);

const toggleNotificationOff = () => {
  showNotification.value = false;
};
</script>

<template>
  <section
    class="lg:w-[42rem] xl:w-[57.5rem] 2xl:w-[68.062rem] lg:h-[20.4375rem] mt-16 p-2 flex flex-col  bg-inherit rounded-[30px] shadow-lg"
    v-if="showNotification"
  >
    <div
      class="w-12 h-12 absolute flex items-center justify-center rounded-full shadow-lg place-self-end"
    >
      <CloseNotificationIcon
        class="cursor-pointer"
        @click="toggleNotificationOff"
      />
    </div>
    <main class="flex flex-col items-center  lg:flex-row lg:ml-5 xl:ml-10 2xl:ml-16">
      <img
        src="../../assets/shapes/NotificationImage.svg"
        width="310"
        height="275"
        class="hidden lg:block"
      />
      <img
        src="../../assets/shapes/NotificationImageMobile.svg"
        width="210"
        height="180"
        class="block lg:hidden"
      />
      <div
        class="lg:w-[33.125rem] lg:h-[14.375rem] lg:ml-5 xl:ml-10 2xl:ml-14 flex flex-col justify-center text-textColor gap-5"
      >
        <h1 class="text-title-sm ">Kedves Megrendelők!</h1>
        <p class="content md:max-2xl:text-content-md">
          Nagyon köszönjük, hogy eddig is minket választottatok!!!<br />
          Mi továbbra is főzünk, rendeljetek tőlünk!!!<br />
          Jó étvágyat kívánunk!<br />
          A csirkerizs.hu csapata
        </p>
      </div>
    </main>
  </section>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
