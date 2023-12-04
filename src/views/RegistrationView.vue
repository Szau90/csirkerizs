<script setup>
import RegistrationImage from "../components/Registration/RegistrationImage.vue";
import RegistrationForm from "../components/Registration/RegistrationForm.vue";
</script>

<template>
     <section>
    <div class="container xl:h-[600px] 2xl:h-[610px]  mx-auto px-2 flex flex-col md:flex-row">
      <RegistrationForm  />
      <RegistrationImage />
    </div>
  </section>
</template>