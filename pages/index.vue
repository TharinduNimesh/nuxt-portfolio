<template>
  <div class="cursor-default duration-300 bg-slate-100 dark:bg-gray-950">
    <loading-screen :is-loading="isLoading" />
    <home-header :show-background="headerBackground" />
    <div
      class="bg-repeat-y lg:bg-contain duration-300"
      :style="`background-image: url(/img/${$colorMode.preference}-bg.webp);`"
    >
      <home-page />

      <Footer />
    </div>

    <toggle-theme />
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
  },
};
</script>
