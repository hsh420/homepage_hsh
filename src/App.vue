<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const route = useRoute()
</script>

<template>
  <HeaderComponent />
  <div class="content">
    <RouterView />
  </div>
  <FooterComponent v-if="route.name !== 'home'" />
</template>

<style scoped>
.page__wrapper {
  min-height: 100vh;
}
.content {
  height: 100%;
  padding-top: 132px;
}
</style>
