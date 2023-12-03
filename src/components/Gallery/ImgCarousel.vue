<script setup>
import { ref } from "vue";

const images = ref(['370','371','374','375','376','377','378','379','380','381','382','383','384','385','386','387','388','389',])

const currentImage = ref(0);




</script>

<template>

  <div >
    <v-carousel v-model="currentImage" hide-delimiters class="w-50 mx-auto"  show-arrows="hover" >
      <template v-for="image in images" :key="image">
       <v-sheet color="#f0f0f8">
        <v-carousel-item
          :value="image"
          :src="'src/assets/Gallery/' + image + '.jpg'"
          cover
          :aspect-ratio="1"
          rounded="xl"
        >
    
        </v-carousel-item>
       </v-sheet>
      </template>
    </v-carousel>
  </div>

</template>
