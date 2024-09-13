<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import accountIcon from '@/assets/icons/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import HendrikGitarre from '@/assets/images/Hendrik_Gitarre.jpeg'
import HendrikWilly from '@/assets/images/HendrikWilly.jpeg'
import HendrikUrlaub from '@/assets/images/HendrikUrlaub.jpeg'
</script>

<template>
  <div class="flex-center">
    <span v-html="accountIcon" class="icon"></span>
    <h1>Persönliches</h1>
  </div>
  <p class="quote">
    <q>playing with strings... sometimes on guitar, but mostly with TypeScript/JavaScript</q>
  </p>
  <div class="img-container">
    <img :src="HendrikGitarre" alt="Hendrik Schwind-Hansen beim Gitarre-Spielen" class="img" />
  </div>
  <div class="text">
    Wenn ich mich selbst beschreiben sollte, würde wohl auf jeden Fall das Wort "vielseitig" fallen.
    Dabei stechen aber sicher vier Stichworte heraus: Musik, Politik, Digitales. Musik ist mein
    dauerhafter Begleiter und sollte ich beim Bugfixing mal nicht weiterkommen, spiele ich gerne
    eine Runde Gitarre, um den Kopf wieder frei zu bekommen.
  </div>
  <div class="img-container">
    <img :src="HendrikWilly" alt="Hendrik Schwind-Hansen neben Willy-Brandt-Statue" class="img" />
  </div>
  <div class="text">
    Sehr früh war ich außerdem politisch aktiv und habe 10 Jahre auf kommunalpolitischer Ebene
    versucht, meinen Heimat- und Geburtsort nach vorne zu bringen. Highlight waren darüber hinaus
    zwei Kandidaturen für den schleswig-holsteinischen Landtag. Mir ist meine Umwelt - sei es Natur
    oder Menschen - nicht egal. Gerne bin ich daher auch offen für unentgeltliche Projekte, wenn ich
    von der Sache überzeugt bin.
  </div>
  <p class="breaker">...du hast ein solches Projekt? Vielleicht auch nur als grobe Idee?</p>
  <div class="cta">
    <p>Nimm Kontakt zu mir auf!</p>
    <ButtonComponent className="accent" text="Zum Kontakt" link="contact" />
  </div>
  <div class="text">
    Digitales fasziniert mich schon mein Leben lang. Beruflich hatte ich jedoch zunächst andere
    Pläne und wollte Lehrkraft werden. Das dazugehörige Studium habe ich auch abgeschlossen, aber
    dann gemerkt, dass meine Passion woanders liegt. Trotzdem kann ich das Studium bis heute nutzen
    und mit den dort erworbenen autodidaktischen Fähigkeiten Dokumentationen von Frameworks,
    Programmiersprachen usw. in Kürze verschlingen.
  </div>
  <div class="education">
    <h3>Mein Bildungsweg in Kürze</h3>
    <ul>
      <li>
        Master of Education (Lehramt an Sekundarschulen), <br />
        Europa-Universität Flensburg (1,4) | <span class="date">10/2016-02/2019</span>
      </li>
      <li>
        Bachelor of Arts (Bildungswissenschaften), <br />
        Europa-Universität Flensburg (1,8) | <span class="date">09/2013-10/2016</span>
      </li>
    </ul>
    <p>...während dieser Zeit: Stipendiat bei der Friedrich-Ebert-Stiftung</p>
  </div>
  <div class="img-container">
    <img :src="HendrikUrlaub" alt="Hendrik Schwind-Hansen neben Willy-Brandt-Statue" class="img" />
  </div>
  <p class="breaker">
    Sonst noch was? Ich verreise gerne... Aber zurück zum Thema: Web-Development. Welche Fähigkeiten
    ich in diesem Bereich mittlerweile mitbringe, gibt es auf den folgenden Seiten zu sehen.
  </p>
  <div class="cta">
    <p>Zeig mir die Fähigkeiten:</p>
    <ButtonComponent className="accent" text="Zu den Fähigkeiten" link="skills" />
  </div>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.icon {
  margin-right: 6px;
  line-height: 1.6;
}
h1 {
  text-align: center;
  font-size: 2rem;
}
.quote {
  width: 100%;
  text-align: center;
  padding-top: 12px;
  font-style: italic;
}
.img-container {
  display: flex;
  justify-content: center;
  margin: 24px 12px;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 1px var(--color-text);
}
.img:nth-child(1) {
  object-position: 0 0;
}
.breaker {
  padding: 12px 12px;
  margin: 0 auto;
  max-width: 60ch;
}
.cta {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 12px 0;
}
.cta > p {
  font-weight: 600;
}
.education {
  padding: 12px 12px;
  max-width: 60ch;
  margin: 0 auto;
}
.education > h3 {
  text-align: center;
  font-size: 1.2rem;
}
.education > ul {
  margin: 12px 0;
}
.date {
  font-style: italic;
}

@media screen and (min-width: 769px) {
  .education > h3 {
    font-size: 2.2rem;
  }
  .img {
    width: 300px;
    height: 300px;
  }
}
</style>
