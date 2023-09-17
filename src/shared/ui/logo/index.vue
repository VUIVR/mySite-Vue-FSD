<template>
  <RouterLink :to="{ name: 'index' }" :class="$style.logo__link">
    <el-row align="middle" justify="start" :class="$style.logo">
      <el-col :xs="4" :sm="24" :class="[$style['logo__wrappar-avatar'], $style.logo_center]">
        <slot />
      </el-col>
      <el-col :xs="20" :sm="24">
        <el-row :class="$style.logo_center">ОСТРОВСКИЙ</el-row>
        <el-row :class="$style.logo_center">АРТЁМ</el-row>
        <el-row :class="[$style.logo__profession, $style.logo_center]">ФРОНТЕНД-РАЗРАБОТЧИК</el-row>
      </el-col>
    </el-row>
  </RouterLink>
</template>

<script setup lang="ts">
import $style from './index.module.css'
</script>


