<script lang="ts" setup>
import '@/assets/base.css'
</script>

<template>
  <div class="container">
    <div class="atom"><div class="atom"></div></div>
  </div>
</template>

<style>
.container {
  position: relative;
  height: 80px;
  width: 80px;
}
.atom {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-warn);
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(80deg) rotateY(20deg);
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(-20deg);
}

.atom:first-of-type:after {
  content: '';
  position: absolute;
  height: 25px;
  width: 25px;
  background: var(--color-text);
  border-radius: 50%;
  -webkit-transform: rotateX(-80deg) rotateY(0);
  transform: rotateX(-80deg) rotateY(0);
  box-shadow: 0 0 25px var(--color-text);
  -webkit-animation: nucleus_ 2s infinite linear;
  animation: nucleus_ 2s infinite linear;
  left: 50%;
  top: 50%;
  margin-top: -15px;
  margin-left: -10px;
}

.container > .atom > .atom {
  width: 80px;
  height: 80px;
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
  box-shadow: 0 0 12px var(--color-accent);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-accent);
  -webkit-animation: particle_ 4s infinite linear;
  animation: particle_ 4s infinite linear;
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
