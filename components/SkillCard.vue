<script setup>
defineProps(["skill", "image"]);
</script>

<template>
  <div
    class="w-80 h-full p-5 rounded-lg border bg-light-primary border-b-light dark:bg-dark-primary dark:border-b-dark shadow-md backdrop-blur duration-300 hover:!-translate-y-4"
    data-aos="fade-up"
  >
    <div class="w-full p-3 flex flex-col items-center">
      <div
        class="w-14 h-14 bg-blue-400 rounded flex justify-center items-center p-3"
      >
        <div
          class="w-full h-full bg-cover bg-center duration-300"
          :style="`background-image: url('/img/skill/${image}-${$colorMode.preference}.png');`"
        ></div>
      </div>
      <h2
        class="text-lg font-bold font-monteserrat mt-5 text-primary uppercase text-center"
      >
        {{ skill }}
      </h2>
      <p
        class="text-center font-monteserrat-alt mt-3 duration-300 text-black dark:text-white"
      >
        <slot></slot>
      </p>
    </div>
  </div>
</template>
