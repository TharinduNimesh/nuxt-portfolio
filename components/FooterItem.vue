<template>
  <NuxtLink
    :to="link"
    class="flex gap-2 items-center text-sm duration-300 cursor-pointer text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
  >
    <IconArrow />
    <span class="font-bold">{{ name }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: ["name", "link"],
};
</script>

<style></style>
