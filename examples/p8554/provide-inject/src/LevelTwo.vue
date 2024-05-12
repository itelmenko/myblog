<template>
  <div class="level level-2">
    <span class="value">Level 2. Value: {{ ourCounter }}</span>
    <level-three></level-three>
  </div>
</template>

<script setup>
import LevelThree from './LevelThree.vue'
import { inject } from 'vue'

// Внедряем в компонент переменную и даем локальное имя
const ourCounter = inject('globalCounter')
</script>

<style scoped>
.level-2 {
  background-color: greenyellow;
}
</style>
