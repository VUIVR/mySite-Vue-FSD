<template>
  <el-row justify="center" :class="$style['projects-list']" v-if="projects.length">
    <el-col :sm="12" :class="$style['projects-list__firth-col']">
      <slot name="firstColumn" :projects="firthColumProjects" />
    </el-col>
    <el-col :sm="12" :class="$style['projects-list__second-col']">
      <slot name="secondColumn" :projects="secondColumProjects" />
    </el-col>
  </el-row>
  <h1 v-else :class="$style['projects-list__is-empty']">Проекты не загружены</h1>
</template>

<script setup lang="ts">
import { defineProps, computed, type PropType } from 'vue';
import { type TProject } from '@/shared/data-base';
import $style from './index.module.css'

const props = defineProps({
  projects: {
    type: Array as PropType<TProject[]>,
    default: [],
  },
});

const firthColumProjects = computed<TProject[]>(() => {
  if (!props.projects.length) return [];
  const data: TProject[] = [];
  for (let i = 0; i < props.projects.length - 1; i++) {
    if (i % 2 === 0) data.push(props.projects[i]);
  }
  return data;
});

const secondColumProjects = computed<TProject[]>(() => {
  if (!props.projects.length) return [];
  const data: TProject[] = [];
  for (let i = 0; i < props.projects.length; i++) {
    if (i % 2 !== 0) data.push(props.projects[i]);
  }
  return data;
});
</script>

