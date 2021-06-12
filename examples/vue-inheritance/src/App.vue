<template>
  <div id="app">
    <h1>Extending Vue.js Components</h1>

    <h2>Using mixins</h2>
    <mix></mix>

    <h2>Using extends</h2>
    <parent param="param value 1"></parent>
    <child-extend param="param value 2"></child-extend>

    <h2>Higher-order components</h2>
    <base-button class="ms-1 me-1">Base button</base-button>
    <extended-button class="me-1">Extended Button with logger</extended-button>

    <h2>Composition API</h2>
    <composition-example class="ms-1"></composition-example>

    <h2>Scoped Slots and Renredless Component</h2>
    <scoped-slot-example class="ms-1"></scoped-slot-example>
  </div>
</template>

<script>
import Parent from './components/Parent'
import ChildExtend from "./components/ChildExtend";
import Mix from "./components/Mix";

import BaseButton from "./components/BaseButton";
import { withLoggerButton} from "./withLoggerHOC";
const ExtendedButton = withLoggerButton(BaseButton);

import CompositionExample from "./components/CompositionExample";
import ScopedSlotExample from "./components/ScopedSlotExample";

export default {
  name: 'App',
  components: {
    Mix,
    ChildExtend,
    Parent,
    BaseButton,
    ExtendedButton,
    CompositionExample,
    ScopedSlotExample
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