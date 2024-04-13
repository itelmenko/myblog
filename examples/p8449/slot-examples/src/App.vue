<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/nested-components-with-props">Nested With Props</RouterLink> |
      <RouterLink to="/nested-components-with-styles">Nested With CSS</RouterLink> |
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
