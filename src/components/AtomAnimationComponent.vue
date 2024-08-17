<script lang="ts" setup>
import '@/assets/base.css'
</script>

<template>
  <div class="container">
    <div class="atom"><div class="atom"></div></div>
    <div class="atom"><div class="atom"></div></div>
    <div class="atom"><div class="atom"></div></div>
    <div class="atom"><div class="atom"></div></div>
  </div>
</template>

<style>
.container {
  position: relative;
  height: 100px;
  width: 100px;
}
.atom {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-text);
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(80deg) rotateY(20deg);
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(20deg);
}

.atom:first-of-type:after {
  content: '';
  position: absolute;
  height: 20px;
  width: 20px;
  background: var(--color-text);
  border-radius: 50%;
  -webkit-transform: rotateX(-80deg) rotateY(0);
  transform: rotateX(-80deg) rotateY(0);
  box-shadow: 0 0 25px var(--color-text);
  -webkit-animation: nucleus_ 2s infinite linear;
  animation: nucleus_ 2s infinite linear;
  left: 50%;
  top: 50%;
  margin-top: -10px;
  margin-left: -10px;
}

.atom:nth-of-type(2) {
  -webkit-transform: rotateX(-80deg) rotateY(20deg);
  transform: rotateX(-80deg) rotateY(20deg);
}

.atom:nth-of-type(3) {
  -webkit-transform: rotateX(-70deg) rotateY(60deg);
  transform: rotateX(-70deg) rotateY(60deg);
}

.atom:nth-of-type(4) {
  -webkit-transform: rotateX(70deg) rotateY(60deg);
  transform: rotateX(70deg) rotateY(60deg);
}

.container > .atom > .atom {
  width: 100px;
  height: 100px;
  position: relative;
  -webkit-transform-style: preserve-3d;
  -webkit-animation: trail_ 2s infinite linear;
  transform-style: preserve-3d;
  animation: trail_ 2s infinite linear;
}

.container > .atom > .atom:after {
  content: '';
  position: absolute;
  top: 10px;
  box-shadow: 0 0 12px var(--color-warn);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--color-warn);
  -webkit-animation: particle_ 4s infinite linear;
  animation: particle_ 4s infinite linear;
}

.atom:nth-of-type(2) > .atom,
.atom:nth-of-type(2) > .atom:after {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.atom:nth-of-type(3) > .atom,
.atom:nth-of-type(3) > .atom:after {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.atom:nth-of-type(4) > .atom,
.atom:nth-of-type(4) > .atom:after {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
}

@-webkit-keyframes trail_ {
  from {
    -webkit-transform: rotateZ(0deg);
  }
  to {
    -webkit-transform: rotateZ(360deg);
  }
}

@keyframes trail_ {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@-webkit-keyframes particle_ {
  from {
    -webkit-transform: rotateX(90deg) rotateY(0deg);
    transform: rotateX(90deg) rotateY(0deg);
  }
  to {
    -webkit-transform: rotateX(90deg) rotateY(-360deg);
    transform: rotateX(90deg) rotateY(-360deg);
  }
}

@keyframes particle_ {
  from {
    transform: rotateX(90deg) rotateY(0deg);
  }
  to {
    transform: rotateX(90deg) rotateY(-360deg);
  }
}

@keyframes nucleus_ {
  0% {
    box-shadow: 0 0 0 transparent;
  }
  50% {
    box-shadow: 0 0 12.5px var(--color-text);
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}

@-webkit-keyframes nucleus_ {
  0% {
    box-shadow: 0 0 0 transparent;
  }
  50% {
    box-shadow: 0 0 12.5px var(--color-text);
  }
  100% {
    box-shadow: 0 0 0 transparent;
  }
}
</style>
