<template>
  <section
    class="snap-start bg-cover bg-center duration-300 flex flex-col justify-center lg:flex-row pb-0"
    :style="`background-image: url(/img/hero-${theme}.webp);`"
  >
    <div class="w-full lg:w-1/2 mb-5 lg:mb-0 order-2 lg:order-1">
      <div
        class="flex flex-col justify-center text-center lg:text-left h-full px-5 md:px-20 lg:px-0 lg:pl-20"
        :class="{
          'text-gray-800': !isDark,
          'text-slate-100': isDark,
        }"
        data-aos="zoom-in"
      >
        <div
          class="flex flex-col justify-center lg:block font-bold mb-5 duration-300"
        >
        <span class="self-center mr-4 text-lg font-monteserrat-alt">Hello, It's Me</span>
          <div class="flex mt-3 self-center text-4xl lg:text-5xl ">
            <img src="/img/T.png" class="w-10 lg:w-16" />
            <span class="text-primary self-end">harindu Nimesh</span>
          </div>
        </div>
        <h2 class="text-2xl lg:text-4xl font-bold mb-5 duration-300">
          A <word-changer />
        </h2>
        <p class="text-lg duration-300 font-monteserrat-alt">
          I'm a passionate Software Engineer hailing from Sri Lanka, dedicated
          to crafting innovative solutions. Explore my portfolio and join me on
          my journey of tech excellence.
        </p>
        <div class="flex justify-center">
          <primary-button
            text="Save My Resume"
            :is-dark="isDark"
            class="mt-8"
          />
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-1/2 h-full lg:min-h-screen mb-3 order-1 lg:order-2 flex justify-center items-center"
      data-aos="zoom-in"
    >
      <NuxtImg
        provider="cloudinary"
        format="webp"
        src="/portfolio/nhi1ndyhfh8ovdt1r3es.png"
        sizes="sm:300px md:400px lg:500px xl:600px"
        class="man"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["isDark"],
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
}
</style>

<style scoped>
.man {
  max-width: 500px;
  height: auto;
}
</style>