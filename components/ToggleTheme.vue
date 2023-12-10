<script setup>
const color = useColorMode();

function changeTheme() {
  color.preference = color.preference === "light" ? "dark" : "light";
}
</script>

<template>
  <div
    class="fixed shadow-md bg-slate-200 dark:bg-slate-900"
  >
    <div class="toggle cursor-pointer" @click="changeTheme">
      <div
        :class="`img w-full h-full duration-300 ${$colorMode.preference}`"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  width: 80px;
  height: 60px;
  top: 120px;
  right: 0;
  border-radius: 30px 0 0 30px;
  padding: 5px;
}

.toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  padding: 2px;
  transition: padding 0.2s ease-in-out;
}

.toggle:hover .img {
  transform: rotate(360deg);
}

.img {
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.dark {
  background-image: url("/img/dark-theme.png");
}

.light {
  background-image: url("/img/light-theme.png");
}
</style>
