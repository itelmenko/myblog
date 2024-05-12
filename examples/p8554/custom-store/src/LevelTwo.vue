<template>
  <div class="level level-2">
    <span class="value">Level 2. Value: {{ counter }}</span>
    <level-three></level-three>
  </div>
</template>

<script setup>
import LevelThree from './LevelThree.vue'
import useState from './state.js'

const { counter } = useState()
</script>

<style scoped>
.level-2 {
  background-color: greenyellow;
}
</style>
