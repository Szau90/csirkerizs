<script setup></script>

<template>
  <section class="flex flex-col w-[24.5rem] items-center gap-4">
    <div class="max-w-[20rem]">
      <h1 class="text-product-title font-semibold">{{ title }}</h1>
      <p class="text-content-md text-textColor">{{ subtitle }}</p>
      <p class="text-content-md text-[#B4B4B4]">{{ description }}</p>
      <ProductTable :flavour="flavour" :weight="weight" />
      <div
        class="w-full flex justify-between items-center h-14 px-5 rounded-full shadow-xl mt-10"
      >
        <button :disabled="productCounter === 1" @click="decrementQuantity">
          -</button
        ><span>{{ productCounter }} db</span
        ><button @click="incrementQuantity">+</button>
      </div>
      <ProductActions
        :id="id"
        :title="title"
        :description="description"
        :price="price"
        :product-counter="productCounter"
        :image="image"
        class="mt-5"
      />
    </div>
  </section>
</template>
