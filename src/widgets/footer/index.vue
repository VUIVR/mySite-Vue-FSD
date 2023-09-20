<template>
  <el-row justify="center" :class="$style['footer_max-width']">
    <el-divider :class="$style['el-divider--horizontal']" />
    <el-row align="middle">
      <ToggleTheme />
      <el-divider direction="vertical" />
      <el-text size="small">Островский А.</el-text>
      <el-divider direction="vertical" />
      <el-text size="small">2023г.</el-text>
    </el-row>
  </el-row>
</template>

<script lang="ts" setup>
import { ToggleTheme } from "@/entities/toggleTheme";
</script>

<style module>
@import "./index.module.css";
</style>
