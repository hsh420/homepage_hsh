<script lang="ts" setup>
import codeIcon from '@/assets/icons/code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

let placeholder = ref('placeholder')

function transformPlaceholder() {
  console.log(placeholder)
  return placeholder.value === 'placeholder'
    ? (placeholder.value = 'transformed')
    : (placeholder.value = 'placeholder')
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Vue',
  'AstroJS',
  'Git / GitHub',
  'E2E-Testing',
  'Cypress',
  'nodeJS',
  'ExpressJS',
  'Storybook',
  'RESTful API',
  'UI-/UX-Design',
  'Responsive Design',
  'Scrum',
  'KanBan',
  'Datenbankanbindung',
  'Firebase',
  'Tailwind-CSS',
  'SCSS'
]
</script>

<template>
  <article>
    <div class="flex-center">
      <span class="icon" v-html="codeIcon"></span>
      <h1 class="headline">Fähigkeiten</h1>
    </div>
    <div :class="placeholder">
      <div>
        <p>
          Mein Schwerpunkt liegt im Bereich Frontend-Development. Ausgangspunkt ist das
          "Basis-Wissen": HTML, CSS, JavaScript. Damit lassen sich kleine Spielerein wie diese hier
          erschaffen.
        </p>
      </div>
      <div class="cta-container">
        <p>Beispiel?</p>
        <p class="placeholder__arrow">&#8681;</p>
        <ButtonComponent
          :className="placeholder === 'placeholder' ? 'primary' : 'warn'"
          :text="placeholder === 'placeholder' ? 'Beispiel zeigen' : 'Zurücksetzen'"
          :method="transformPlaceholder"
        />
      </div>
    </div>
    <div class="text-container">
      <p class="text">
        ...ausgehend von diesem Basis-Wissen bringe ich umfangreiche Kenntnisse hinsichtlich der
        Arbeit mit modernen Frameworks mit. Erfahrungen habe ich dabei insbesondere mit Angular, Vue
        und AstroJS sammeln können. Dabei habe ich auch immer wieder Third-Party-Angebote wie bspw.
        Bootstrap eingebunden oder auch CSS-Precompiler wie SCSS verwendet.
      </p>
    </div>
    <div class="skill-wrapper">
      <div class="skill-container">
        <span v-for="skill of skills" class="skill">{{ skill }}</span>
      </div>
    </div>
    <div class="text-container">
      <p class="text">
        Um meinen Code noch robuster zu gestalten, verwende ich - wenn möglich - TypeScript. Die
        Anbindung von Datenbanken via RESTful API, die Versionierung des Codes mit Git und GitHub
        und auch die Qualitätskontrolle durch Unit- sowie E2E-Testing runden meine Arbeit ab.
      </p>
    </div>
    <div class="text-container">
      <p class="text">
        Zuletzt habe ich nunmehr kleine Ausflüge in den Bereich "Backend" vollzogen. Hier habe ich
        mithilfe von nodeJS sowie ExpressJS erste, simple Projekte aufgesetzt; theoretisches Wissen
        über Java / Springboot kommt durch Absolvieren eines zertifizierten Kurses hinzu. Des
        Weiteren konnte ich erste Erfahrungen im Bereich Docker / Kubernetes sammeln - ebenfalls
        durch einen zertifizierten Kurs.
      </p>
    </div>
    <div class="nav">
      <p>...die Fähigkeiten in Aktion sehen?</p>
      <ButtonComponent className="accent" link="references" text="Zu den Referenzen" />
    </div>
  </article>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.icon {
  line-height: 1.6;
  margin-right: 6px;
}
.headline {
  line-height: 1.6;
  font-size: 2rem;
}
.text-container {
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
}
.text-container + .text-container {
  margin-top: 12px;
}
.text-container:nth-child(1) {
  font-size: 1.5rem;
}
.placeholder {
  background-color: #fff;
  color: #000;
  font-family: monospace;
  margin-bottom: 12px;
}
.placeholder__arrow {
  font-size: 1.5rem;
  animation: bounce 2s linear infinite;
}
.transformed {
  animation: buildUp 3s forwards;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.cta-container {
  text-align: center;
}
.skill-wrapper {
  overflow: hidden;
  height: 40px;
  max-width: 100%;
  box-sizing: content-box;
  padding-left: 100%;
  margin: 24px 0;
}
.skill-container {
  padding-right: 100%;
  display: inline-block;
  height: 40px;
  width: 2010px;
  white-space: nowrap;
  animation: ticker 60s linear infinite;
  box-sizing: content-box;
  font-size: 12px;
}
.skill-container:hover {
  animation-play-state: paused;
}
.skill {
  padding: 6px 12px;
  background-color: var(--color-text);
  color: var(--color-background);
  border-radius: 14px;
  height: 30px;
  display: inline-block;
  margin-right: 14px;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px 12px;
}

@keyframes buildUp {
  0% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
  }
  10% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
    padding-top: 12px;
  }
  20% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  30% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
  }
  40% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
  }
  50% {
    background-color: #fff;
    color: #000;
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
  }
  60% {
    color: #000;
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    background-color: var(--color-background);
  }
  70% {
    font-family: monospace;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    background-color: var(--color-background);
    color: var(--color-text);
  }
  80% {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: 'Ubuntu';
  }
  90% {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: 'Ubuntu';
  }
  100% {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: 'Ubuntu';
    gap: 12px;
    max-width: 60ch;
    margin: 0 auto;
  }
}

@keyframes ticker {
  100% {
    transform: translateX(-2500px);
  }
}

@media screen and (min-width: 400px) {
  @keyframes ticker {
    100% {
      transform: translateX(-3000px);
    }
  }
}
@media screen and (min-width: 1000px) {
  @keyframes ticker {
    100% {
      transform: translateX(-3300px);
    }
  }
}
</style>
