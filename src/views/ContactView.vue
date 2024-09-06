<script lang="ts" setup>
import GitHubIcon from '@/assets/icons/icons8-github.svg?raw'
import LinkedInIcon from '@/assets/icons/icons8-linkedin.svg?raw'
import InstagramIcon from '@/assets/icons/icons8-instagram.svg?raw'
import HendrikSH from '@/assets/images/HendrikSH_freigestellt.png'
import HomeIcon from '@/assets/icons/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import MailIcon from '@/assets/icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
import PhoneIcon from '@/assets/icons/phone_iphone_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg?raw'
</script>

<template>
  <article>
    <h1>Kontakt</h1>
    <div class="contact-container">
      <div class="address-container">
        <div>
          <address>
            <div class="flex">
              <span v-html="HomeIcon" class="icon"></span>
              <p>
                Hendrik Schwind-Hansen
                <br />
                Lorenz-Jannsen-Str. 42
                <br />
                25899 Niebüll
              </p>
            </div>
            <div class="flex">
              <span v-html="PhoneIcon" class="icon"></span>
              <p><a href="tel:+491752489143" class="link">0175 / 2489143</a></p>
            </div>
            <div class="flex">
              <span v-html="MailIcon" class="icon"></span>
              <p><a href="mailto:info@hendrik-sh.de" class="link">info@hendrik-sh.de</a></p>
            </div>
          </address>
        </div>
        <div class="pic-container">
          <img :src="HendrikSH" alt="Porträt Hendrik Schwind-Hansen" class="pic" />
        </div>
      </div>
      <p>...follow me on:</p>
      <div class="icon-container">
        <div class="column">
          <a href="https://github.com/hsh420" target="_blank" class="icon-link"
            ><span v-html="GitHubIcon"></span
          ></a>
          <span class="icon-desc">GitHub</span>
        </div>
        <div class="column">
          <a
            href="https://www.linkedin.com/in/hendrik-schwind-hansen/"
            target="_blank"
            class="icon-link"
            ><span v-html="LinkedInIcon"></span
          ></a>
          <span class="icon-desc">LinkedIn</span>
        </div>
        <div class="column">
          <a href="https://github.com/hsh420" target="_blank" class="icon-link"
            ><span v-html="InstagramIcon"></span
          ></a>
          <span class="icon-desc">Instagram</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.icon-desc {
  text-align: center;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.flex {
  display: flex;
  gap: 12px;
}
.flex + .flex {
  margin-top: 12px;
}
h1 {
  text-align: center;
  font-size: 2rem;
}
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 12px 12px;
  overflow: hidden;
}

.address-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
}

.link {
  text-decoration: none;
  color: var(--color-text);
}
.pic-container {
  width: 175px;
}
.pic {
  width: 200px;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 24px;
}

.icon-link {
  background-color: var(--color-text);
  border-radius: 10px;
  padding: 10px;
  width: 70px;
  height: 70px;
}

.icon-container > a:hover {
  box-shadow: 0 0 10px 0 var(--color-text);
}
</style>
