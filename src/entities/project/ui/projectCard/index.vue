<template>
  <div :class="$style['project-card']" @click="link && route.push('/project/' + project.id)">
    <div :class="$style['project-card__container']">
      <div :class="$style['project-card__image']">
        <img :src="project.mainImg" :alt="project.alt" />
      </div>
      <div :class="$style['project-card__plus']">
        <div :class="$style['project-card__name']">{{ project.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { type TProject } from "@/shared/data-base";
import { useRouter } from "vue-router";
const route = useRouter();

const props = defineProps({
  project: {
    type: Object as PropType<TProject>,
    required: true,
  },
  link: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module>
@import "./index.module.css";
</style>
