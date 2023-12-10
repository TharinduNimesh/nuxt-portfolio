<template>
  <div class="w-full mt-5 duration-300 text-black dark:text-white">
    <p class="ml-4 font-monteserrat-alt text-sm duration-300">{{ name }}</p>
    <div class="w-full h-5 rounded-xl duration-300">
      <div
        class="relative h-full rounded-xl"
        :style="`width: ${percentage}%; background-image: var(--primary-gradient);`"
      >
        <span class="absolute -right-3 -top-full duration-300">
          {{ percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["percentage", "name"],
};
</script>

<style scoped></style>
