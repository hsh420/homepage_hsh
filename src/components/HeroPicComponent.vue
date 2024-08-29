<script lang="ts" setup>
import HendrikSH from '@/assets/images/HendrikSH_freigestellt.png'
import ButtonComponent from './ButtonComponent.vue'
import '@/assets/base.css'
</script>

<template>
  <div class="hero__wrapper">
    <div class="hero__pic-container">
      <img class="hero__pic-image" :src="HendrikSH" alt="Porträt Hendrik Schwind-Hansen" />
    </div>
    <div class="hero__text">
      <h1>Willkommen!</h1>
      <p>Egal ob einfache Homepage oder komplexe Webanwendung: Let's get things done!</p>
      <p class="hero__arrow">&#8681;</p>
    </div>
    <div class="hero__action">
      <ButtonComponent link="overview" text="Jetzt mehr erfahren!" className="accent" size="xl" />
    </div>
  </div>
</template>

<style>
.hero__wrapper {
  display: flex;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 20px;
  overflow-y: hidden; */
}
.hero__pic-container {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.hero__pic-image {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  right: -10px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: -10px 20px;
}
.hero__text {
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  text-align: center;
  width: 100%;
}
.hero__text > p {
  padding: 6px 12px;
}
.hero__arrow {
  font-size: 1.5rem;
  animation: bounce 2s linear infinite;
}
.hero__action {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes bounce {
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
}
</style>
