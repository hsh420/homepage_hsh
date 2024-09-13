<script lang="ts" setup>
import HendrikSH from '@/assets/images/HendrikSH_freigestellt.png'
import ButtonComponent from './ButtonComponent.vue'
import WavingHandIcon from '@/assets/icons/waving_hand_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import '@/assets/base.css'
</script>

<template>
  <div class="hero__wrapper">
    <div class="intro-container">
      <span v-html="WavingHandIcon" class="hero__icon"></span>
      <div class="hero__text">
        <h1>Willkommen!</h1>
        <p>Egal ob einfache Homepage oder komplexe Webanwendung: Let's get things done!</p>
        <p class="hero__arrow">&#8681;</p>
      </div>
      <div class="hero__action">
        <ButtonComponent link="overview" text="Jetzt mehr erfahren!" className="accent" size="xl" />
      </div>
    </div>
    <div class="hero__pic-container">
      <img class="hero__pic-image" :src="HendrikSH" alt="Porträt Hendrik Schwind-Hansen" />
    </div>
  </div>
</template>

<style scoped>
.hero__wrapper {
  display: flex;
  flex-direction: column;
}
.intro-container {
  overflow: hidden;
}
.hero__icon {
  display: flex;
  justify-content: center;
  animation: shake 4s ease-in-out infinite;
  margin-top: 12px;
}
.hero__pic-container {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 24px;
  border-bottom: 1px solid var(--color-text);
}
.hero__pic-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.hero__text {
  text-align: center;
  width: 100%;
}
.hero__text > p {
  padding: 6px 12px;
}
.hero__arrow {
  font-size: 1.5rem;
  animation: bounce 4s linear infinite;
}
.hero__action {
  display: flex;
  justify-content: center;
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

@keyframes shake {
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-20deg);
  }
}

@media screen and (min-height: 800px) {
  .hero__icon {
    margin-top: 60px;
  }
}
@media screen and (min-width: 768px) {
  .hero__pic-container {
    height: 450px;
    margin-top: 50px;
  }
  .hero__pic-image {
    height: 550px;
    width: 500px;
  }
  .hero__icon {
    margin-bottom: 12px;
  }
}
</style>
