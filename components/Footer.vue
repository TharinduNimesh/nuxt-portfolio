<template>
  <div
    class="background relative w-full bg-top bg-cover bg-no-repeat"
    :class="bgClass"
  >
    <div class="w-full flex flex-wrap gap-y-5 lg:gap-y-0 p-10">
      <div class="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-3 px-3 md:order-1">
        <my-logo :is-dark="isDark" />
        <p>
          I'm <span class="font-bold">Tharindu Nimesh</span>, a passionate
          student at the Java Institute For Advanced Technology (JIAT) based in
          Sri Lanka.
        </p>
      </div>
      <div
        class="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 flex flex-col gap-3 px-3 md:order-3 lg:order-2"
      >
        <h3 class="font-bold text-lg">My Services</h3>
        <div class="flex items-start flex-col pl-5 gap-1">
          <footer-item :is-dark="isDark" name="Web Development" />
          <footer-item :is-dark="isDark" name="Mobile Development" />
          <footer-item :is-dark="isDark" name="UI/ UX Designing" />
          <footer-item :is-dark="isDark" name="Database Designing" />
          <footer-item :is-dark="isDark" name="SEO Optimizing" />
        </div>
      </div>
      <div
        class="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 flex flex-col gap-3 px-3 md:order-4 lg:order-3"
      >
        <h3 class="font-bold text-lg">Recent Blogs</h3>
        <div class="flex items-start flex-col pl-5 gap-1">
          <footer-item :is-dark="isDark" name="Features Of Nuxt JS" />
          <footer-item :is-dark="isDark" name="New JS Runtime | BUN" />
          <footer-item :is-dark="isDark" name="Get Started With Laravel" />
          <footer-item :is-dark="isDark" name="Project Management tips..." />
          <footer-item :is-dark="isDark" name="First Year in software..." />
        </div>
      </div>
      <div
        class="w-full md:w-1/2 lg:w-1/3 flex-col gap-3 px-3 md:order-2 lg:order-4"
      >
        <h3 class="font-bold text-lg">Reach Me Out</h3>
        <div class="w-full flex items-start flex-col pl-5 gap-1">
          <h4 class="font-bold text-sm ml-4">Newsletter</h4>
          <div class="w-full flex h-10 rounded">
            <input
              type="text"
              class="w-2/3 border rounded-l outline-none px-3 bg-transparent"
              :class="{
                'border-gray-400 focus:border-gray-600': !isDark,
                'border-gray-600 focus:border-gray-400': isDark,
              }"
              placeholder="Email Address"
            />
            <button
              class="w-1/3 h-10 rounded-r bg-blue-500 font-bold hover:bg-blue-600 duration-300"
            >
              Subscribe
            </button>
          </div>
          <p class="mt-3">
            <span class="font-bold">Address: </span>
            693/3, Colombo, Sri Lanka.
          </p>
          <p>
            <span class="font-bold">Mobile: </span>
            +94 78 375 7726
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full order-5 py-3 px-8 flex justify-center lg:justify-between text-sm"
    >
      <p>
        Design And Developed By <span class="font-bold">Tharindu Nimesh</span>.
      </p>
      <p>
        &copy; Copyright {{ year }}
        <span class="font-bold">Tharindu Nimesh</span>. Alright Reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isDark"],
  computed: {
    bgClass() {
      return this.isDark
        ? "bg-dark-img bg-black text-gray-200"
        : "bg-light-img bg-white text-gray-900";
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.background {
  margin-top: 300px;
}

.background::before {
  position: absolute;
  content: "";
  top: -300px;
  width: 100%;
  height: 300px;
}

.bg-dark-img::before {
  background-image: url("/img/footer-dark-bg.png");
}

.bg-light-img::before {
  background-image: url("/img/footer-light-bg.png");
}
</style>
