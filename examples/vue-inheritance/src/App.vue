<template>
  <div id="app">
    <h1>Extending Vue.js Components</h1>
    <h2>Using mixins</h2>
    <Mix></Mix>
    <h2>Using extends</h2>
    <Parent param="param value 1"></Parent>
    <ChildExtend param="param value 2"></ChildExtend>
  </div>
</template>

<script>
import Parent from './components/Parent'
import ChildExtend from "./components/ChildExtend";
import Mix from "@/components/Mix";

export default {
  name: 'App',
  components: {
    Mix,
    ChildExtend,
    Parent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
}

.pl-1 {
  padding-left: 1em;
}

.component-border {
  border: 1px solid #2C3E50;
}

.ms-1 {
  margin-inline-start: 1em;
}

.me-1 {
  margin-inline-end: 1em;
}

.mb-1 {
  margin-bottom: 1em;
}
</style>