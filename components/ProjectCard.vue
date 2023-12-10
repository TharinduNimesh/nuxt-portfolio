<template>
  <div
    class="card w-96 flex flex-col bg-light-primary dark:bg-dark-primary border-b-light dark:border-b-dark border rounded-lg shadow-md backdrop-blur duration-300 hover:shadow-xl"
    data-aos="fade-up"
  >
    <div class="w-100 h-60 rounded overflow-hidden">
      <img :src="`/img/projects/${image}`" class="duration-300 object-cover" />
    </div>
    <div class="w-100 p-4 dark:text-white">
      <h2 class="text-xl font-bold font-monteserrat">
        {{ title }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          class="text-sm font-bold px-2 py-1 bg-blue-400 rounded"
          v-for="technology in technologies"
          :key="technology"
          >{{ technology }}</span
        >
      </div>
      <div class="font-monteserrat-alt my-3">
        <slot></slot>
      </div>
      <div class="w-100 flex justify-center mt-7">
        <a
          :href="reference"
          class="px-4 py-2 rounded duration-300 shadow-md bg-gray-800 text-white dark:bg-gray-900 dark:text-slate-100 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
          :class="{
            'opacity-60 hover:transform-none !cursor-grab': disabled,
          }"
          >{{ button }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    reference: String,
    technologies: Array,
    button: {
      type: String,
      default: "Learn More",
    },
    image: String,
    disabled: {
      Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card:hover img {
  transform: rotate(5deg) scale(1.2);
}
</style>
