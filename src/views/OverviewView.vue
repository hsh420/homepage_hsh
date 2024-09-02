<script lang="ts" setup>
import CardComponent from '@/components/CardComponent.vue'
import accountIcon from '@/assets/icons/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import codeIcon from '@/assets/icons/code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import previewIcon from '@/assets/icons/preview_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import contactIcon from '@/assets/icons/contact_mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import { RouterLink } from 'vue-router'

const cards = [
  {
    headline: 'Persönliches',
    text: 'Hier gibt es mehr Infos zu mir als Person: von Ehrenamt über Hobbies - wer ist eigentlich der Mensch hinter dem Computer?',
    iconSrc: accountIcon,
    alt: 'Account Icon',
    routerLink: 'about-me'
  },
  {
    headline: 'Fähigkeiten',
    text: 'Kurzer Überblick zu den Technologien, mit denen ich arbeite - mein Techstack im Detail mit entsprechenden Zertifikaten.',
    iconSrc: codeIcon,
    alt: 'Code Icon',
    routerLink: 'skills'
  },
  {
    headline: 'Referenzen',
    text: 'Eine kleine Auswahl meiner privaten und beruflichen Projekte, die ich bisher - alleine und im Team - begleiten durfte.',
    iconSrc: previewIcon,
    alt: 'Preview Icon',
    routerLink: 'experience'
  },
  {
    headline: 'Kontakt',
    text: 'Alle Kontaktmöglichkeiten auf einen Blick: von Social-Media über Telefon bis hin zur Adresse für analoges Mailing. ;-)',
    iconSrc: contactIcon,
    alt: 'Contact Icon',
    routerLink: 'contact'
  }
]
</script>

<template>
  <ul>
    <li v-for="card of cards">
      <RouterLink :to="{ name: card.routerLink }">
        <CardComponent
          :headline="card.headline"
          :text="card.text"
          :iconSrc="card.iconSrc"
          :alt="card.alt"
        />
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 12px 24px;
}
li {
  list-style: none;
}
li + li {
  margin-top: 24px;
}
a {
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
}
</style>
