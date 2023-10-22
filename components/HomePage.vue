<template>
  <section-hero :is-dark="isDark" />
  <section-about :is-dark="isDark" />
  <section-experience :is-dark="isDark"/>
  <section-portfolio :is-dark="isDark" />
  <section-blog :is-dark="isDark" />
</template>

<script>
export default {
    name: 'HomePage',
    props: ['isDark'],
};
</script>