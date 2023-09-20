<template>
  <DefaultLayout>
    <el-row :class="$style.contacts">
      <el-col :xs="24" :sm="12" :class="$style['contacts__firth-col']">
        <el-container direction="vertical">
          <el-row tag="h1" justify="center">КОНТАКТЫ</el-row>
          <Divider />
          <template v-for="(i, index) in dataContacts" :key="i.value">
            <template v-if="i.name !== 'Адрес'">
              <el-row justify="center" tag="h4" :class="[$style.contacts__header, { [$style.firth]: !index }]"
                >{{ i.name }}:</el-row
              >
              <el-row justify="center" :tag="i.tag" :href="i.href"> {{ i.value }} </el-row>
            </template>
          </template>

          <template v-for="i in dataContacts" :key="i.value">
            <template v-if="i.name === 'Адрес'">
              <el-row justify="center" tag="h4">{{ i.name }}:</el-row>
              <el-row justify="center">{{ i.value }} </el-row>
            </template>
          </template>
        </el-container>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-row justify="center" :class="$style.contacts__gallary">
          <Gallary v-if="dataGallary?.length" :gallary="dataGallary" />
        </el-row>
      </el-col>
    </el-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { DefaultLayout } from "@/layouts";
import { useHead } from "@unhead/vue";
import { Divider, Gallary } from "@/shared/ui";
import { dataContacts, dataGallary } from "@/shared/data-base";

useHead({
  title: "Контакты",
  meta: [{ name: "description", content: "Контакты" }],
});
</script>

<style module>
@import "./index.module.css";
</style>
