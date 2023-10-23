<template>
  <NuxtLink
    :to="link"
    class="flex gap-2 items-center text-sm duration-300 cursor-pointer"
    :class="{
        'text-gray-300 hover:text-white': isDark,
        'text-gray-800 hover:text-black': !isDark,
    }"
>
    <IconArrow />
    <span class="font-bold">{{ name }}</span>
  </NuxtLink>
</template>

<script>
export default {
    props: ["isDark", "name", "link"],
};
</script>

<style></style>
