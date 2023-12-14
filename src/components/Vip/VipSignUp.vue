<script setup>
import { reactive, ref, computed } from "vue";
import PrimaryBtn from "../UI/PrimaryBtn.vue";
import CheckIcon from "../../assets/icons/CheckIcon.vue";

const nameRules = ref([
  (value) => {
    if (value?.length > 3) return true;

    return "a névnek legalább 3 karakterből kell állnia";
  },
]);
const emailRules = ref([
  (value) => {
    if (value) return true;

    return "Az e-mail cím megadása kötelező.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "Kérem adjon meg egy valós e-mail címet";
  },
]);

const userData = reactive({
  name: "",
  email: "",
});

const form = ref(null);

const checkbox = ref(false);

const formIsValid = computed(() => {
  if (
    userData.name !== "" &&
    userData.email !== "" &&
    userData.email.includes("@") &&
    checkbox.value
  )
    return true;
});

const reset = () => {
  form.value.reset();
};

const handleSubmit = () => {
  if (formIsValid.value) {
    console.log(userData);
    reset();
  } else {
    return;
  }
};
</script>

<template>
  <section class="flex flex-col gap-5">
    <h1
      class="text-title-sm md:text-title-md 2xl:text-title w-[18rem] md:w-full md:text-start lg:w-96 xl:w-full 2xl:w-64"
    >
      Jelentkezz<br />
      VIP ügyfélnek!
    </h1>
    <div
      id="border"
      class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full"
    />

    <v-form
      ref="form"
      fast-fail
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-4 md:max-lg:mx-auto"
    >
      <v-text-field
        v-model="userData.name"
        :rules="nameRules"
        label="Név"
        variant="underlined"
        density="compact"
        class="md:max-lg:w-[414px]"
      ></v-text-field>
      <v-text-field
        v-model="userData.email"
        :rules="emailRules"
        label="E-mail"
        variant="underlined"
        density="compact"
        class="md:max-lg:w-[414px]"
      ></v-text-field>
      <button type="button" class="flex flex-row gap-1" v-bind="checkbox">
        <div
          id="checkbox"
          @click="checkbox = !checkbox"
          class="flex items-center justify-center bg-checkboxBg bg-no-repeat bg-cover w-[62px] h-[62px]"
        >
          <CheckIcon v-if="checkbox" class="mt-1 ml-1" />
        </div>
        <p
          class="w-[295px] flex items-center text-start text-textColor text-content-md md:max-2xl:text-content-md"
        >
          Elolvastam és megértettem az ÁSZF feltételeit
        </p>
      </button>
      <PrimaryBtn title="jelentkezem" class="w-56" />
    </v-form>
  </section>
</template>

<style scoped>
#checkbox {
  background-image: url("../../assets/shapes/CheckboxBg.svg");
}
@media screen and (max-width: 1023px) {
  section {
    padding: 0 0.5rem;
  }
  h1 {
    text-align: center;
    margin: 2rem auto 0;
  }
  #border {
    margin: 0 auto;
  }
  button {
    margin: 0 auto;
  }
}
</style>
