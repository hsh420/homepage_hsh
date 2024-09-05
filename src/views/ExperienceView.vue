<script lang="ts" setup>
import PreviewComponent from '@/components/PreviewComponent.vue'
import ScreenKiezKomplizen from '@/assets/images/Screen_KiezKomplizen.png'
import MobileKiezKomplizen from '@/assets/images/Mobile_KiezKomplizen.png'
</script>

<template>
  <article class="text-wrapper">
    <h1 class="headline">Berufserfahrung</h1>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">Frontend-Developer, ComLine GmbH, Flensburg</h4>
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
            Web-Anwendungsentwickler, Coding Bootcamps Europe, Berlin
          </h4>
          <p class="experience__subheading">März 2024 bis September 2024</p>
        </div>
      </header>
      <p class="block">
        Front- und Backend Development u.a. mit AstroJS, Vue, nodeJS, ExpressJS; Testing u.a. mit
        Postman, Cypress; Build- und Deployment-Prozesse u.a. via Netlify
      </p>
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">Trainee, Coding Bootcamps Europe, Berlin</h4>
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
          <h4 class="experience__heading">Frontend-Developer bei Ferber Digital GmbH, Flensburg</h4>
          <p class="experience__subheading">Juli 2022 bis August 2023</p>
        </div>
      </header>
      <p class="block">
        Frontend Development unter Verwendung von HTML, CSS(SCSS), TypeScript / JavaScript mit
        Angular 9+ (inkl. Storybook UI / UX Systemen) im agilen Arbeitsumfeld (SCRUM/KANBAN)
      </p>
    </section>
    <section>
      <header>
        <div class="experience-container">
          <h4 class="experience__heading">
            Wissenschaftlicher Mitarbeiter bei Prof. Dr. Heiner Dunckel, MdL a.D., Flensburg
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
          <h4 class="experience__heading">Campaigner, Küste gegen Plastik e.V., Niebüll</h4>
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
.headline {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 12px;
}
.text-wrapper {
  margin: 12px 12px;
}
.experience-container {
  margin-bottom: 12px;
}
.experience__heading {
  font-weight: 600;
}
.experience__subheading {
  font-style: italic;
}
section {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 2px dashed var(--color-text);
}
section:last-child {
  border-bottom: none;
}
.block {
  text-align: justify;
}
.space {
  margin-bottom: 12px;
}
</style>
