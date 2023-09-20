<template>
  <el-scrollbar height="calc(100dvh-10px)" :class="$style['scroll-bar']">
    <slot />
  </el-scrollbar>
</template>

<style module>
@import "./index.module.css";
</style>
