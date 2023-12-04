<script setup>
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import CloseIcon from "./assets/icons/CloseIcon.vue";
import FacebookIcon from "./assets/icons/FacebookIcon.vue";
import InstagramIcon from "./assets/icons/Instagramicon.vue";
import TwitterIcon from "./assets/icons/TwitterIcon.vue";
import SocialIconWrapper from "./components/UI/SocialIconWrapper.vue";
import { useSideNavStore } from "./stores/sideNav";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import CartIcon from "./assets/icons/CartIcon.vue";
import SearchIcon from "./assets/icons/SearchIcon.vue";
import UserIcon from "./assets/icons/UserIcon.vue";
import MobileMenuIcon from "./assets/icons/MobileMenuIcon.vue";

const store = useSideNavStore();
const navLinks = computed(() => store.navLinks);
const drawer = ref(null);

const router = useRouter();
</script>

<template>
  <v-app id="v-app">
    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      width="654"
      temporary
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
          <a href="https://www.facebook.com/csirkerizs.hu">
            <FacebookIcon />
          </a>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <a href="https://www.instagram.com/csirkerizshu/">
            <InstagramIcon />
          </a>
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

      <v-bottom-navigation
        id="nav"
        :elevation="0"
        class="d-sm-none fixed top-screen"
        bg-color="#FF5F5C"
        rounded="pill"
        height="72"
        grow
      >
        <v-btn value="menu" @click="drawer = !drawer">
          <MobileMenuIcon />
        </v-btn>
        <v-btn value="search">
          <SearchIcon />
        </v-btn>
        <v-btn value="cart" @click="router.push('/kosar')">
          <CartIcon />
        </v-btn>

        <v-btn value="login" @click="router.push('/login')">
          <UserIcon />
        </v-btn>
      </v-bottom-navigation>
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
#drawer {
  height: 90% !important;
}

@media screen and (max-width: 1439px) {
  #drawer {
    width: 30% !important;
    height: 90% !important;
  }
}
@media screen and (max-width: 1279px) {
  #drawer {
    width: 40% !important;
    height: 90% !important;
  }
}
@media screen and (max-width: 1023px) {
  #drawer {
    width: 60% !important;
    height: 90% !important;
  }
}
@media screen and (max-width: 767px) {
  #drawer {
    width: 100% !important;
    height: 90% !important;
  }
}
</style>
