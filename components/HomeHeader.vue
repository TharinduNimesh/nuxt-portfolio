<template>
  <div class="py-3 px-5 fixed w-full z-40">
    <header
      class="w-full h-16 rounded-xl flex justify-between items-center px-5 duration-300 backdrop-blur-md"
      :class="{
        'bg-dark': isDark && showBackground,
        'bg-light': !isDark && showBackground,
        'shadow-md': showBackground,
      }"
    >
      <my-logo />
      <nav class="p-0 m-0 hidden lg:flex justify-center">
        <nav-item
          v-for="(item, index) in items"
          :key="item.name"
          :name="item.name"
          :path="item.path"
          :isActive="index === activePage"
        />
      </nav>
      <div class="hidden md:flex">
        <social-media link="#" file="facebook.png" />
        <social-media link="#" file="github.png" />
        <social-media link="#" file="linkedin.png" />
        <social-media link="#" file="youtube.png" />
      </div>
    </header>
  </div>
</template>

<script setup>
defineProps(["scrollTop", "showBackground"]);
const color = useColorMode();

const items = [
  {
    path: "#",
    name: "Home",
  },
  {
    path: "#",
    name: "About",
  },
  {
    path: "#",
    name: "Experience",
  },
  {
    path: "#",
    name: "Portfolio",
  },
  {
    path: "#",
    name: "Insights",
  },
  {
    path: "#",
    name: "Contact",
  },
];

const isDark = computed(() => {
  return color.preference === "dark";
})
const activePage = ref(0);
</script>

<style scoped>
.bg-dark {
  background-color: rgba(3, 7, 18, 0.6);
}

.bg-light {
  background-color: rgba(233, 239, 245, 0.6);
}
</style>
