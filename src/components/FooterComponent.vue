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
.footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  box-shadow: 0 4px 20px 0px var(--color-text);
  margin-top: 12px;
}
.link {
  color: var(--color-text);
}
</style>
