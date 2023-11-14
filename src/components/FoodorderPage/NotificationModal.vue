<script setup>
import CloseNotificationIcon from "../../assets/icons/CloseNotificationIcon.vue";
import { ref } from "vue";

const showNotification = ref(true);

const toggleNotificationOff = () => {
    showNotification.value = false
}
</script>

<template>
  <section
    class="w-[68.062rem] h-[20.4375rem] mt-16 p-2 flex flex-col bg-inherit rounded-[30px] shadow-lg"
    v-if="showNotification"
  >
    <div
      class="w-12 h-12 flex items-center justify-center rounded-full shadow-lg place-self-end"
    >
      <CloseNotificationIcon class="cursor-pointer" @click="toggleNotificationOff" />
    </div>
    <main class="flex flex-row ml-16">
      <img
        src="../../assets/shapes/NotificationImage.svg"
        width="270"
        height="230"
      />
      <div
        class="w-[33.125rem] h-[14.375rem] ml-14 flex flex-col justify-center text-textColor gap-5"
      >
        <h1 class="text-title-sm">Kedves Megrendelők!</h1>
        <p class="content">
          Nagyon köszönjük, hogy eddig is minket választottatok!!!<br />
          Mi továbbra is főzünk, rendeljetek tőlünk!!!<br />
          Jó étvágyat kívánunk!<br />
          A csirkerizs.hu csapata
        </p>
      </div>
    </main>
  </section>
</template>
