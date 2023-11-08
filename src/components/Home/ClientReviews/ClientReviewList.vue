<script setup>
import { computed } from "vue";
import { useReviewsStore } from "../../../stores/reviews";
import BlackUserIcon from "../../../assets/icons/BlackUserIcon.vue";
import OrangeUserIcon from "../../../assets/icons/OrangeUserIcon.vue";
import RatingStars from "../../../assets/icons/RatingStars.vue";
const store = useReviewsStore();

const reviews = computed(() => store.reviews);

const styleClasses = computed(() => {
  return reviews.value.map((review, index) => {
    const styles = [
      "text-red-600 lg:ml-[20%] xl:ml-[25%] 2xl:ml-[35%]",
      "text-green-600 lg:ml-[10%] xl:ml-[15.5%] 2xl:ml-[25.5%]",
      "text-purple-600 lg:ml-[18%] xl:ml-[23%] 2xl:ml-[33%]",
      "text-orange-600 lg:ml-[12%] xl:ml-[17.3%] 2xl:ml-[27.3%]",
    ];
    return styles[index % styles.length];
  });
});
</script>

<template>
  <section class="container justify-center mx-auto mt-28">
    <h1 class="w-[21.25rem] mx-auto text-title">Ügyfél vélemények</h1>
    <div
      class="flex w-36 h-[0.312rem] bg-primaryColor rounded-full mx-auto mt-6"
    />
    <div
      v-for="(review, index) in reviews"
      :key="review.id"
      class="flex flex-col mt-10 w-[23rem] max-lg:mx-auto items-end md:w-[40rem] lg:w-[49rem] text-content min-h-[13.375rem]"
      :class="styleClasses[index]"
    >
      <div
        class="flex items-center relative bg-inherit rounded-[30px] shadow-lg min-h-[12.5rem]"
      >
        <div
          class="flex items-center justify-center place-self-start w-16 h-16"
        >
          <div
            v-if="index % 2"
            class="w-16 h-16 flex items-center justify-center rounded-full bg-inherit shadow-xl"
          >
            <OrangeUserIcon />
          </div>
          <div
            v-else
            class="w-16 h-16 flex items-center justify-center rounded-full bg-inherit shadow-xl"
          >
            <BlackUserIcon />
          </div>
        </div>
        <p class="lg:w-[40.125rem] flex mx-10 text-content-md">
          {{ review.description }}
        </p>
        <RatingStars id="rating" class="absolute -top-5 -right-5" />
      </div>
      <p class="mt-10">{{ review.date }}</p>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 420px) {
  #rating {
    right: 0;
  }
}
</style>
