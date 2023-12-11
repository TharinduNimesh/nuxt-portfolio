<template>
  <footer class="lg:p-2">
    <div
      class="background text-gray-600 dark:text-gray-400 rounded-t-lg lg:rounded-lg border border-b-light dark:border-b-dark w-full flex flex-col bg-cover bg-center px-5"
      :style="`background-image: url('/img/footer-bg-${$colorMode.preference}.webp')`"
    >
      <div
        class="w-full flex flex-col lg:flex-row items-center px-5 py-8 gap-y-4"
      >
        <div class="w-full flex flex-col items-center gap-2 order-1 lg:order-2">
          <img src="/img/logo.png" class="w-14 h-14 object-cover" />
          <div class="w-full max-w-[400px]">
            <p class="text-center">
              I'm Tharindu Nimesh, a passionate student at the Java Institute
              For Advanced Technology (JIAT) based in Sri Lanka. My tech journey
              has been an exciting adventure, driven by my fascination with web
              development, especially backend work.
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col items-center gap-2 order-2 lg:order-1">
          <h3 class="text-2xl font-bold text-center uppercase">My Services</h3>
          <div class="flex flex-col text-center">
            <footer-item name="Web Development" link="/" />
            <footer-item name="Mobile Development" link="/" />
            <footer-item name="UI/ UX Designing" link="/" />
            <footer-item name="Database Designing" link="/" />
            <footer-item name="SEO Optimizing" link="/" />
          </div>
        </div>
        <div class="w-full flex flex-col items-center gap-2 order-3">
          <h3 class="text-2xl font-bold text-center uppercase">My Articles</h3>
          <div class="flex flex-col text-center">
            <footer-item name="Features Of Nuxt JS" link="/" />
            <footer-item name="New JS Runtime | BUN" link="/" />
            <footer-item name="Get Started With Laravel" link="/" />
            <footer-item name="Project Management tips..." link="/" />
            <footer-item name="First Year in software..." link="/" />
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-col lg:flex-row text-center lg:text-right lg:justify-between py-2 border-t border-gray-400 dark:border-b-dark"
      >
        <p>
          Design And Developed By
          <span class="font-bold">Tharindu Nimesh</span>.
        </p>
        <p>
          &copy; Copyright {{ year }}
          <span class="font-bold">Tharindu Nimesh</span>. Alright Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
