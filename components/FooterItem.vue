<template>
  <NuxtLink
    :to="link"
    class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 duration-300 cursor-pointer"
  >
    {{ name }}
  </NuxtLink>
</template>

<script>
export default {
  props: ["name", "link"],
};
</script>

<style></style>
