<template>
  <div class="level level-3">
    <span class="value">Level 3. Value: {{ topCounter }}</span>
    <!-- Управляем реактивными данными используя локальное имя -->
    <button @click="topCounter++">+</button>
    <button @click="topCounter--">-</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// Внедряем в компонент переменную и даем локальное имя
const topCounter = inject('globalCounter')
</script>

<style scoped>
.level-3 {
  background-color: white;
}
</style>
