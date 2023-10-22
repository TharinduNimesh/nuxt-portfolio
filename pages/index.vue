<template>
  <div
    class="cursor-default duration-300"
    :class="{
      'bg-gray-950': isDark,
      'bg-slate-100': !isDark,
    }"
  >
    <loading-screen :is-dark="isDark" :is-loading="isLoading" />
    <home-header :is-dark="isDark" :show-background="headerBackground" />
    <main
      class="bg-repeat-y lg:bg-contain duration-300"
      :style="`background-image: url(/img/${theme}-bg.webp);`"
    >
      <home-page :is-dark="isDark" />
    </main>

    <toggle-theme :is-dark="isDark" @changeTheme="setTheme" />
  </div>
</template>

<script setup>
useHead({
  title: "Tharindu Nimesh | Web Developer",
  meta: [
    {
      name: "keywords",
      content:
        "Tharindu, Nimesh, Tharindu Nimesh, Web Developer, Software Engineer, Sri Lanka, Tharindu Nimesh Dewinda, Dewinda, Sri Dharmaloka",
    },
    {
      name: "description",
      content:
        "Tharindu Nimesh is a passionate software engineering student at the Java Institute For Advanced Technology (JIAT) based in Sri Lanka",
    },
  ],
});
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      isDark: false,
      isLoading: true,
      headerBackground: false,
    };
  },
  mounted() {
    this.isLoading = false;
    window.addEventListener("scroll", this.setHeaderBackground);
  },
  methods: {
    setHeaderBackground(e) {
      this.headerBackground = window.scrollY > 100 ? true : false;
    },
    setTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
  },
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>
