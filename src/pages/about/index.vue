<template>
  <DefaultLayout>
    <el-row :class="$style.about">
      <el-col :xs="24" :sm="12" :class="$style['about__firth-col']">
        <el-row tag="h1" justify="center">ОБО МНЕ</el-row>
        <Divider />
        <el-row tag="h3" justify="center" :class="[$style['about_text-center'], $style.about_mt]">
          {{ dataAbout.name }}
        </el-row>
        <el-row tag="h4" justify="center" :class="$style['about_text-center']"> {{ dataAbout.profession }} </el-row>
        <el-row tag="h4" justify="center" :class="$style['about_text-center']"> {{ dataAbout.experience }} </el-row>
        <!-- <el-row justify="center" :class="$style['about_textalign-justify']"> {{ dataAbout.desc }} </el-row> -->
        <el-row justify="center">
          <el-row tag="h4">Стек</el-row>
          <el-col v-for="i in dataAbout.stack" :key="i">
            <el-row justify="center">
              {{ i }}
            </el-row>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-row tag="h4">Курсы</el-row>
          <el-col v-for="i in dataAbout.courses" :key="i.company">
            <el-row justify="center">
              <a :href="i.link" rel="author" target="_blank">{{ i.name }} ({{ i.company }})</a>
            </el-row>
          </el-col>
        </el-row>
        <el-row justify="center">
          <el-row tag="h4">Занятость</el-row>
          <el-col v-for="i in dataAbout.busyness" :key="i">
            <el-row justify="center"> {{ i }} </el-row>
          </el-col>
        </el-row>

        <el-row justify="center">
          <el-row tag="h4">График работы</el-row>
          <el-col v-for="i in dataAbout.grafik" :key="i">
            <el-row justify="center"> {{ i }} </el-row>
          </el-col>
        </el-row>
        <el-row justify="center" :class="$style.about__download">
          <a href="Resume_A.Ostrovskiy.pdf" download="">
            <el-button type="warning" plain color="#e74c3c"> Скачать резюме (pdf) </el-button>
          </a>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-row justify="center" :class="$style.about__gallary">
          <Gallary v-if="dataGallary?.length" :gallary="dataGallary" />
        </el-row>
      </el-col>
    </el-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { DefaultLayout } from "@/layouts";
import { useHead } from "@unhead/vue";
import { dataGallary, dataAbout } from "@/shared/data-base";
import { Divider, Gallary } from "@/shared/ui";
import $style from "./index.module.css";

useHead({
  title: "Обо мне",
  meta: [{ name: "description", content: "Обо мне" }],
});
</script>
