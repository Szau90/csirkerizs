<script setup>
import DeliveryImage from "../components/DeliveryAreas/DeliveryImage.vue";
import DeliveryMain from "../components/DeliveryAreas/DeliveryMain.vue";
import DeliveryActions from "../components/DeliveryAreas/DeliveryActions.vue"
</script>

<template>
  <section>
    <div class="container h-fit mx-auto px-2 flex flex-col md:flex-row">
      <DeliveryMain />
      <DeliveryImage />
    </div>

    <DeliveryActions />
  </section>
</template>
