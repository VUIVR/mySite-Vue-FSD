<template>
  <el-header height="max-content">
    <Header />
  </el-header>
  <el-aside class="hidden-xs-only">
    <NavBar />
  </el-aside>
  <el-main>
    <ScrollBar class="scroll">
      <slot />
    </ScrollBar>
  </el-main>
  <el-footer height="40px">
    <Footer />
  </el-footer>
</template>

<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
import { ScrollBar } from "@/shared/ui";
import { Header, Footer, NavBar } from "@/widgets";
</script>

<style>
@import "./index.css";
</style>
