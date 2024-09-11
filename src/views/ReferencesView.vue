<script lang="ts" setup>
import previewIcon from '@/assets/icons/preview_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import PreviewComponent from '@/components/PreviewComponent.vue'
import ScreenBirteEwaldsen from '@/assets/images/Screen_BirteEwaldsen.png'
import MobileBirteEwaldsen from '@/assets/images/Mobile_BirteEwaldsen.png'
import ScreenCodingBootcamps from '@/assets/images/Screen_CodingBootcamps.png'
import MobileCodingBootcamps from '@/assets/images/Mobile_CodingBootcamps.png'
import ScreenSPDNiebuell from '@/assets/images/Screen_SPDNiebuell.png'
import MobileSPDNiebuell from '@/assets/images/Mobile_SPDNiebuell.png'
import ScreenFeldenkrais from '@/assets/images/Screen_FeldenkraisFlensburg.png'
import MobileFeldenkrais from '@/assets/images/Mobile_FeldenkraisFlensburg.png'
import ScreenFerberDigital from '@/assets/images/Screen_FerberDigital.png'
import MobileFerberDigital from '@/assets/images/Mobile_FerberDigital.png'
</script>

<template>
  <div class="flex-center">
    <span v-html="previewIcon" class="icon"></span>
    <h1 class="title">Referenzen</h1>
  </div>
  <section class="preview-section">
    <PreviewComponent
      :imgScreenSrc="ScreenBirteEwaldsen"
      :imgMobileSrc="MobileBirteEwaldsen"
      headline="Homepage Birte Ewaldsen"
      websiteLink="https://birte-ewaldsen.de/"
      :bulletpoints="[
        'mit AstroJS entwickelt',
        'Nutzung der Intersection-API',
        'Responsive Design'
      ]"
    />
  </section>
  <section class="preview-section">
    <PreviewComponent
      :imgScreenSrc="ScreenCodingBootcamps"
      :imgMobileSrc="MobileCodingBootcamps"
      headline="Homepage Coding Bootcamps Europe"
      websiteLink="https://coding-bootcamps.eu/"
      :bulletpoints="['mit AstroJS entwickelt', 'Nutzung von Tailwind-CSS']"
    />
  </section>
  <section class="preview-section">
    <PreviewComponent
      :imgScreenSrc="ScreenSPDNiebuell"
      :imgMobileSrc="MobileSPDNiebuell"
      headline="Homepage SPD Niebüll"
      websiteLink="https://spd-niebuell.de/"
      :bulletpoints="['Angular-Anwendung', 'u.a.: CSS-only Slider']"
    />
  </section>
  <section class="preview-section">
    <PreviewComponent
      :imgScreenSrc="ScreenFeldenkrais"
      :imgMobileSrc="MobileFeldenkrais"
      headline="Homepage Feldenkrais Flensburg"
      websiteLink="https://www.feldenkrais-flensburg.de/"
      :bulletpoints="['Angular-Anwendung', 'Mediathek']"
    />
  </section>
  <section class="preview-section">
    <PreviewComponent
      :imgScreenSrc="ScreenFerberDigital"
      :imgMobileSrc="MobileFerberDigital"
      headline="Zeiterfassung Ferber Digital"
      :bulletpoints="['Angular-Anwendung', 'Firebase als Datenbank', 'O-Auth bei Login']"
    />
  </section>
</template>

<style>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  line-height: 1;
  margin-right: 6px;
}
.title {
  font-size: 2rem;
}
.preview-section {
  padding: 36px 0;
}

.preview-section::after {
  content: '';
  position: absolute;
  left: calc(50% - 150px);
  width: 300px;
  border-bottom: 0.5px dotted var(--color-text);
  margin-top: 24px;
}

.preview-section:last-child {
  border-bottom: none;
}
</style>
