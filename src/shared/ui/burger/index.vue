<template>
  <div :class="[$style.burger, { [$style.active]: modelValue }]" @click="toggleBurger">
    <span></span>
  </div>
</template>

<script setup lang="ts">
import $style from './index.module.css';

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
