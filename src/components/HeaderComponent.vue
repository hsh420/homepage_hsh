<script lang="ts" setup>
import AtomAnimationComponent from './AtomAnimationComponent.vue'
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
  height: 140px;
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
