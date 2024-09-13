<script lang="ts" setup>
import PreviewComponent from '@/components/PreviewComponent.vue'
import ScreenKiezKomplizen from '@/assets/images/Screen_KiezKomplizen.png'
import MobileKiezKomplizen from '@/assets/images/Mobile_KiezKomplizen.png'
import ScreenCodingBootcamps from '@/assets/images/Screen_CodingBootcamps.png'
import MobileCodingBootcamps from '@/assets/images/Mobile_CodingBootcamps.png'
import ScreenFerberDigital from '@/assets/images/Screen_FerberDigital.png'
import MobileFerberDigital from '@/assets/images/Mobile_FerberDigital.png'
import EngineerIcon from '@/assets/icons/engineering_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
</script>

<template>
  <article class="text-wrapper">
    <div class="flex-center">
      <span v-html="EngineerIcon" class="icon"></span>
      <h1 class="headline">Berufserfahrung</h1>
    </div>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Frontend-Developer<br />
            ComLine GmbH, Flensburg
          </h4>
          <p class="experience__subheading">seit Oktober 2024</p>
        </div>
      </header>
      <p class="block">
        hier kommt dann noch etwas hin ... PLATZHALTER +++ PLATZHALTER +++ PLATZHALTER
      </p>
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Web-Anwendungsentwickler<br />
            Coding Bootcamps Europe, Berlin
          </h4>
          <p class="experience__subheading">März 2024 bis September 2024</p>
        </div>
      </header>
      <p class="block space">
        Front- und Backend Development u.a. mit AstroJS, Vue, nodeJS, ExpressJS; Testing u.a. mit
        Postman, Cypress; Build- und Deployment-Prozesse u.a. via Netlify
      </p>
      <PreviewComponent
        :imgScreenSrc="ScreenCodingBootcamps"
        :imgMobileSrc="MobileCodingBootcamps"
        headline="Homepage Coding Bootcamps Europe"
        websiteLink="https://coding-bootcamps.eu/"
        :bulletpoints="['mit AstroJS entwickelt', 'Nutzung von Tailwind-CSS']"
      />
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Trainee Web-Anwendungsentwickler<br />
            Coding Bootcamps Europe, Berlin
          </h4>
          <p class="experience__subheading">Oktober 2023 bis Februar 2024</p>
        </div>
      </header>
      <p class="block space">
        Frontend Development unter Berücksichtigung von semantischem sowie barrierefreiem HTML, CSS,
        JavaScript mit VUE3 sowie E2E-Testing (Cypress) im agilen Arbeitsumfeld (SCRUM)
      </p>
      <PreviewComponent
        :imgScreenSrc="ScreenKiezKomplizen"
        :imgMobileSrc="MobileKiezKomplizen"
        headline="Abschlussprojekt: Kiez-Komplizen"
        websiteLink="https://kiezkomplizen.netlify.app/"
        :bulletpoints="['Vue-Anwendung', 'Datenbank: Firebase', 'O-Auth bei Login']"
      />
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Frontend-Developer<br />
            Ferber Digital GmbH, Flensburg
          </h4>
          <p class="experience__subheading">Juli 2022 bis August 2023</p>
        </div>
      </header>
      <p class="block space">
        Frontend Development unter Verwendung von HTML, CSS(SCSS), TypeScript / JavaScript mit
        Angular 9+ (inkl. Storybook UI / UX Systemen) im agilen Arbeitsumfeld (SCRUM/KANBAN)
      </p>
      <PreviewComponent
        :imgScreenSrc="ScreenFerberDigital"
        :imgMobileSrc="MobileFerberDigital"
        headline="Zeiterfassung Ferber Digital"
        :bulletpoints="['Angular-Anwendung', 'Firebase als Datenbank', 'O-Auth bei Login']"
      />
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Wissenschaftlicher Mitarbeiter<br />
            Prof. Dr. Heiner Dunckel (MdL a.D.), Flensburg
          </h4>
          <p class="experience__subheading">August 2018 bis Juni 2022</p>
        </div>
      </header>
      <p class="block">
        Verwaltung und Organisation von Terminen, professionelle Kommunikation u.a. im Kontext von
        Bürger*innen-Anfragen und (Internet-)Recherchen zu unterschiedlichen Themen
      </p>
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Campaigner<br />
            Küste gegen Plastik e.V., Niebüll
          </h4>
          <p class="experience__subheading">April 2021 bis März 2022</p>
        </div>
      </header>
      <p class="block">
        Öffentlichkeitsarbeit (Homepage, Social-Media & Info- Stände), Datenbank- Arbeit im Rahmen
        der kampagnenbegleitenden App, professionelle Kommunikation mit Akteuren aus Wirtschaft,
        Politik und Zivilgesellschaft
      </p>
    </section>
  </article>
</template>

<style scoped>
.flex-center {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
.icon {
  margin-right: 6px;
  line-height: 1;
}
.headline {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 12px;
}
.text-wrapper {
  margin: 12px 12px;
}
.experience-container {
  max-width: 60ch;
  margin: 0 auto;
  padding: 12px 0;
}
.experience__heading {
  font-weight: 600;
  font-size: 0.9rem;
  max-width: 60ch;
}
.experience__subheading {
  font-style: italic;
  padding-top: 6px;
  max-width: 60ch;
}
section {
  margin-bottom: 36px;
  padding-bottom: 12px;
}
section::after {
  content: '';
  position: absolute;
  left: calc(50% - 150px);
  width: 300px;
  border-bottom: 0.5px dotted var(--color-text);
  margin-top: 24px;
}
.block {
  text-align: justify;
  max-width: 60ch;
  margin: 0 auto;
  padding: 12px 0;
}
.space {
  margin-bottom: 12px;
}
@media screen and (min-width: 768px) {
  .experience__heading {
    font-size: 1.5rem;
  }
}
</style>
