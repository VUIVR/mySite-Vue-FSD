<template>
  <nav :class="$style.nav">
    <ul>
      <li><RouterLink :to="{ name: 'index' }" @click="closeBurger"> Проекты </RouterLink></li>
      <li><RouterLink :to="{ name: 'contacts' }" @click="closeBurger"> Контакты </RouterLink></li>
      <li><RouterLink :to="{ name: 'about' }" @click="closeBurger"> Обо мне </RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  withBurger: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["closeBurger"]);

function closeBurger() {
  if (props.withBurger) emits("closeBurger");
}
</script>

<style module>
@import "./index.module.css";
</style>