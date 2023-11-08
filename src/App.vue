<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import MenuIcon from "./assets/icons/MenuIcon.vue";
import FacebookIcon from "./assets/icons/FacebookIcon.vue";
import Instagramicon from "./assets/icons/Instagramicon.vue";
import TwitterIcon from "./assets/icons/TwitterIcon.vue";
import { useSideNavStore } from "./stores/sideNav";
import { ref, computed } from "vue";

const store = useSideNavStore();
const navLinks = computed(() => store.navLinks);
const drawer = ref(null);
</script>

<template>
  <v-app id="v-app">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :style="{ height: '80%', width: '30%', backgroundColor: '#F0F0F8' }"
      class="rounded-r-[30px] flex flex-col items-center justify-center"
    >
      <v-list
        class="flex flex-row mt-[50px] gap-3 2xl:gap-[1.875rem] "
        density="compact"
        base-color="#707070"
      >
        <v-list-item>
          <MenuIcon @click.stop="drawer = !drawer" class="cursor-pointer" />
        </v-list-item>
        <div class="w-px h-14 bg-textColor"/>
        <v-list-item  active-color="black" title="home" to="/">
        </v-list-item>
        <v-list-item
          title="ételrendelés"
          to="/etelrendeles"
          active-color="black"
        >
        </v-list-item>
      </v-list>

      <v-list density="compact">
        <v-list-item
          v-for="link in navLinks"
          :key="link.title"
          :to="link.link"
          :title="link.title"
          base-color="#707070"
          active-color="black"
          ></v-list-item
        >
      </v-list>
      <div class="flex flex-row w-full gap-9 mt-9 justify-center">
      <FacebookIcon />
      <Instagramicon />
      <TwitterIcon />
    </div>
    </v-navigation-drawer>

    <header>
      <TheHeader @toggle="drawer = !drawer" />
    </header>

    <main>
      <router-view></router-view>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#v-app {
  background-color: inherit;
}

</style>
