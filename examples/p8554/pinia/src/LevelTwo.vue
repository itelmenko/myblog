<template>
  <div class="level level-2">
    <span class="value">Level 2. Value: {{ store.counter }}</span>
    <level-three></level-three>
  </div>
</template>

<script setup>
import LevelThree from './LevelThree.vue'
import { useCounterStore } from './state.js'

const store = useCounterStore()
</script>

<style scoped>
.level-2 {
  background-color: greenyellow;
}
</style>
