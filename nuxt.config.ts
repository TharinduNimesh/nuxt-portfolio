// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/css/styles.css"],
  modules: ["@nuxt/image", "@nuxt/ui"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/ddouqxzyk/image/upload/v1697998269/",
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  }
});
