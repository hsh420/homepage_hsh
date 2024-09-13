<script lang="ts" setup>
import OpenNewIcon from '@/assets/icons/open_in_new_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import FactCheckIcon from '@/assets/icons/fact_check_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
const props = defineProps<{
  imgScreenSrc?: string
  imgScreenAlt?: string
  imgMobileSrc?: string
  imgMobileAlt?: string
  headline: string
  websiteLink?: string
  bulletpoints?: Array<string>
}>()
</script>

<template>
  <div class="container">
    <div class="screen">
      <img :src="imgScreenSrc" :alt="imgScreenAlt" class="screenImg" />
    </div>
    <div class="mobile">
      <img :src="imgMobileSrc" :alt="imgMobileAlt" class="mobileImg" />
    </div>
  </div>
  <h2 class="headline">- {{ headline }} -</h2>
  <div class="cta-container">
    <a :href="websiteLink" class="link" target="_blank" v-if="websiteLink">
      <span v-html="OpenNewIcon" class="icon"></span>
      Seite besuchen (neuer Tab)
    </a>
    <div class="lineheight">
      <span v-html="FactCheckIcon" class="icon"></span>
      <p>Short Facts:</p>
      <ul>
        <li v-for="bulletpoint of bulletpoints">{{ bulletpoint }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 300px;
  height: 180px;
  margin: 0 auto;
}
.screen {
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 250px;
  height: 150px;
  border: 1px solid var(--color-text);
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 4px 10px -1px var(--color-text);
}
.mobile {
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 140px;
  border: 1px solid var(--color-text);
  border-radius: 4px;
  z-index: 2;
  box-shadow: 0 4px 10px -1px var(--color-text);
}
.screenImg {
  width: 250px;
  height: 150px;
  object-fit: cover;
}
.mobileImg {
  width: 80px;
  height: 140px;
  object-fit: cover;
}
.headline {
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
}
.cta-container {
  width: 300px;
  margin: 0 auto;
}
.lineheight {
  display: flex;
  align-items: center;
  text-align: start;
}
@media screen and (min-width: 768px) {
  .container {
    width: 600px;
    height: 360px;
  }
  .screen {
    width: 500px;
    height: 300px;
  }
  .mobile {
    width: 160px;
    height: 280px;
  }
  .screenImg {
    width: 500px;
    height: 300px;
  }
  .mobileImg {
    width: 160px;
    height: 280px;
  }
  .cta-container {
    width: 600px;
  }
}
</style>
