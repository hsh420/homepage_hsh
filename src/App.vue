<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const route = useRoute()
</script>

<template>
  <div class="page__wrapper">
    <div class="header">
      <HeaderComponent />
    </div>
    <div class="content">
      <RouterView />
    </div>
    <div class="footer" v-if="route.name !== 'home'">
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.page__wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  height: 80px;
}
.content {
  padding-top: 12px;
  height: 100%;
  flex: 1;
}
.footer {
  height: 52px;
}
</style>
