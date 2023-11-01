<script setup>
const props = defineProps ({
  meal: {
 title: {type: String}
  }
})

</script>

<template>
  <div
    class="flex flex-col items-center justify-end w-[24.812rem] h-[27.812rem] p-4  bg-inherit rounded-[30px] shadow-xl mt-40"
  >
    <img
      src="../../../assets/images/csirke_rizs_home-image.png"
      alt="a plate of delicious food"
      width="287"
      height="286"
      class="-mb-1/2 pr-5"
    />
   <div class="flex flex-col gap-2">
    <h1 class="text-title-xl text-center">{{ props.meal.title }}</h1>
    <p class="text-textColor text-center">
      Csirkemell, teljes kiőrlésű száraztészta, cukkini, kaliforniai paprika,
      kókuszolaj, só, fokhagyma, bors, bazsalikom, rozmaring
    </p>
   </div>
    <ul class="flex flex-col items-center justify-center mt-2 text-textColor">
      <li class="flex justify-between py-2 w-[22rem] border-b">
        <span>kalória</span><span>436</span>
      </li>
      <li class="flex justify-between py-2 w-[22rem] border-b">
        <span>fehérje</span><span>52.5</span>
      </li>
      <li class="flex justify-between py-2 w-[22rem] border-b">
        <span>szénhidrát</span><span>46</span>
      </li>
      <li class="flex justify-between py-2 w-[22rem]">
        <span>zsír</span><span>3.44</span>
      </li>
    </ul>
  </div>
</template>
