<script setup>
import ActionsCard from "./ActionsCard.vue";
import HeroContent from "./HeroContent.vue";
import HeroImage from "./HeroImage.vue";
import ActionItemMenu from "./ActionItems/ActionItemMenu.vue";
import ActionItemDelivery from "./ActionItems/ActionItemDelivery.vue";
import ActionItemRegistration from "./ActionItems/ActionItemRegistration.vue";
</script>

<template>
  <section>
    <div class="container  h-fit mx-auto px-2 flex flex-col md:flex-row">
      <HeroContent />
      <HeroImage />
    </div>
    <div
      class="flex flex-col mx-4 lg:mx-12 xl:mx-auto md:flex-row justify-center items-center gap-14 md:gap-4 lg:gap-9 mt-6"
    >
      <ActionsCard class="pl-4">
        <ActionItemMenu />
      </ActionsCard>
      <ActionsCard
        class="bg-primaryColor flex justify-center items-center pt-8 md:pt-3 lg:pt-8"
      >
        <ActionItemDelivery />
      </ActionsCard>
      <ActionsCard>
        <ActionItemRegistration />
      </ActionsCard>
    </div>
  </section>
</template>
