<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import { ref } from "vue";

import { RouterLink } from "vue-router";

const drawer = ref(null);
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :style="{ height: '900px' }"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item>
          <RouterLink to="/etelrendeles">ételrendelés</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/">home</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-layout>
      <div class="flex flex-col justify-center align-center h-full w-full">
        <header class="w-full">
          <TheHeader />
        </header>

        <main>
          <button @click.stop="drawer = !drawer">click</button>
          <router-view></router-view>
        </main>
        <footer>
          <TheFooter />
        </footer>
      </div>
    </v-layout>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
