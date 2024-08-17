<script lang="ts" setup>
import AtomAnimationComponent from './AtomAnimationComponent.vue'
import '@/assets/base.css'
</script>

<template>
  <header>
    <div class="head__wrapper">
      <AtomAnimationComponent />
      <div>
        <h2 class="head__title">H. Schwind-Hansen</h2>
        <h3 class="head__subtitle">Web-Development 🚀</h3>
      </div>
      <div>MENU</div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 120px;
  box-shadow: 0 4px 20px -12px var(--color-text);
  padding: 6px 12px;
}
.head__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head__title {
  width: 155px;
}
.head__subtitle {
  text-align: center;
}
</style>
