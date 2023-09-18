<template>
  <div @click="link && route.push('/project/' + project.id)">
    <div>
      <div>
        <img :src="project.mainImg" :alt="project.alt" />
      </div>
      <div>
        <div>{{ project.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const route = useRouter();

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  link: {
    type: Boolean,
    default: false,
  },
});
</script>
