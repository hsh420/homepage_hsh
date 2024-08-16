<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <RouterLink :to="{ name: 'impressum' }">Impressum</RouterLink>
    <RouterLink :to="{ name: 'datenschutz' }">Datenschutz</RouterLink>
    <p>test test</p>
  </footer>
</template>
