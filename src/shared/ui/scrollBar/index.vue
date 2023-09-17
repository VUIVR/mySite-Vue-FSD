<template>
  <el-scrollbar height="calc(100dvh-10px)" :class="$style['scroll-bar']">
    <slot />
  </el-scrollbar>
</template>

<script setup lang="ts">
import $style from './index.module.css';
</script>
