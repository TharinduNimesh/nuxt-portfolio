<template>
  <div
    class="root relative w-full bg-light-primary dark:bg-dark-primary border border-b-light dark:border-b-dark md:w-11/12 lg:w-4/5 flex justify-center lg:flex-col lg:mt-0 py-5 lg:h-80 rounded-lg mt-20 lg:left-6 shadow-md duration-300 backdrop-blur-md hover:shadow-lg hover:-translate-y-2"
    data-aos="fade-up"
  >
    <div
      class="-top-20 absolute w-3/4 md:w-1/2 h-60 lg:top-10 lg:w-2/5 xl:w-1/4 lg:-left-12 rounded-lg"
    >
      <img
        :src="`/img/blogs/${image}`"
        alt="blog image"
        class="w-full h-full object-cover rounded-lg duration-300 blog-img"
      />
    </div>
    <div
      class="flex flex-col mt-44 lg:mt-0 px-7 text-center content lg:text-left"
    >
      <div>
        <p class="font-bold text-gray-500">{{ publishedAt }}</p>
        <h2
          class="text-xl font-bold font-monteserrat duration-300 text-black dark:text-white"
        >
          {{ title }}
        </h2>
        <p
          class="font-monteserrat-alt mt-2 duration-300 text-gray-600 dark:text-gray-400"
        >
          <slot></slot>
          <span class="text-primary text-lg font-bold">...</span>
        </p>
        <div class="flex justify-center mt-5">
          <primary-button text="Read More" class="lg:mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["publishedAt", "title", "image"],
};
</script>

<style scoped>
.root:hover .blog-img {
  transform: scale(1.1);
}

@media (min-width: 1024px) {
  .content {
    margin-left: calc(40% - 3rem);
  }
}

@media (min-width: 1280px) {
  .content {
    width: 70%;
    margin-left: calc(25% - 1rem);
  }
}
</style>
