<template>
  <DefaultLayout>
    <el-col class=".scroll">
      <el-row justify="center" tag="h1">ПРОЕКТЫ</el-row>
      <Divider />
      <ProjectList :projects="dataProjects">
        <template v-slot:firstColumn="{ projects }">
          <ProjectCard v-for="project in projects" :project="project" link :class="$style['card_margin-bottom']" />
        </template>
        <template v-slot:secondColumn="{ projects }">
          <ProjectCard link v-for="project in projects" :project="project" :class="$style['card_margin-bottom']" />
        </template>
      </ProjectList>
    </el-col>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { DefaultLayout } from "@/layouts";
import { useHead } from "@unhead/vue";
import { ProjectList, ProjectCard } from "@/entities/project";
import { Divider } from "@/shared/ui";
import { dataProjects, type TProject } from "@/shared/data-base";

import $style from "./index.module.css";

useHead({
  title: "Проекты Островского А.",
  meta: [{ name: "description", content: "Проекты Островского А." }],
});
</script>
