<script lang="ts" setup>
import '@/assets/base.css'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  headline: string
  text: string
  iconSrc: string
  alt: string
}>()
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <span class="icon" v-html="iconSrc"></span>
      <h2>{{ headline }}</h2>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<style>
.card {
  position: relative;
  border: 1px solid var(--color-text);
  border-radius: 14px;
  padding: 12px;
  background: linear-gradient(to top left, var(--color-text), 5%, var(--color-background));
}
.card__wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}
.icon {
  color: var(--color-text);
  height: 24px;
}
</style>
