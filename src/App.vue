<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import CloseIcon from "./assets/icons/CloseIcon.vue";
import FacebookIcon from "./assets/icons/FacebookIcon.vue";
import Instagramicon from "./assets/icons/Instagramicon.vue";
import TwitterIcon from "./assets/icons/TwitterIcon.vue";
import SocialIconWrapper from "./components/UI/SocialIconWrapper.vue";
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
      :style="{ height: '90%', width: '30%' }"
      class="rounded-r-[30px] rounded-bl-[30px] flex flex-col items-center justify-center"
      scrim="#F0F0F8"
      color="#F0F0F8"
    >
      <v-list
        class="flex flex-row mt-[50px] gap-3 2xl:gap-[1.875rem]"
        density="compact"
        base-color="#707070"
      >
        <v-list-item>
          <CloseIcon @click.stop="drawer = !drawer" class="cursor-pointer" />
        </v-list-item>
        <div class="w-px h-14 bg-textColor" />
        <v-list-item color="black" title="home" to="/" variant="plain">
        </v-list-item>
        <v-list-item
          title="ételrendelés"
          to="/etelrendeles"
          color="black"
          variant="plain"
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
          color="black"
          variant="plain"
          id="navlinks"
          class="w-[353px]"
        ></v-list-item>
      </v-list>
      <div class="flex flex-row w-full gap-9 mt-9 justify-center">
        <SocialIconWrapper>
          <FacebookIcon />
        </SocialIconWrapper>
        <SocialIconWrapper>
          <Instagramicon />
        </SocialIconWrapper>
        <SocialIconWrapper>
          <TwitterIcon />
        </SocialIconWrapper>
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
#navlinks {
  padding: 0.75rem 0;
}
#navlinks:nth-child(8) {
  border-top: 1px solid #d9d9e5;
  margin-top: 1.5rem;
  padding-top: 2.25rem;
}
</style>
