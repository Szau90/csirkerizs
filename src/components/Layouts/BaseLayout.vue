<template>
  <div class="container flex flex-row mx-auto px-2">
    <div class="flex flex-col">
      <slot name="sidebar"></slot>
    </div>
    <main class="container  flex flex-col justify-center items-center">
      <slot></slot>
    </main>
  </div>
</template>
