<template>
  <h1>Vue provide/inject demonstration</h1>
  <parent />
</template>

<script>
import Parent from "./components/Parent";

export default {
  name: 'App',
  components: {
    Parent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
