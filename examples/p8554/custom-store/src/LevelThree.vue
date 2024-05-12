<template>
  <div class="level level-3">
    <span class="value">Level 3. Value: {{ counter }}</span>
    <!-- Управляем реактивными данными используя локальное имя -->
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
import useState from './state.js'

const { counter } = useState()
</script>

<style scoped>
.level-3 {
  background-color: white;
}
</style>
