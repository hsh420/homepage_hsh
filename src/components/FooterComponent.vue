<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div class="footer">
      <div>
        <p>...made with love by myself... 😎</p>
      </div>
      <div>
        <RouterLink :to="{ name: 'impressum' }" class="link">Impressum</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  overflow: hidden;
}
.footer {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 12px 24px;
  box-shadow: 0 4px 20px 0px var(--color-text);
  margin-top: 12px;
  max-width: 1280px;
  font-size: 1rem;
}
.link {
  color: var(--color-text);
}
</style>
