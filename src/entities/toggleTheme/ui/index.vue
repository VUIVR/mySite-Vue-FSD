<template>
  <el-switch
    v-model="isLightTheme"
    inline-prompt
    size="small"
    :class="$style.toggle"
    :active-icon="Moon"
    :inactive-icon="Sunny"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue';
import $style from './index.module.css'

const isLightTheme = ref(true);

onMounted(() => {
  if (typeof localStorage.theme === 'undefined') {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    isLightTheme.value = localStorage.theme === 'light-theme';
  }
});

watch(isLightTheme, (newV, oldV) => {
  if (isLightTheme.value) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
});
</script>

