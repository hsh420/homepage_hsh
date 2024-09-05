<script lang="ts" setup>
import '@/assets/base.css'
import { RouterLink } from 'vue-router'
const props = defineProps<{
  className: string
  link?: string
  text: string
  method?: any
  size?: string
}>()
</script>

<template>
  <RouterLink v-if="link" :to="{ name: link }" :class="'base ' + className + ' ' + size">{{
    text
  }}</RouterLink>
  <button :class="'base ' + className + ' ' + size" v-else v-on:click="method">{{ text }}</button>
</template>

<style>
.base {
  text-decoration: none;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  background-color: var(--color-background);
}
.primary {
  color: var(--color-text);
  border: 1px solid var(--color-text);
}
.secondary {
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
}
.accent {
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}
.warn {
  color: var(--color-warn);
  border: 1px solid var(--color-warn);
}
.xl {
  font-size: 1.25rem;
}
.s {
  font-size: 0.75rem;
}
</style>
