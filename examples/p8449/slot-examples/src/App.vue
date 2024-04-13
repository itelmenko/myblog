<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/nested-with-props">Nested With Props</RouterLink> |
      <RouterLink to="/nested-with-styles">Nested With CSS</RouterLink> |
      <RouterLink to="/nested-with-own-templates">Nested With Own Templates</RouterLink> |
      <RouterLink to="/nested-with-named-slots">Nested With Named Slots</RouterLink> |
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
