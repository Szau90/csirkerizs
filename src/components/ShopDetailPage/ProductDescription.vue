<template>
  <div class="md:max-lg:px-2 lg:w-[55.125rem] mx-auto">
    <h1
      class="flex flex-col md:flex-row md:w-full md:max-lg:mx-auto md:mt-20 md:mb-14 items-center text-title-xl md:text-title gap-2"
    >
      <div class="hidden md:block w-1 h-10 bg-primaryColor rounded-full" />
      Leírás
      <div class="md:hidden h-1 w-10 mb-5 bg-primaryColor rounded-full" />
    </h1>
    <p class="text-content text-textColor" id="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. <br />
      <br />
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt.
    </p>
  </div>
</template>
<style scoped>
@media screen and (max-width: 767px) {
  h1 {
    margin-top: 1rem;
  }
}
</style>
