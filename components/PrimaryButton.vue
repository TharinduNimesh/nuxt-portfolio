<template>
  <button
    class="relative px-5 py-3 mx-3 duration-300 overflow-hidden rounded cursor-pointer flex justify-center items-center shadow-md hover:shadow-lg text-black dark:text-white"
  >
    <div 
        :class="`background absolute h-full w-full duration-300 img ${$colorMode.preference}`"
    ></div>
    <span class="relative">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["text"],
};
</script>

<style scoped>
.background {
  background-size: cover;
  background-position: center;
}

button {
  font-weight: 500;
}

button:hover .background {
  transform: scale(1.2);
}

.dark {
  background-image: url(/img/primary-button-dark.png);
}

.light {
  background-image: url(/img/primary-button-light.png);
}
</style>