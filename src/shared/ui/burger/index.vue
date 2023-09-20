<template>
  <div :class="[$style.burger, { [$style.active]: modelValue }]" @click="toggleBurger">
    <span></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);

function toggleBurger() {
  emits('update:modelValue', !props.modelValue);
}
</script>

<style module>
@import "./index.module.css";
</style>