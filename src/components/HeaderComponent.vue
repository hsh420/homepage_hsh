<script lang="ts" setup>
import AtomAnimationComponent from './AtomAnimationComponent.vue'
import '@/assets/base.css'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const input = ref<HTMLInputElement | null>(null)

let navbarToggle = ref<boolean>(false)
function toggleNavbar() {
  return navbarToggle.value
    ? ((navbarToggle.value = false), (input.value!.checked = false))
    : ((navbarToggle.value = true), (input.value!.checked = true))
}

const activeRoute = useRoute()

const routes = [
  {
    name: 'home',
    text: 'Start'
  },
  {
    name: 'about-me',
    text: 'Persönliches'
  },
  {
    name: 'skills',
    text: 'Fähigkeiten'
  },
  {
    name: 'references',
    text: 'Referenzen'
  },
  {
    name: 'experience',
    text: 'Berufserfahrung'
  },
  {
    name: 'contact',
    text: 'Kontakt'
  },
  {
    name: 'datenschutz',
    text: 'Datenschutz'
  },
  {
    name: 'impressum',
    text: 'Impressum'
  }
]
</script>

<template>
  <header>
    <div class="head__wrapper">
      <AtomAnimationComponent />
      <div>
        <h2 class="head__title">H. Schwind-Hansen</h2>
        <h3 class="head__subtitle">Web-Development 🚀</h3>
      </div>
      <div>
        <div class="menu-icon">
          <input
            type="checkbox"
            name="navbar-toggle"
            id="navbar-toggle"
            :value="navbarToggle"
            ref="input"
            @change="toggleNavbar()"
          />
          <label for="navbar-toggle" class="navbar-toggle-handler">
            <span class="sr-only"> Klicken, um Menu zu öffnen </span>
            <div class="menu_icon_bar line-top"></div>
            <div class="menu_icon_bar line-center"></div>
            <div class="menu_icon_bar line-bottom"></div>
          </label>
        </div>
      </div>
    </div>
    <Transition>
      <div v-if="navbarToggle === true">
        <nav id="navbar">
          <h2 class="navbar__title">Navigation</h2>
          <menu v-for="route of routes">
            <li>
              <RouterLink
                :to="{ name: route.name }"
                :class="activeRoute.name === route.name ? 'link active' : 'link'"
                @click="toggleNavbar()"
                >{{ route.text }}</RouterLink
              >
            </li>
          </menu>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
}
.head__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: var(--color-background);
  box-shadow: 0 4px 20px -12px var(--color-text);
  padding: 6px 12px;
}
.head__title {
  width: 155px;
}
.head__subtitle {
  text-align: center;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.menu_icon {
  position: absolute;
  right: 15px;
  top: 50%;
  display: block;
  transform: translateY(-50%);
  padding: 6px 6px;
  display: flex;
  flex-direction: column;
}
.menu_icon_bar {
  background-color: var(--color-text);
  height: 2px;
  width: 25px;
  transition: transform 150ms;
  margin: 6px 6px;
}

#navbar-toggle {
  all: unset;
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

#navbar-toggle:checked ~ .navbar-toggle-handler > .line-top {
  transform: translateY(400%) rotate(45deg);
}

#navbar-toggle:checked ~ .navbar-toggle-handler > .line-center {
  opacity: 0;
}

#navbar-toggle:checked ~ .navbar-toggle-handler > .line-bottom {
  transform: translateY(-400%) rotate(-45deg);
}

body:has(#navbar-toggle:checked) {
  overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#navbar {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
  height: 100vh;
  border-top: 1px solid var(--color-text);
}

.navbar__title {
  font-size: 1.5rem;
  text-align: center;
  padding: 12px 0;
}

menu {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  list-style: none;
  padding-left: 0;
}

.link {
  text-decoration: none;
  color: var(--color-text);
}

.active {
  text-decoration: underline;
  font-weight: 700;
}
</style>
