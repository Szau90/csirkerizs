<template>
  <div class="container  relative flex flex-col 2xl:flex-row mx-auto px-2">
    <div class="flex flex-col">
      <slot name="sidebar"></slot>
    </div>
    <main class="container   flex flex-col 2xl:justify-center 2xl:items-center">
      <slot></slot>
    </main>
  </div>
</template>
