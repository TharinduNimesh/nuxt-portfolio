<template>
  <div class="py-3 mb-10 h-fit w-full" data-aos="fade-right">
    <div class="px-10 relative h-fit w-fit text-gray-800 dark:text-white duration-300">
      <div class="main-heading">
        {{ mainHeading }}
      </div>
      <div class="sub-heading">
        {{ subHeading }} <span class="text-primary">{{ lastSymbol }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeading",
  props: ["mainHeading", "subHeading", "lastSymbol"],
};
</script>

<style scoped>
.main-heading {
  font-size: 54px;
  font-weight: 800;
  opacity: 0.2;
  position: relative;
  text-transform: uppercase;
}

.sub-heading {
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .main-heading {
    font-size: 62px;
  }

  .sub-heading {
    font-size: 34px;
  }
}
</style>
