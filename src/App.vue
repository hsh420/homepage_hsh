<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const route = useRoute()
</script>

<template>
  <div class="page__wrapper">
    <HeaderComponent class="header" />
    <RouterView class="main" />
    <FooterComponent class="footer" v-if="route.name !== 'home'" />
  </div>
</template>

<style scoped>
.page__wrapper {
  min-height: 100vh;
}
.main {
  padding-top: 132px;
}
.footer {
  height: 100px;
  margin-top: -100px;
}
</style>
