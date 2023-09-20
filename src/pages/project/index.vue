<template>
  <DefaultLayout>
    <el-row :class="$style.project">
      <el-col :xs="24" :sm="12" gutter="10" :class="$style.project__desc">
        <el-row justify="center" tag="h1">{{ project.name }}</el-row>
        <el-row justify="center" :class="$style['project_textalign-j']">{{ project.description }}</el-row>
        <el-col>
          <el-row> <h4>Личный вклад:</h4> </el-row>
          <el-row>
            <ul :class="$style.project__ul">
              <li v-for="item in project.myWork" :key="item">
                {{ item }}
              </li>
            </ul>
          </el-row>
        </el-col>
        <el-col>
          <el-row> <h4>Стек:</h4> </el-row>
          <el-row>
            <ul :class="$style.project__ul">
              <li v-for="item in project.stek" :key="item">
                {{ item }}
              </li>
            </ul>
          </el-row>
        </el-col>
      </el-col>
      <el-col :xs="24" :sm="12" :class="$style['project__second-col']">
        <el-image
          v-for="(i, index) in project.gallary"
          :key="i.src"
          :src="i.src"
          :alt="i.alt"
          :zoom-rate="1.2"
          :preview-src-list="progectGallary"
          :initial-index="index"
          :class="$style.project__img"
          fit="cover"
        />
      </el-col>
    </el-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { DefaultLayout } from "@/layouts";
import { computed, defineProps } from "vue";
import { useHead } from "@unhead/vue";
import { dataProjects, type TProject } from "@/shared/data-base";

const props = defineProps({
  id: {
    type: String,
    requred: true,
  },
});
const project = computed<TProject>(() => dataProjects.filter((i: TProject) => i.id === props.id)[0]);
const progectGallary: string[] = project.value.gallary.map((i) => i.src);

useHead({
  title: "Проект: " + project.value.name,
  meta: [{ name: "description", content: project.value.name }],
});
</script>

<style module>
@import "./index.module.css";
</style>