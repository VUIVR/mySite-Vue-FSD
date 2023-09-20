<template>
  <el-row :gutter="20" justify="space-between" align="middle" :class="$style.header">
    <el-col :xs="16" :sm="24">
      <Logo>
        <Avatar />
      </Logo>
    </el-col>
    <el-col :xs="4" :sm="0" :class="$style['hidden-sm-and-up']">
      <el-row justify="center">
        <Burger client:load v-model="isCloseBurger" />
      </el-row>
    </el-col>
  </el-row>
  <el-collapse-transition>
    <el-row
      :class="[$style['header__nav-bar-wrapper'], $style['hidden-sm-and-up']]"
      @click="isCloseBurger = false"
      v-if="isCloseBurger"
    >
      <NavBar :class="$style['header__nav-bar']" withBurger />
    </el-row>
  </el-collapse-transition>
</template>

<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
import { NavBar } from "@/widgets/navBar";
import { Burger, Logo, Avatar } from "@/shared/ui";

import { ref } from "vue";

const isCloseBurger = ref(false);
</script>

<style module>
@import "./index.module.css";
</style>
