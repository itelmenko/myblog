<template>
  <div id="app">
    <h1>Extending Vue.js Components</h1>
    <h2>Using mixins</h2>
    <Mix></Mix>
    <h2>Using extends</h2>
    <Parent param="param value 1"></Parent>
    <ChildExtend param="param value 2"></ChildExtend>
    <h2>Higher-order components</h2>
    <button class="ms-1 me-1">Base button</button>
    <extended-button class="me-1">Extended Button with logger</extended-button>
  </div>
</template>

<script>
import Parent from './components/Parent'
import ChildExtend from "./components/ChildExtend";
import Mix from "@/components/Mix";

import BaseButton from "@/components/BaseButton";
import { withLoggerButton} from "@/withLoggerHOC";
const ExtendedButton = withLoggerButton(BaseButton);

export default {
  name: 'App',
  components: {
    Mix,
    ChildExtend,
    Parent,
    ExtendedButton
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