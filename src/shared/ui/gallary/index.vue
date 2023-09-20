<template>
  <el-carousel
    :arrow="arrow"
    style="width: 100%"
    height="300"
    :autoplay="autoplay"
    :indicator-position="indicatorPosition"
  >
    <el-carousel-item v-for="item in gallary" :key="item.src" style="text-align: center">
      <img :alt="item.alt" :src="item.src" :class="$style.carusel__img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { type PropType } from '@vue/runtime-core';
import { type TGallary } from '@/shared/data-base'

const props = defineProps({
  gallary: {
    type: Array as PropType<TGallary[]>,
    required: true,
  },
  arrow: {
    type: String as PropType<'always' | 'hover' | 'never'>,
    default: 'hover',
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  indicatorPosition: {
    type: String as PropType<'none' | 'outside'>,
    default: 'outside',
  },
});
</script>

<style module>
@import "./index.module.css";
</style>
